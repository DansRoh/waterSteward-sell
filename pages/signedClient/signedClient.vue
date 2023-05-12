<template>
	<view class="page-signedClient">
		<Navbar>
			<view slot="content" class="custon-nav-content">
				<van-image class="left-box" width="208rpx" height="52rpx" src="/static/logo.png"></van-image>
			</view>
		</Navbar>
		<view class="top-search-box">
			<CusInput :value="searchValue" @input="bindInput" @confirm="handleSearch" @tapIcon="handleSearch" custom-class="cus-search-input"
				placeholder="请输入姓名,电话..." hasBorder icon="/static/images/03_search.png"></CusInput>
		</view>

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
						<van-icon name="/static/images/04_wechat.png" size="96rpx"></van-icon>
						<view class="mt10">
							微信好友
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
				searchValue: '',
				codeNum: "198777"
			};
		},
		onLoad() {},
		methods: {
			bindInput(e) {
				this.searchValue = e
			},
			handleSearch() {
				console.log('搜索', this.searchValue);
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
		padding-top: 0;

		.custon-nav-content {
			height: 100%;
			padding-left: 30rpx;
			display: flex;
			align-items: flex-end;
		}

		.top-search-box {
			margin-top: 50rpx;
			margin-bottom: 60rpx;

			.cus-search-input {
				height: 80rpx;
				border-radius: 40rpx;
			}
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
					}
				}
			}
		}
	}
</style>