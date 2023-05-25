<template>
	<view class="page-signedClient">
		<Navbar>
			<view slot="content" class="custon-nav-content">
				<van-image class="left-box" width="208rpx" height="52rpx" src="/static/logo.png"></van-image>
			</view>
		</Navbar>
		<view class="code-wrapper-box">
			<view class="inner-box">
				<view class="title">
					专属签约码
				</view>
				<view class="code-num-box">
					<view v-for="item in codeNum" :key="item" class="item-box">
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
						<view>
							<button class="share-btn" open-type="share">
								<van-icon name="/static/images/04_wechat.png" size="96rpx"></van-icon>
								<view class="mt10">
									微信好友
								</view>
							</button>
						</view>
					</view>
					<view class="share-item">
						<van-icon name="/static/images/05_loadicon.png" size="96rpx"></van-icon>
						<view class="mt10">
							下载
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	import CusInput from '../../components/cus-input/cus-input.vue'
	export default {
		components: {
			Navbar,
			CusInput
		},
		data() {
			return {
				codeNum: "198777"
			};
		},
		onLoad() {},
		methods: {
			onShareAppMessage() {
				const promise = new Promise(resolve => {
					setTimeout(() => {
						resolve({
							title: '自定义转发标题',
							path: '/pages/myCode/myCode',
						})
					}, 0)
				})
				return {
					title: '你好',
					path: '/pages/clientList/clientList',
					promise
				}
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

		.custon-nav-content {
			height: 100%;
			padding-left: 30rpx;
			display: flex;
			align-items: flex-end;
		}

		.code-wrapper-box {
			background-color: #F2F4F7;

			.title {
				padding-bottom: 70rpx;
				font-size: 48rpx;
				color: #262626;
			}

			.inner-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 60rpx;
				background-color: #fff;
				box-shadow: 0rpx 32rpx 40rpx 0rpx #DAE0EA;
				border-radius: 28rpx;

				.code-num-box {
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
					justify-content: space-evenly;
					width: 524rpx;
					margin-top: 76rpx;

					.share-item {
						display: flex;
						flex-direction: column;
						align-items: center;

						.share-btn {
							line-height: unset;
							font-size: 28rpx;
							color: #828698;
							display: flex;
							flex-direction: column;
							align-items: center;
							background-color: #fff;
						}
						.share-btn::after {
							border: none;
						}
					}
				}
			}
		}
	}
</style>