<template>
	<view class="page-accountManage">
		<view @click="jumpbillDetail" class="link-bill-detail">
			结算明细
		</view>
		<view class="info-card">
			<view class="left-box">
				<view class="c7A6AF4 df fs56">
					1288.
					<view class="fs32 asfe mb10">
						51
					</view>
				</view>
				<view class="fs30 df c5e">
					待结算
					<view class="fs24 c7A6AF4 asfe">
						(元)
					</view>
				</view>
			</view>
			<view class="cus-divider"></view>
			<view class="right-box">
				<view class="c17DA9C df fs56">
					1288.
					<view class="fs32 asfe mb10">
						51
					</view>
				</view>
				<view class="fs30 df c5e">
					总佣金
					<view class="fs24 c17DA9C asfe">
						(元)
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			jumpbillDetail() {
				uni.navigateTo({
					url: "/pages/billDetail/billDetail"
				})
			}
		}
	}
</script>

<style lang="less">
	.page-accountManage {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		background-color: #F2F4F7;
		padding: 28rpx;
		padding-top: 24rpx;

		.link-bill-detail {
			font-size: 24rpx;
			color: #828698;
			align-self: flex-end;
			padding-bottom: 10rpx;
		}

		.info-card {
			width: 692rpx;
			height: 224rpx;
			box-shadow: 0rpx 32rpx 40rpx 0rpx #DAE0EA;
			border-radius: 40rpx;
			border: 1px solid;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			.cus-divider {
				width: 4rpx;
				height: 100rpx;
				background-color: #CBCBCB;
			}
		}
	}
</style>