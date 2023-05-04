<template>
	<view class="page-login" :style="{paddingTop: ptHeight+'px'}">
		<navbar>
			<view class="df aic c5e" slot="left-box">
				<van-image width="208rpx" height="40rpx" src="/static/icon/10_waterStewardText.png"></van-image>
				<view class="cue-divider mr16 ml16">
				</view>
				<view class="fs36 c5e">
					销售端
				</view>
			</view>
		</navbar>
		<van-image width="100vw" height="652rpx" src="/static/images/02_login_banner.png"></van-image>
		<van-cell-group custom-class="cus-cell-group-class">
			<van-field title-width="104rpx" @change="phoneNumChange" type="number"
				custom-style="border: 2rpx solid #828698;margin-bottom:30rpx;border-radius: 8rpx;overflow:hidden;" size="large"
				label="手机号" label-class="custom-label" :value="phoneNum" clearable>
			</van-field>
			<van-field title-width="104rpx" @change="veriCodeChange"
				custom-style="border: 2rpx solid #828698;padding:0;padding-left:34rpx;align-items:center;border-radius: 8rpx;overflow:hidden;"
				size="large" label="验证码" label-class="custom-label" :value="veriCode" clearable>
				<van-button custom-style="width: 208rpx" :disabled="isVericodeBtnDisable" @click="handleClickGetVericodeBtn"
					type="primary" color="#383838" slot="button">{{vericodeBtnText}}</van-button>
			</van-field>
		</van-cell-group>
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
	export default {
		components: {
			navbar
		},
		data() {
			return {
				phoneNum: '',
				veriCode: '',
				isAgree: false,
				vericodeBtnText: '获取验证码',
				isVericodeBtnDisable: false,
				ptHeight: 60,
				isDisabledLogin: false,
			};
		},
		onLoad() {
			const ptHeight = uni.getStorageSync('navHeight')
			if (ptHeight) {
				this.ptHeight = ptHeight
			}
		},
		methods: {
			phoneNumChange(e) {
				this.phoneNum = e.detail
			},
			veriCodeChange(e) {
				this.veriCode = e.detail
			},
			handleClickLogin() {
				if (!this.phoneNum) {
					uni.showToast({
						title: '请填写手机号',
						icon: 'error'
					})
					return
				}
				if (!this.veriCode) {
					uni.showToast({
						title: '请填写验证码',
						icon: 'error'
					})
					return
				}
				if (!this.isAgree) {
					uni.showToast({
						title: '请阅读并同意协议',
						icon: 'error'
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

		.cue-divider {
			width: 2rpx;
			height: 34rpx;
			background-color: #5E5E5E;
		}

		.login-poster {
			width: 100vw;
			height: 652rpx;
			border: 1px solid;
		}

		.cus-cell-group-class {
			margin: 0 auto;
			width: 624rpx;

			.custom-label {
				width: 104rpx;
				font-size: 28rpx;
				color: #828698;
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