<template>
	<view class="page-clientInfoEdit">
		<view class="cell-group-title">
			基础信息
		</view>
		<van-cell-group>
			<van-field label="姓名" title-width="112rpx" :value="userInfo.userName" input-class="custom-inp-class"
				label-class="custom-label-class" @change="onchange('userName', $event)">
			</van-field>
			<van-field label="手机号" title-width="112rpx" :value="userInfo.phoneNum" input-class="custom-inp-class"
				label-class="custom-label-class" @change="onchange('phoneNum', $event)">
			</van-field>
		</van-cell-group>
		<view class="cell-group-title">
			地址信息
		</view>
		<van-cell-group>
			<van-cell @click="()=>{showAreaModel=true}" clickable title-class="custom-label-class" title="地址"
				title-width="136rpx">
				<view class="custom-address-value">
					{{userInfo.address}}
				</view>
			</van-cell>
			<van-field title-width="112rpx" input-class="custom-inp-class" label-class="custom-label-class" label="详细地址"
				:value="userInfo.addressDetail"></van-field>
		</van-cell-group>
		<view class="cell-group-title">
			预约信号测试日期
		</view>
		<van-cell-group>
			<van-cell title-class="custom-label-class" title-width="136rpx" title="日期" clickable
				@click="()=>{showCalendar=true}">
				<view class="custom-address-value">
					{{userInfo.appointmentTime}}
				</view>
			</van-cell>
			<van-calendar :show="showCalendar" @close="()=>{showCalendar=false}" @confirm="handleConfirmTestCalendar" />
		</van-cell-group>
		
		<view class="cell-group-title">
			预约安装日期
		</view>
		<van-cell-group>
			<van-cell title-class="custom-label-class" title-width="136rpx" title="日期" clickable
				@click="()=>{showCalendar=true}">
				<view class="custom-address-value">
					{{userInfo.installTime}}
				</view>
			</van-cell>
			<van-calendar :show="showCalendar" @close="()=>{showCalendar=false}" @confirm="handleConfirmInstallCalendar" />
		</van-cell-group>
		
		<view class="cell-group-title">
			套餐及其他
		</view>
		<van-cell-group>
			<van-cell title-width="120rpx" title-class="custom-label-class" value-class="custom-value-class">
				<view slot="title" class="custom-slot-title df aic">
					<view class="title">
						所选套餐
					</view>
					<view class="cur-plan-box">
						每日鲜A
					</view>
				</view>
			</van-cell>
		</van-cell-group>
		<view class="cell-group-title">
			运营商选择
		</view>
		<van-cell-group>
			<van-cell title=" " :value="userInfo.operator" title-width="50rpx" title-class="custom-label-class"
				value-class="custom-value-class">
				<van-icon slot="icon" size="40rpx"></van-icon>
			</van-cell>
		</van-cell-group>
		<van-button type="primary" custom-class="cus-edit-btn" round color="#FFD242">
			确认修改
		</van-button>

		<!-- popup -->
		<van-popup :show="showAreaModel" position="bottom" @close="()=>{showAreaModel=false}">
			<van-area @confirm="handleConfirmArea" :area-list="areaList" value="500103" />
		</van-popup>
	</view>
</template>

<script>
	import {
		areaList
	} from "../../wxcomponents/@vant/area-data";
	export default {
		data() {
			return {
				userInfo: {
					userName: "张琪",
					phoneNum: "18673837485",
					address: "重庆市渝中区",
					appointmentTime: "",
					installTime: "",
					operator: "中国移动"
				},
				areaList: areaList,
				showAreaModel: false,
				showCalendar: false,
			};
		},
		methods: {
			onchange(type, e) {
				this.userInfo[type] = e.detail
			},
			handleConfirmArea({
				detail
			}) {
				const {
					index,
					values
				} = detail;
				if (values[0].name === values[1].name) {
					this.userInfo.address = values[0].name + values[2].name
				} else {
					this.userInfo.address = values[0].name + values[1].name + values[2].name
				}

				this.showAreaModel = false
			},
			formatDate(date) {
				date = new Date(date);
				console.log('date', date);
				return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
			},
			handleConfirmTestCalendar({
				detail
			}) {
				this.userInfo.appointmentTime = this.formatDate(detail)
				this.showCalendar = false
			},
			handleConfirmInstallCalendar({
				detail
			}) {
				this.userInfo.installTime = this.formatDate(detail)
				this.showCalendar = false
			},
		},
	}
</script>

<style lang="less">
	.page-clientInfoEdit {
		height: 100vh;
		background-color: #F2F4F7;
		padding: 36rpx 30rpx;

		.cell-group-title {
			margin-top: 36rpx;
			margin-bottom: 18rpx;
			font-size: 24rpx;
		}
		.custom-value-class {
			text-align: left;
			font-size: 36rpx;
			color: #262626;
		}
		.custom-inp-class {
			font-size: 36rpx;
			color: #262626;
		}

		.custom-label-class {
			font-size: 28rpx;
			color: #828698;
		}

		.custom-address-value {
			text-align: left;
			color: #262626;
			font-size: 36rpx;
		}
		.custom-slot-title {
			width: 300rpx;
			.title {
				width: 120rpx;
				font-size: 28rpx;
			}
		}
		.cur-plan-box {
			width: 160rpx;
			height: 48rpx;
			background-color: #17DA9C;
			border-radius: 16rpx;
			color: #F2F4F7;
			font-size: 32rpx;
			text-align: center;
		}
		.cus-edit-btn {
			width: 592rpx;
			height: 112rpx;
			margin-left: 36rpx;
			margin-top: 40rpx;
		}
	}
</style>