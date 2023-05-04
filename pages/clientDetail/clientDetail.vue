<template>
	<view class="page-clientDetail">
		<view class="cell-group-title">
			基础信息
		</view>
		<van-cell-group>
			<van-cell title="姓名" :value="clientInfo.userName" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class"></van-cell>
			<van-cell title="手机号" :value="clientInfo.phoneNum" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class"></van-cell>
		</van-cell-group>
		<view class="cell-group-title">
			地址信息
		</view>
		<van-cell-group>
			<van-cell title="地址" :value="clientInfo.address" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class">
				<van-icon slot="right-icon" size="40rpx"></van-icon>
			</van-cell>
			<van-cell title="详细地址" :value="clientInfo.addressDetail" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class"></van-cell>
		</van-cell-group>
		<view class="cell-group-title">
			测试日期
		</view>
		<van-cell-group>
			<van-cell title="日期" :value="clientInfo.testDate" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class">
				<van-icon slot="right-icon" size="40rpx"></van-icon>
			</van-cell>
		</van-cell-group>
		<view class="cell-group-title">
			安装日期
		</view>
		<van-cell-group>
			<van-cell title="日期" :value="clientInfo.installDate" title-width="120rpx" title-class="custom-title-class"
				value-class="custom-value-class">
				<van-icon slot="right-icon" size="40rpx"></van-icon>
			</van-cell>
		</van-cell-group>
		<view class="cell-group-title">
			套餐及其他
		</view>
		<van-cell-group>
			<van-cell title-width="120rpx" title-class="custom-title-class" value-class="custom-value-class">
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
			<van-cell title=" " :value="clientInfo.operator" title-width="50rpx" title-class="custom-title-class"
				value-class="custom-value-class">
				<van-icon slot="icon" size="40rpx"></van-icon>
			</van-cell>
		</van-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clientInfo: {
					userName: "张琪",
					phoneNum: "18739247484",
					address: "重庆市渝中区",
					addressDetail: "长江路地产大厦2号楼2-14-1",
					testDate: "2023年1月24日",
					installDate: "2023年1月30日",
					operator: "中国移动"
				}
			};
		}
	}
</script>

<style lang="less">
	.page-clientDetail {
		height: 100vh;
		background-color: #F2F4F7;
		padding: 36rpx 30rpx;

		.cell-group-title {
			margin-top: 36rpx;
			margin-bottom: 18rpx;
			font-size: 24rpx;
		}

		.custom-title-class {
			font-size: 28rpx;
			color: #828698;
		}

		.custom-value-class {
			text-align: left;
			font-size: 36rpx;
			color: #262626;
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
	}
</style>