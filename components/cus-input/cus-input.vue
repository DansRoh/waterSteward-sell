<!-- CustomInput.vue -->
<template>
	<view class="component-cus-input" :class="dynamicClass">
		<label :style="{width: labelWidth}" class="label" :class="bufferLabelClass" v-if="label">{{ label }}</label>
		<input class="input" :type="type" :value="value" @input="handleInput" />
		<image v-if="icon" :src="icon" class="icon" />
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
			}
		},
		methods: {
			handleInput(e) {
				this.$emit('input', e.target.value);
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
	}

	.label {
		flex-shrink: 0;
		padding-left: 20rpx;
		font-size: 28rpx;
		color: #828698;
		width: 100rpx;
		text-align: justify;
		text-align-last: justify;
	}

	.input {
		padding-left: 40rpx;
		color: #262626;
		height: 100%;
		font-size: 32rpx;
	}

	.component-cus-input.with-border {
		border-radius: 8rpx;
		border: 2rpx solid #828698;
	}

	.component-cus-input .icon {
		margin-left: 10px;
	}
</style>