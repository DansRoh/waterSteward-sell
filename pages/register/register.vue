<template>
	<view class="page-register" :style="{paddingTop: ptHeight+'px'}">
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
		<van-image width="100vw" height="446rpx" src="/static/images/01_banner.png"></van-image>
		<van-cell-group custom-class="cus-cell-group-class">
			<van-field title-width="110rpx" @change="changeField('userName', $event)"
				custom-style="border: 2rpx solid #828698;margin-bottom:30rpx;border-radius: 8rpx;overflow:hidden;" size="large"
				label="姓名" label-class="custom-label" :value="userInfo.userName" clearable>
			</van-field>
			<van-field title-width="110rpx" @change="changeField('idNum', $event)"
				custom-style="border: 2rpx solid #828698;margin-bottom:30rpx;border-radius: 8rpx;overflow:hidden;" size="large"
				label="身份证号" label-class="custom-label" :value="userInfo.idNum" clearable>
			</van-field>
			<van-field title-width="110rpx" @change="changeField('phoneNum', $event)"
				custom-style="border: 2rpx solid #828698;margin-bottom:30rpx;border-radius: 8rpx;overflow:hidden;" size="large"
				label="手机号" label-class="custom-label" :value="userInfo.phoneNum" clearable>
			</van-field>
			<van-field title-width="110rpx" @change="changeField('veriCode', $event)"
				custom-style="border: 2rpx solid #828698;padding:0;padding-left:34rpx;align-items:center;border-radius: 8rpx;overflow:hidden;"
				size="large" label="验证码" label-class="custom-label" :value="userInfo.veriCode" clearable>
				<van-button custom-style="width: 208rpx" type="primary" color="#383838" slot="button" :disabled="isVericodeBtnDisable"
					@click="handleClickGetVericodeBtn">{{vericodeBtnText}}</van-button>
			</van-field>
		</van-cell-group>
		<van-button @click="handleClickRegister" class="mt30" type="primary" color="#FFD242"
			custom-style="width: 592rpx;font-size:36rpx;height: 112rpx;color:#383838;" round>确认注册</van-button>
		<view class="go-login-box">
			已有账号?
			<view @click="jumpLogin" class="c7A6AF4">去登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNum: '',
				veriCode: '',
				userInfo: {
					userName: '',
					idNum: '',
					phoneNum: '',
					veriCode: ''
				},
				vericodeBtnText: '发送验证码',
				isVericodeBtnDisable: false,
				isAgree: false,
				ptHeight: 60
			};
		},
		onLoad() {
			const ptHeight = uni.getStorageSync('navHeight')
			if (ptHeight) {
				this.ptHeight = ptHeight
			}
		},
		computed: {
			isDisabledRegister() {
				const {
					userName,
					idNum,
					phoneNum,
					veriCode
				} = this.userInfo
				return !(userName, idNum, phoneNum, veriCode)
			}
		},
		methods: {
			handleClickRegister() {
				// 注册
				if (this.isDisabledRegister) {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'error'
					})
				}
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			handleClickGetVericodeBtn() {
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

		.register-poster {
			width: 100vw;
			height: 446rpx;
			border: 1px solid;
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