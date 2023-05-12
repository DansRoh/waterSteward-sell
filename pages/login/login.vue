<template>
	<view class="page-login">
		<navbar>
			<view slot="content" class="custon-nav-content">
				<van-image class="left-box" width="208rpx" height="52rpx" src="/static/logo.png"></van-image>
			</view>
		</navbar>
		<van-image width="100vw" height="652rpx" src="/static/images/02_login_banner.png"></van-image>
		<view class="inp-list">
			<cus-input type="number" custom-class="cus-input" label="手机号" :value="formData.phone"
				@input="bindInput('phone', $event)" hasBorder></cus-input>
			<cus-input type="number" custom-class="cus-input" label="验证码" :value="userInfo.veriCode"
				@input="bindInput('veriCode',$event)" hasBorder>
				<van-button custom-style="width: 208rpx" type="primary" color="#383838" slot="right"
					:disabled="isVericodeBtnDisable" @click="handleClickGetVericodeBtn">{{vericodeBtnText}}</van-button>
			</cus-input>
		</view>
		<van-button class="mt30" type="primary" color="#FFD242" @click="handleClickLogin" :disabled="isDisabledLogin"
			custom-style="width: 592rpx;font-size:36rpx;height: 112rpx;color:#383838;" round>登录</van-button>
		<view class="go-register-box">
			没有账号?
			<view @click="jumpRegister" class="c7A6AF4">去注册</view>
		</view>
		<van-checkbox class="mt200" :value="isAgree" @change="(e)=>{isAgree = e.detail}" shape="square">
			“净水器项目”相关信息与免责协议
		</van-checkbox>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue';
	import cusInput from '../../components/cus-input/cus-input.vue'
	export default {
		components: {
			navbar,
			cusInput
		},
		data() {
			return {
				formData: {
					phone: '',
					veriCode: '',
				},
				isAgree: false,
				vericodeBtnText: '获取验证码',
				isVericodeBtnDisable: false,
			};
		},
		computed: {
			isDisabledLogin() {
				return Object.values(this.formData).some(val => val === '')
			}
		},
		onLoad() {
		},
		methods: {
			bindInput(key, value) {
				this.formData[key] = value
			},
			handleClickLogin() {
				if (!this.isAgree) {
					uni.showToast({
						title: '请阅读并同意协议',
						icon: 'none'
					})
					return
				}
				uni.setStorageSync('isLogin', true)
				uni.switchTab({
					url: "/pages/signedClient/signedClient"
				})
			},
			handleClickGetVericodeBtn() {
				this.isVericodeBtnDisable = true;
				this.vericodeBtnText = "剩余60s"
				let num = 59
				const vericodeBtnTimer = setInterval(() => {
					if (num === 0) {
						this.vericodeBtnText = "获取验证码";
						this.isVericodeBtnDisable = false
						clearInterval(vericodeBtnTimer);
					} else {
						this.vericodeBtnText = "剩余" + num + "s"
						num--;
					}
				}, 1000)
			},
			jumpRegister() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			}
		}
	}
</script>

<style lang="less">
	.page-login {
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F2F4F7;
		display: flex;
		flex-direction: column;
		align-items: center;
		.custon-nav-content {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: flex-end;
			padding-left: 40rpx;
		}

		.inp-list {
			.cus-input {
				width: 624rpx;
				height: 80rpx;
				margin-top: 30rpx;
			}
		}
		.go-register-box {
			margin-top: 50rpx;
			display: flex;
			font-size: 30rpx;
			color: #5E5E5E;
		}
	}
</style>