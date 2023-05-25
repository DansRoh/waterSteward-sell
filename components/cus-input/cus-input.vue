<!-- CustomInput.vue -->
<template>
	<view class="component-cus-input" :class="dynamicClass">
		<label :style="{width: labelWidth}" class="label" :class="bufferLabelClass" v-if="label">{{ label }}</label>
		<input class="input" :type="type" :value="value" @input="handleInput" @confirm="handleConfirm" :placeholder="placeholder" />
		<image v-if="icon" :src="icon" class="icon" @tap="handleTapIcon" :class="bufferIconClass" />
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name: 'cusInput',
		props: {
			// label文字
			label: {
				type: String,
				default: ''
			},
			// 输入框类型
			type: {
				type: String,
				default: 'text'
			},
			// 输入框value
			value: {
				type: String,
				default: ''
			},
			// 输入框右侧icon url
			icon: {
				type: String,
				default: ''
			},
			// 右侧icon class
			iconClass: {
				type: String,
				default: ''
			},
			// 是否有边框线
			hasBorder: {
				type: Boolean,
				default: false
			},
			// 跟节点自定义类
			customClass: {
				type: String,
				default: ''
			},
			// label width
			labelWidth: {
				type: String,
				default: '100rpx'
			},
			// 自定义label calss
			labelClass: {
				type: String,
				default: ''
			},
			// placeholder
			placeholder: {
				type: String,
				default: ''
			}
		},
		computed: {
			dynamicClass() {
				const arr = this.customClass.split(' ');
				if (this.hasBorder) {
					arr.push('with-border')
				}
				return arr
			},
			bufferLabelClass() {
				return this.labelClass.split(' ');
			},
			bufferIconClass() {
				return this.iconClass.split(' ');
			}
		},
		methods: {
			handleInput(e) {
				this.$emit('input', e.target.value);
			},
			handleConfirm() {
				this.$emit('confirm');
			},
			handleTapIcon() {
				this.$emit('tapIcon')
			}
		}
	}
</script>

<style lang="less" scoped>
	.component-cus-input {
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 20rpx 0;
		background-color: #fff;
	}

	.label {
		flex-shrink: 0;
		font-size: 28rpx;
		color: #828698;
		padding-left: 20rpx;
		width: 100rpx;
		text-align: justify;
		text-align-last: justify;
	}
	
	.input {
		padding-left: 40rpx;
		color: #262626;
		flex: 1;
		font-size: 32rpx;
	}

	.with-border {
		border-radius: 8rpx;
		border: 2rpx solid #828698;
	}
	.icon {
		margin-left: 10px;
		width: 48rpx;
		height: 48rpx;
	}
</style>