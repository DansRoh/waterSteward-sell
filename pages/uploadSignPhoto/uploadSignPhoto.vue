<template>
	<view class="page-uploadSignPhoto">
		<view @tap="handleChooseImage" class="inner-box">
			<image v-if="imgPath" :src="imgPath" mode="aspectFit"></image>
			<template v-else>
				<van-icon name="/static/images/14_add.png" size="80rpx"></van-icon>
				<view class="click-text fs48 c828698 mt34">
					点击上传信号截图
				</view>
			</template>
		</view>

		<view class="fs24 c000 mt30 mb18 ml34">
			选择网卡
		</view>
		<picker mode="selector" range-key="name" @change="pickerChange" :value="curPickTimerIdx"
			:range="networkPickerArray">
			<view class="EVDO-box">
				<van-icon size="48rpx"></van-icon>
				<view class="fs32 c26 evdo-name">
					{{networkPickerArray[curPickTimerIdx].name}}
				</view>
				<van-icon size="32rpx"></van-icon>
			</view>
		</picker>

		<van-button @tap="handleClickUpload" custom-class="upload-btn" custom-style="color:#383838" type="primary"
			size="large" round color="#FFD242">
			立即上传
		</van-button>
	</view>
</template>

<script>
	import {
		baseURL
	} from "../../config/index.js"
	export default {
		data() {
			return {
				imgPath: '',
				curPickTimerIdx: 0,
				networkPickerArray: [{
						type: 0,
						name: "中国移动",
					},
					{
						type: 1,
						name: "中国电信"
					},
					{
						type: 2,
						name: "中国联通"
					},
				],
				devId: ''
			};
		},
		onLoad(option) {
			this.devId = option.deviceId
		},
		methods: {
			// 点击立即上传
			handleClickUpload() {
				const that = this
				// 判断是否选择图片
				if (!this.imgPath) {
					uni.showToast({
						title: '请选择图片',
						icon: 'none'
					})
					return
				}
				uni.uploadFile({
					url: baseURL + `/market/devices/${that.devId}/survey`, // 你的头像上传接口地址
					filePath: that.imgPath,
					formData: {
						operator: that.networkPickerArray[that.curPickTimerIdx].type
					},
					header: {
						'Authorization': 'Token ' + uni.getStorageSync("token"),
						'Content-Type': 'multipart/form-data',
						'Accept': 'application/json;version=1',
						'X-HTTP-Method-Override': 'PUT'
					},
					name: 'photo',
					success(uploadRes) {
						const {
							data,
							statusCode
						} = uploadRes
						if (statusCode === 200) {
							uni.showToast({
								title: '上传成功',
								icon: 'success'
							})
							setTimeout(() => {
								uni.navigateBack(1)
							}, 1000)
						} else {
							uni.showToast({
								title: '上传失败',
								icon: 'error'
							})
						}
					},
					fail() {
						uni.showToast({
							title: '上传失败',
							icon: 'error'
						})
					}
				})
			},
			async handleChooseImage() {
				// 选择图片
				const {
					tempFilePaths
				} = await uni.chooseImage({
					count: 1, // 最多可以选择的图片张数
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				});
				this.imgPath = tempFilePaths[0]
			},
			pickerChange({
				detail
			}) {
				this.curPickTimerIdx = detail.value
			},
		}
	}
</script>

<style lang="less">
	.page-uploadSignPhoto {
		box-sizing: border-box;
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