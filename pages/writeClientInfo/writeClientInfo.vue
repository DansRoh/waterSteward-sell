<template>
	<view class="page-writeClientInfo">
		<view class="cell-title">
			基础信息
		</view>
		<van-cell-group custom-class="custom-cell-group">
			<van-field title-width="112rpx" input-class="cus-input-class" label-class="cus-label-class" label="姓名"
				:value="userInfo.userName">
			</van-field>
			<van-field title-width="112rpx" input-class="cus-input-class" label-class="cus-label-class" label="手机号"
				type="number" :value="userInfo.phoneNum">
			</van-field>
			<van-field title-width="112rpx" input-class="cus-input-class" label-class="cus-label-class" label="验证码"
				type="number" :value="userInfo.veriCode">
				<van-button slot="button" size="small" type="primary" round color="#7A6AF4">
					获取验证码
				</van-button>
			</van-field>
		</van-cell-group>

		<view class="cell-title">
			地址信息
		</view>
		<van-cell-group custom-class="custom-cell-group">
			<van-cell @click="()=>{showAreaModel=true}" clickable title-class="cus-label-class" title="地址"
				title-width="136rpx">
				<view class="custom-address-value">
					{{userInfo.address}}
				</view>
			</van-cell>
			<van-field title-width="112rpx" input-class="cus-input-class" label-class="cus-label-class" label="详细地址"
				:value="userInfo.addressDetail"></van-field>
		</van-cell-group>

		<view class="cell-title">
			预约信号测试日期
		</view>
		<van-cell-group custom-class="custom-cell-group">
			<van-cell title-class="cus-label-class" title-width="136rpx" title="日期" clickable
				@click="()=>{showCalendar=true}">
				<view class="custom-address-value">
					{{userInfo.appointmentTime}}
				</view>
			</van-cell>
			<van-calendar :show="showCalendar" @close="()=>{showCalendar=false}" @confirm="handleConfirmCalendar" />
		</van-cell-group>
		
		<van-button round custom-class="submit-btn" custom-style="color: #383838;" color="#FFD242">
			确定提交
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
					userName: "张琪琪",
					phoneNum: "18783947583",
					veriCode: "",
					address: "重庆市渝中区",
					addressDetail: "长江路地产大厦2号楼2-14-1",
					appointmentTime: ""
				},
				showAreaModel: false,
				areaList: areaList,
				showCalendar: false,
			};
		},
		methods: {
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
			handleConfirmCalendar({
				detail
			}) {
				this.userInfo.appointmentTime = this.formatDate(detail)
				this.showCalendar = false
			}
		}
	}
</script>

<style lang="less">
	.page-writeClientInfo {
		height: 100vh;
		background-color: #F2F4F7;
		box-sizing: border-box;
		padding: 42rpx 36rpx;

		.cell-title {
			font-size: 24rpx;
			color: #000;
			padding-top: 36rpx;
			padding-bottom: 18rpx;
		}

		.custom-cell-group {
			border: 2rpx dashed #DCDCDC;

			.custom-address-value {
				text-align: left;
				color: #262626;
				font-size: 36rpx;
			}

			.cus-label-class {
				font-size: 28rpx;
				color: #828698;
			}

			.cus-input-class {
				color: #262626;
				font-size: 36rpx;
			}
		}
		.submit-btn {
			margin-top: 84rpx;
			margin-left: 40rpx;
			width: 592rpx;
			height: 112rpx;
			color: #383838;
			font-size: 36rpx;
		}
	}
</style>