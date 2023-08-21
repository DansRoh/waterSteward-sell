<template>
	<view class="page-clientList">
		<Navbar>
			<view slot="content" class="custon-nav-content">
				<van-image class="left-box" width="208rpx" height="52rpx" src="/static/logo.png"></van-image>
			</view>
		</Navbar>
		<view class="wapper-box">

			<view class="top-search-box">
				<CusInput :value="searchValue" @input="bindInput" @confirm="handleSearch" @tapIcon="handleSearch"
					custom-class="cus-search-input" placeholder="请输入姓名,电话..." hasBorder icon="/static/images/03_search.png">
				</CusInput>
				<view class="timer-picker">
					<picker mode="selector" range-key="name" @change="pickerChange" :value="curPickTimerIdx"
						:range="timerPickerArray">
						<view class="fs24 c000">
							{{timerPickerArray[curPickTimerIdx].name || "最近三个月"}}
							<van-icon size="25rpx" name="/static/images/22_del.png"></van-icon>
						</view>
					</picker>
				</view>
			</view>

			<van-empty v-if="!clientData.length" description="暂无数据" />
			<view v-else class="client-list-box">
				<view v-for="item in clientData" :key="item.id" class="client-info-card">
					<view class="top-status-box">
						<van-icon size="32rpx" :name="item.curStep===2 ? '/static/images/21_success.png':'/static/images/15_clock.png'"></van-icon>
						<view class="ml16">
							{{ stateEnum[item.state] }}
						</view>
					</view>
					<view class="steps-inner-box">
						<van-steps custom-class="custom-van-steps" :steps="steps" :active="item.curStep"
							active-color="#7A6AF4"></van-steps>
					</view>
					<view class="appointment-time">
						<template v-if="item.curStep === 0">
							<text class="fs24">预约测试:</text> <text>{{ item.survey_at || '待预约' }}</text> <text>还剩3天4小时</text>
						</template>
						<template v-else>
							<text class="fs24">预约安装:</text> <text>{{ item.install_at || '待预约' }}</text> <text>还剩3天4小时</text>
						</template>
					</view>
					<van-divider />
					<view class="user-info fs28 c000">
						<view class="info-item">
							<van-icon class="left-icon" size="32rpx" name="/static/images/16_user.png"></van-icon>
							<view class="content-box">
								{{item.address.name}}
							</view>
						</view>
						<view class="info-item">
							<van-icon class="left-icon" size="32rpx" name="/static/images/17_phone.png"></van-icon>
							<view class="content-box">
								{{item.address.phone}}
							</view>
							<van-icon class="right-icon" size="36rpx" name="/static/images/19_phone.png"></van-icon>
						</view>
						<view class="info-item">
							<van-icon class="left-icon" size="32rpx" name="/static/images/18_local.png"></van-icon>
							<view class="content-box">
								{{item.address.region.join('') + item.address.detail}}
							</view>
							<van-icon class="right-icon" size="36rpx" name="/static/images/20_address.png"></van-icon>
						</view>
					</view>

					<van-divider></van-divider>
					<view class="plan-box fs28 c828698">
						<view class="df">
							<view class="mr10">
								选择套餐:
							</view>
							<view class="plan">
								{{item.plan.title}}
							</view>
						</view>
						<view class="df aic mt10">
							<view class="mr10">
								首充金额:
							</view>
							<view class="c17DA9C">
								{{item.plan.deposit}}
							</view>
							元
						</view>
					</view>
					<van-divider></van-divider>
					<view class="operator-box fs28 df">
						<template v-if="item.curStep > 0">
							<view class="mr10 c828698">
								运营商选择:
							</view>
							<view class="c262626">
								中国移动
							</view>
						</template>
						<van-button @tap="jumpToUploadSignPhoto(item.id)" v-else color="#7A6AF4" custom-class="upload-btn-class" round>
							上传信号截图
						</van-button>
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
				curPickTimerIdx: 0,
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
				curStep: 1,
				clientData: [],
				stateEnum: {
					pending: '待预约测试信号',
					survey_scheduled: '待测信号',
					surveyed: '待安装净水器',
					install_scheduled: '待安装净水器',
					installed: '已安装完成'
				}
			};
		},
		computed: {},
		onLoad() {
			this.getClientList()
		},
		methods: {
			// 获取客户列表
			async getClientList() {
				const {
					data,
					statusCode
				} = await this.$http('/market/devices', 'get', {
					keyword: this.searchValue
				})
				// data.records = [{
				// 	id: "8649acb3-4b70-4d70-9d36-4253a4650f84",
				// 	name: "净水器1号",
				// 	state: "survey_scheduled", // pending 待预约测试信号；survey_scheduled 已预约测试信号；surveyed 已完成信号测试；install_scheduled 已预约安装；installed 已安装
				// 	survey_at: "2023年1月24日",
				// 	install_at: "2023年1月25日",
				// 	plan: {
				// 		id: "套餐 ID",
				// 		deposit: 350, // 首充金额，单位：元
				// 		price: "29.0", // 套餐价格，单位：元
				// 		title: "A套餐", // 套餐标题
				// 	},
				// 	address: {
				// 		id: "dcfbb46c-c11f-4b3e-bc47-f5ec843bd31d",
				// 		region: [
				// 			"云南省",
				// 			"昆明市",
				// 			"呈贡区"
				// 		],
				// 		detail: "测试修改地址",
				// 		phone: "18672824015"
				// 	}
				// }]
				this.clientData = data.records.map(item => {
					item.curStep = Object.keys(this.stateEnum).indexOf(item.state)
					return item
				})
				console.log('data', this.clientData);
			},
			jumpToUploadSignPhoto(deviceId) {
				uni.navigateTo({
					url: `/pages/uploadSignPhoto/uploadSignPhoto?deviceId=${deviceId}`
				})
			},
			pickerChange({
				detail
			}) {
				this.curPickTimerIdx = detail.value
			},
			bindInput(e) {
				this.searchValue = e
			},
			handleSearch() {
				this.getClientList()
				console.log('搜索', this.searchValue);
			}
		}
	}
</script>

<style lang="less">
	.page-clientList {
		min-height: 100vh;
		background-color: #F2F4F7;
		box-sizing: border-box;

		.custon-nav-content {
			height: 100%;
			padding-left: 30rpx;
			display: flex;
			align-items: flex-end;
		}

		.wapper-box {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.top-search-box {
			padding: 32rpx 0;
			display: flex;
			width: 688rpx;
			height: 68rpx;
			align-items: center;
			justify-content: space-between;

			.cus-search-input {
				width: 500rpx;
				height: 68rpx;
				border-radius: 34rpx;
			}
		}

		.client-list-box {
			.client-info-card {
				width: 688rpx;
				box-sizing: border-box;
				padding: 16rpx;
				margin-bottom: 40rpx;
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
					justify-content: space-between;
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
					position: relative;
					padding: 0 32rpx;
					.upload-btn-class {
						position: relative;
						right: -408rpx;
					}
				}
			}
		}
	}
</style>