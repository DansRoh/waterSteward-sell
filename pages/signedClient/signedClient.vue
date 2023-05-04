<template>
	<view class="page-signedClient" :style="{paddingTop: ptHeight+15+'px'}">
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
		<view @click="jumpWriteClientInfoPage" class="write-client-info mt30">
			<van-icon size="80rpx" name="/static/icon/35_add.png"></van-icon>
			<view class="click-text fs48 c828698 mt30">
				点击录入
				客户信息
			</view>
			<van-icon @click="jumpMyCode" class="icon-my-code" size="190rpx"
				name="/static/images/03_myCodeBtn.png"></van-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				curPickTimerIdx: 0,
				ptHeight: 60
			};
		},
		onLoad() {
			const ptHeight = uni.getStorageSync('navHeight')
			if (ptHeight) {
				this.ptHeight = ptHeight
			}
		},
		methods: {
			jumpMyCode() {
				uni.navigateTo({
					url: "/pages/myCode/myCode"
				})
			},
			jumpWriteClientInfoPage() {
				uni.navigateTo({
					url: "/pages/writeClientInfo/writeClientInfo"
				})
			}
		}
	}
</script>

<style lang="less">
	.page-signedClient {
		min-height: 100vh;
		background-color: #F2F4F7;
		box-sizing: border-box;
		padding: 30rpx;
		.cue-divider {
			width: 2rpx;
			height: 34rpx;
			background-color: #5E5E5E;
		}
		.write-client-info {
			position: relative;
			background-color: #fff;
			width: 688rpx;
			height: 1044rpx;
			border-radius: 28rpx;
			border: 2rpx solid #DCDCDC;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.click-text {
				width: 192rpx;
			}

			.icon-my-code {
				position: absolute;
				bottom: -95rpx;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
</style>