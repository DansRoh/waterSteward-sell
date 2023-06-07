<template>
	<view class="page-mine">
		<view class="mine-bg-banner">
			<image src="../../static/images/06_mineBg.png" style="width: 100%; height: 100%;" mode=""></image>
		</view>
		<image class="set-button" src="../../static/images/09_set.png" mode=""></image>
		<view class="mine-content">
			<view class="mine-card c26">
				<view class="avatar-box">
					<image class="avatar-img" src="../../static/images/07_defaultAvatar.png" mode=""></image>
					<image class="camera-img" src="../../static/images/08_camera.png" mode=""></image>
				</view>
				<view class="fs36 mt110">
					李泉
				</view>
				<view class="fs28 mb50">
					18716353540
				</view>
				<van-button custom-class="custom-btn-class" color="#7A6AF4" round>
					我的专属签约码
				</van-button>
			</view>
			<van-cell custom-class="custom-cell" title-class="custom-title" title="结算明细" is-link
				url="/pages/accountManage/accountManage" />
			<van-cell custom-class="custom-cell" title-class="custom-title" title="客服与反馈" is-link
				url="/pages/dashboard/index" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ptHeight: 60
			};
		},
		onLoad() {
			const ptHeight = uni.getStorageSync('navHeight')
			if (ptHeight) {
				this.ptHeight = ptHeight
			}
		},
		onShow() {
			// 判断是否登录的逻辑
			const isLogin = uni.getStorageSync('isLogin');
			if (!isLogin) {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}
		},
	}
</script>

<style lang="less">
	.page-mine {

		.mine-bg-banner {
			width: 100vw;
			height: 100vh;
		}

		.set-button {
			position: absolute;
			top: 38rpx;
			right: 50rpx;
			width: 56rpx;
			height: 56rpx;
		}

		.mine-content {
			position: absolute;
			width: 668rpx;
			top: 126rpx;
			left: 50%;
			transform: translateX(-50%);

			.mine-card {
				position: relative;
				height: 400rpx;
				background: #FFFFFF;
				border-radius: 40rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.avatar-box {
					position: absolute;
					width: 176rpx;
					height: 176rpx;
					left: 50%;
					transform: translateX(-50%);
					top: -88rpx;
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

					.camera-img {
						position: absolute;
						width: 48rpx;
						height: 48rpx;
						bottom: 0;
						right: 0;
					}
				}

				.custom-btn-class {
					width: 484rpx;
					height: 80rpx;
					font-size: 36rpx;
				}
			}

			.custom-cell {
				margin-top: 38rpx;
				border-radius: 16rpx;

				.custom-title {
					font-size: 36rpx;
					color: #262626;
				}
			}
		}
	}
</style>