<template>
	<view class="page-register">
		<navbar>
			<view slot="content" class="custon-nav-content">
				<van-image class="left-box" width="208rpx" height="52rpx" src="/static/logo.png"></van-image>
			</view>
		</navbar>

		<van-image width="100vw" height="446rpx" src="/static/images/01_register_banner.png"></van-image>
		<view class="inp-list">
			<cus-input type="text" custom-class="cus-input" label="姓名" :value="userInfo.name"
				@input="bindInput('name', $event)" hasBorder></cus-input>
			<cus-input type="text" custom-class="cus-input" label="身份证" :value="userInfo.id_card"
				@input="bindInput('id_card',$event)" hasBorder></cus-input>
			<cus-input type="number" custom-class="cus-input" label="手机号" :value="userInfo.phone"
				@input="bindInput('phone',$event)" hasBorder></cus-input>
			<cus-input type="number" custom-class="cus-input" label="验证码" :value="userInfo.code"
				@input="bindInput('code',$event)" hasBorder>
				<van-button custom-style="width: 208rpx" type="primary" color="#383838" slot="right"
					:disabled="isVericodeBtnDisable" @click="handleClickGetVericodeBtn">{{vericodeBtnText}}</van-button>
			</cus-input>
		</view>
		<van-button @click="handleClickRegister" class="mt30" type="primary" color="#FFD242" :disabled="isConfirmBtnDisable"
			custom-style="width: 592rpx;font-size:36rpx;height: 110rpx;color:#383838;" round>确认注册</van-button>
		<view class="go-login-box">
			已有账号?
			<view @click="jumpLogin" class="c7A6AF4">去登录</view>
		</view>
	</view>
</template>

<script>
	import cusInput from '../../components/cus-input/cus-input.vue'
	import {
		isValidPhoneNumber,
		validateIdNumber
	} from '../../utils/tool.js'
	export default {
		components: {
			cusInput
		},
		data() {
			return {
				code: '',
				userInfo: {
					name: '',
					id_card: '',
					phone: '',
					code: ''
				},
				vericodeBtnText: '发送验证码',
				isVericodeBtnDisable: false,
				isAgree: false,
			};
		},
		computed: {
			isConfirmBtnDisable() {
				return Object.values(this.userInfo).some(val => val === '')
			}
		},
		methods: {
			bindInput(key, value) {
				this.userInfo[key] = value
			},
			// 注册
			async handleClickRegister() {
				for (let key in this.userInfo) {
					if(!this.userInfo[key]) {
						uni.showToast({
							title: '请填写完整信息',
							icon:'error'
						})
						return
					}
				}
				if (!validateIdNumber(this.userInfo.id_card)) {
					uni.showToast({
						title: '身份证格式有误',
						icon: 'error'
					})
					return
				}
				if (!isValidPhoneNumber(this.userInfo.phone)) {
					uni.showToast({
						title: '手机号格式有误',
						icon: 'error'
					})
					return
				}
				const {
					data,
					statusCode
				} = await this.$http('/market/profile', 'post', this.userInfo)
				if (statusCode === 201) {
					uni.setStorageSync('token', data.token)
					uni.switchTab({
						url: "/pages/signedClient/signedClient"
					})
				} else {
					uni.showToast({
						title: '网络错误',
						icon: 'error'
					})
				}
			},
			async handleClickGetVericodeBtn() {
				if (!isValidPhoneNumber(this.userInfo.phone)) {
					uni.showToast({
						title: '手机号格式有误',
						icon: 'error'
					})
					return
				}
				this.isVericodeBtnDisable = true;
				this.vericodeBtnText = "剩余60s"
				let num = 59
				const vericodeBtnTimer = setInterval(() => {
					if (num === 0) {
						this.vericodeBtnText = "发送验证码";
						this.isVericodeBtnDisable = false
						clearInterval(vericodeBtnTimer);
					} else {
						this.vericodeBtnText = "剩余" + num + "s"
						num--;
					}
				}, 1000)

				// 发送获取验证码请求
				const {
					data,
					statusCode
				} = await this.$http('/market/verify_codes/register', 'post', {
					phone: this.userInfo.phone,
					debug: true
				})
			},
			changeField(keyName, $event) {
				this.userInfo[keyName] = $event.detail
			},
			jumpLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			}
		}
	}
</script>

<style lang="less">
	.page-register {
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F2F4F7;
		display: flex;
		flex-direction: column;
		align-items: center;

		.cus-input {
			width: 624rpx;
			height: 80rpx;
			margin-top: 30rpx;
		}

		.custon-nav-content {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: flex-end;
			padding-left: 40rpx;
		}

		.cus-cell-group-class {
			margin: 0 auto;
			width: 624rpx;

			.custom-label {
				width: 110rpx;
				font-size: 28rpx;
				color: #828698;
			}
		}

		.go-login-box {
			margin-top: 176rpx;
			display: flex;
			font-size: 30rpx;
			color: #5E5E5E;
		}

		.navigator-hover {
			color: blue;
		}
	}
</style>