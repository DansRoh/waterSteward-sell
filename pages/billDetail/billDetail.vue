<template>
	<view class="page-billDetail">
		<view class="wait-pay-money-card">
			<view class="left-box fs28 c000">
				待结算金额
			</view>
			<view class="right-box df aie fs64 c7A6AF4">
				1288.51
				<view class="fs24 mb10">
					元
				</view>
			</view>
		</view>

		<view class="order-list">
			<view class="order-item">
				<view class="top-box df jcsb aic">
					<view class="plan-info fs28 c000">
						<view class="mb10">
							单号 SC2536858
						</view>
						<view class="df">
							<view class="c828698">
								消费金额：
							</view>
							50元
						</view>
					</view>
					<view class="price-box fs32">
						<view class="mb10">
							￥10
						</view>
						<view class="cFFA212 fs24">
							带结算
						</view>
					</view>
				</view>
				<van-divider></van-divider>
				<view class="bottom-box fs24 c000">
					<view class="mb10">
						安欣 | 18716353540
					</view>
					<view>
						重庆市沙坪坝区小龙坎正街电台巷大龙火锅店
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
		}
	}
</script>

<style lang="less">
	.page-billDetail {
		background-color: #F2F4F7;
		height: 100vh;
		padding: 56rpx 28rpx;

		.wait-pay-money-card {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 692rpx;
			height: 224rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 32rpx 40rpx 0rpx #DAE0EA;
			border-radius: 40rpx;
		}

		.order-list {
			.order-item {
				width: 692rpx;
				height: 300rpx;
				border-radius: 22rpx;
				box-sizing: border-box;
				border: 2rpx solid #DEDEDE;
				background-color: #fff;
				margin-top: 24rpx;
				padding: 24rpx;
			}
		}
	}
</style>