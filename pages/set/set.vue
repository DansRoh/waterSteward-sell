<template>
	<view class="page-set">
		<view class="avatar-box">
			<image @tap="handleChangeAvatar" class="avatar-img" :src="avatarUrl" mode=""></image>
		</view>

		<van-cell-group custom-class="menu-box">
			<van-cell custom-class="menu-item" icon="/static/images/10_smile.png" title="昵称" :value="userInfo.name"
				size="large" />
			<van-cell custom-class="menu-item" title-class="title-class" value-class="value-class"
				icon="/static/images/11_phone.png" title="手机号" :value="userInfo.phone" size="large">
				<view slot="right-icon" @tap="jumpToEditPhone" class="change-phone">更换手机号</view>
			</van-cell>
			<van-cell @tap="handleTapDelAccount" custom-class="menu-item" icon="/static/images/12_people.png" title="账号注销"
				is-link size="large" />
		</van-cell-group>

		<view @tap="loginOut" class="login-out">
			退出登录
		</view>
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import Dialog from "@/wxcomponents/@vant/dialog/dialog"
	export default {
		data() {
			return {

			};
		},
		computed: {
			userInfo() {
				return this.$store.state.userInfo
			},
			avatarUrl() {
				return this.userInfo.avatar_url || '../../static/images/07_defaultAvatar.png'
			}
		},
		methods: {
			jumpToEditPhone() {
				uni.navigateTo({
					url: '/pages/changePhone/changePhone'
				})
			},
			loginOut() {
				Dialog.confirm({
						title: '退出登录',
						message: '点击确认将退出登录',
					})
					.then(() => {
						// on confirm
						uni.clearStorageSync();
						uni.reLaunch({
							url: "/pages/login/login"
						})
					})
					.catch(() => {
						// on cancel
					});
			},
			async handleTapDelAccount() {
				Dialog.confirm({
						title: '注销账号',
						message: '点击确认将注销账号',
					})
					.then(async () => {
						// on confirm
						const res = await this.$http('/market/profile', 'delete')
						if (res.statusCode === 200) {
							uni.clearStorageSync();
							uni.reLaunch({
								url: "/pages/login/login"
							})
						}
					})
					.catch(() => {
						// on cancel
					});
			},

			async handleChangeAvatar() {
				// 选择图片
				const {
					tempFilePaths
				} = await uni.chooseImage({
					count: 1, // 最多可以选择的图片张数
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				});
				// 图片上传到服务器
				try {
					const {
						statusCode,
						data
					} = await uni.uploadFile({
						url: baseURL + '/market/profile/avatar', // 你的头像上传接口地址
						filePath: tempFilePaths[0],
						header: {
							'Authorization': 'Token ' + uni.getStorageSync("token"),
							'Content-Type': 'multipart/form-data',
							'Accept': 'application/json;version=1'
						},
						name: 'avatar',
					});

					if (statusCode !== 201) {
						uni.showToast({
							title: '上传失败',
							icon: 'none',
						});
						return;
					}
					// 更新头像 URL
					this.$store.dispatch('getUserInfoSync')
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
		}
	}
</script>

<style lang="less">
	.page-set {
		box-sizing: border-box;
		padding-top: 90rpx;
		height: 100vh;
		background-color: #F2F4F7;

		.avatar-box {
			margin: 0 auto;
			width: 176rpx;
			height: 176rpx;
			background-color: #fff;
			border: 8rpx solid #fff;
			border-radius: 50%;
			box-shadow: 0rpx 4rpx 28rpx 0rpx rgba(179, 178, 178, 0.72);

			.avatar-img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				overflow: hidden;
			}
		}

		.menu-box {
			margin-top: 60rpx;

			.menu-item {
				margin-top: 16rpx;

				.value-class {
					display: flex;
					align-items: center;
				}

				.title-class {
					display: flex;
					align-items: center;
				}

				.change-phone {
					background-color: #7A6AF4;
					width: 156rpx;
					line-height: 64rpx;
					border-radius: 56rpx;
					font-size: 24rpx;
					color: #fff;
					text-align: center;
				}
			}
		}

		.login-out {
			position: fixed;
			bottom: 100rpx;
			left: 50%;
			transform: translateX(-50%);
			font-size: 28rpx;
			color: #FFA212;
		}
	}
</style>