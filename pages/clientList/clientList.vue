<template>
	<view class="page-clientList" :style="{paddingTop: ptHeight+17+'px'}">
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
		<view class="top-search-box">
			<view class="custom-search">
				<input placeholder-class="custom-search-place-class" class="search-input" type="text" placeholder="请输入姓名、电话…">
				<van-icon class="search-icon" size="48rpx" name="/static/icon/36_search.png"></van-icon>
			</view>
			<view class="timer-picker">
				<picker mode="selector" range-key="name" @change="pickerChange" :value="curPickTimerIdx"
					:range="timerPickerArray">
					<view class="fs24 c000">
						{{timerPickerArray[curPickTimerIdx].name || "最近三个月"}}
						<van-icon size="25rpx" name="/static/icon/04_del.png"></van-icon>
					</view>
				</picker>
			</view>
		</view>
		<view class="client-list-box">
			<view class="client-info-card">
				<view class="top-status-box">
					<van-icon size="32rpx" name="/static/icon/37_clock.png"></van-icon>
					<view class="ml16">
						待测信号…
					</view>
				</view>
				<view class="steps-inner-box">
					<van-steps custom-class="custom-van-steps" :steps="steps" :active="curSteps"
						active-color="#7A6AF4"></van-steps>
				</view>
				<view class="appointment-time">
					<view class="fs24 c5e">
						预约测试：
					</view>
					<view class="fs32 c000 df mr68">
						<view class="cFFA212">
							2023
						</view>
						年
						<view class="cFFA212">
							1
						</view>
						月
						<view class="cFFA212">
							24
						</view>
						日
					</view>
					<view class="fs32 c000 df">
						还剩
						<view class="cFFA212">
							3
						</view>
						天
						<view class="cFFA212">
							5
						</view>
						小时
					</view>
				</view>
				<van-divider />
				<view class="user-info fs28 c000">
					<view class="info-item">
						<van-icon class="left-icon" size="32rpx" name="/static/images/tabbar/03_tab.png"></van-icon>
						<view class="content-box">
							安欣
						</view>
					</view>
					<view class="info-item">
						<van-icon class="left-icon" size="32rpx" name="/static/images/tabbar/03_tab.png"></van-icon>
						<view class="content-box">
							18739483948
						</view>
						<van-icon class="right-icon" size="32rpx" name="/static/images/tabbar/03_tab.png"></van-icon>
					</view>
					<view class="info-item">
						<van-icon class="left-icon" size="32rpx" name="/static/images/tabbar/03_tab.png"></van-icon>
						<view class="content-box">
							重庆市渝中区长江路地产大厦2号楼
							2-14-1
						</view>
						<van-icon class="right-icon" size="32rpx" name="/static/images/tabbar/03_tab.png"></van-icon>
					</view>
				</view>
				
				<van-divider></van-divider>
				<view class="plan-box fs28 c828698">
					<view class="df">
						<view class="mr10">
							选择套餐:
						</view>
						<view class="plan">
							每日鲜
						</view>
					</view>
					<view class="df aic mt10">
						<view class="mr10">
							首充金额:
						</view>
						<view class="c17DA9C">
							360元
						</view>
					</view>
				</view>
				<van-divider></van-divider>
				<view class="operator-box fs28 df">
					<view class="mr10 c828698">
						运营商选择:
					</view>
					<view class="c262626">
						中国移动
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
				curPickTimerIdx: 0,
				ptHeight: 60,
				timerPickerArray: [{
						id: 1,
						name: '最近三个月'
					},
					{
						id: 2,
						name: '最近一年'
					}
				],
				steps: [{
						text: '预约测信号',
						desc: '',
					},
					{
						text: '预约安装',
						desc: '',
					},
					{
						text: '已完成',
						desc: '',
					},
				],
				curSteps: 1,
			};
		},
		onLoad() {
			const ptHeight = uni.getStorageSync('navHeight')
			if (ptHeight) {
				this.ptHeight = ptHeight
			}
		},
		methods: {
			pickerChange({
				detail
			}) {
				this.curPickTimerIdx = detail.value
			},
		}
	}
</script>

<style lang="less">
	.page-clientList {
		min-height: 100vh;
		background-color: #F2F4F7;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;

		.top-search-box {
			display: flex;
			width: 688rpx;
			height: 68rpx;
			align-items: center;
			justify-content: space-between;

			.custom-search {
				background-color: #fff;
				width: 500rpx;
				border-radius: 34rpx;
				position: relative;

				.search-input {
					height: 68rpx;
					border-radius: 34rpx;
					box-sizing: border-box;
					font-size: 32rpx;
					border: 1px solid;
					padding: 0 34rpx;
					color: #000;
				}

				.custom-search-place-class {
					font-size: 24rpx;
					color: #CECFD0;
				}

				.search-icon {
					position: absolute;
					width: 40rpx;
					height: 40rpx;
					top: 50%;
					transform: translateY(-50%);
					right: 34rpx;
				}
			}
		}

		.client-list-box {
			.client-info-card {
				width: 688rpx;
				box-sizing: border-box;
				margin-top: 32rpx;
				padding-top: 16rpx;
				padding-bottom: 16rpx;
				background-color: #fff;
				border-radius: 16rpx;
				box-shadow: 0rpx 32rpx 40rpx 0rpx #DAE0EA;

				.top-status-box {
					padding: 0 34rpx;
					padding-bottom: 20rpx;
					display: flex;
					font-size: 24rpx;
					color: #5e5e5e;
				}

				.steps-inner-box {
					background-color: #f9f9f9;
					padding: 0 20rpx;

					.custom-van-steps {
						background-color: #f9f9f9;
					}
				}

				.appointment-time {
					display: flex;
					padding: 20rpx 48rpx;
					padding-bottom: 0;
					align-items: center;
				}
				.user-info {
					padding: 0 34rpx;
					.info-item {
						position: relative;
						display: flex;
						padding-left: 40rpx;
						box-sizing: border-box;
						.left-icon {
							position: absolute;
							top: 0;
							left: 0;
						}
						.content-box {
							width: 500rpx;
						}
						.right-icon {
							position: absolute;
							right: 0;
							top: 0;
						}
					}
				}
				.plan-box {
					padding: 0 32rpx;
					.plan {
						background-color: #17DA9C;
						color: #fff;
						border-radius: 16rpx;
						width: 128rpx;
						line-height: 48rpx;
						text-align: center;
					}
				}
				.operator-box {
					padding: 0 32rpx;
				}
			}
		}
	}
</style>