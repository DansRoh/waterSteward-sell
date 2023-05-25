<template>
	<view class="page-mine">
		<view class="mine-bg-banner">

		</view>
		<view class="mine-content">
			<view class="mine-card c26">
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
			<van-cell custom-class="custom-cell" title-class="custom-title" title="账户管理" is-link url="/pages/accountManage/accountManage"/>
			<van-cell custom-class="custom-cell" title-class="custom-title" title="客服与反馈" is-link url="/pages/dashboard/index" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ptHeight:60
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

		.mine-bg-banner {}

		.mine-content {
			border: 1px solid;
			position: absolute;
			width: 668rpx;
			top: 126rpx;
			left: 50%;
			transform: translateX(-50%);

			.mine-card {
				height: 400rpx;
				background: #FFFFFF;
				border-radius: 40rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.custom-btn-class {
					width: 484rpx;
					height: 80rpx;
					font-size: 36rpx;
				}
			}
			.custom-cell {
				margin-top: 38rpx;
				.custom-title {
					font-size: 36rpx;
					color: #262626;
				}
			}
		}
	}
</style>