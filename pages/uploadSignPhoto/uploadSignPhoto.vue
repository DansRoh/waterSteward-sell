<template>
	<view class="page-uploadSignPhoto">
		<view class="inner-box">
			<van-icon size="80rpx"></van-icon>
			<view class="click-text fs48 c828698 mt34">
				点击上传信号截图
			</view>
		</view>

		<view class="fs24 c000 mt30 mb18 ml34">
			选择网卡
		</view>
		<view class="EVDO-box">
			<van-icon size="48rpx"></van-icon>
			<view class="fs32 c26 evdo-name">
				中国移动
			</view>
			<van-icon size="32rpx"></van-icon>
		</view>
		<van-button custom-class="upload-btn" custom-style="color:#383838" type="primary" size="large" round color="#FFD242">
			立即上传
		</van-button>
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
	.page-uploadSignPhoto {
		height: 100vh;
		background-color: #F2F4F7;
		padding: 32rpx;

		>.inner-box {
			width: 688rpx;
			height: 786rpx;
			background-color: #fff;
			border-radius: 28rpx;
			border: 2rpx solid #DCDCDC;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.click-text {
				width: 192rpx;
			}
		}

		.EVDO-box {
			width: 688rpx;
			height: 96rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.evdo-name {
				width: 442rpx;
				margin-right: 20rpx;
			}
		}
		.upload-btn {
			width: 592rpx;
			height: 112rpx;
			color: #383838;
			font-size: 36rpx;
			margin-top: 88rpx;
			margin-left: 48rpx;
		}
	}
</style>