<template>
	<view class="page-myCode">
		<view class="title">
			专属签约码
		</view>
		<view class="inner-box">
			<view class="code-num-box">
				<view v-for="item in codeNum" class="item-box">
					{{item}}
				</view>
			</view>
			<view class="my-code-box">
				<view class="code-inner">
					
				</view>
				<view class="tac fs28 c5e">
					我的签约二维码
				</view>
			</view>
			
			<view class="share-menu fs28 c828698">
				<view class="share-item">
					<van-icon></van-icon>
					<view>
						微信好友
					</view>
				</view>
				<view class="share-item">
					<van-icon></van-icon>
					<view>
						朋友圈
					</view>
				</view>
				<view class="share-item">
					<van-icon></van-icon>
					<view>
						下载
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
				codeNum: "198777"
			};
		}
	}
</script>

<style lang="less">
	.page-myCode {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		background-color: #F2F4F7;

		.title {
			padding-top: 160rpx;
			padding-bottom: 70rpx;
			font-size: 48rpx;
			color: #262626;
		}

		.inner-box {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 688rpx;
			height: 1070rpx;
			background-color: #fff;
			box-shadow: 0rpx 32rpx 40rpx 0rpx #DAE0EA;
			border-radius: 28rpx;

			.code-num-box {
				margin-top: 150rpx;
				margin-bottom: 78rpx;
				width: 512rpx;
				display: flex;
				justify-content: space-between;

				.item-box {
					width: 72rpx;
					height: 72rpx;
					font-size: 39rpx;
					border-radius: 2rpx;
					border: 2rpx solid rgba(206, 207, 208, 0.53);
					color: #17DA9C;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.my-code-box {
				width: 456rpx;
				height: 456rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				border: 2rpx solid #CECFD0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
				.code-inner {
					width: 274rpx;
					height: 274rpx;
					border: 1px solid;
				}
			}
			.share-menu {
				display: flex;
				justify-content: space-between;
				width: 524rpx;
				margin-top: 76rpx;
				.share-item {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}
		}
	}
</style>