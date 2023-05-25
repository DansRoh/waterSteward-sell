<template>
	<view class="">
		mycode
		{{option}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeNum: "198777",
				option: null
			};
		},
		onLoad(option) {
			this.option = option
		}
	}
</script>

<style lang="less">
	
</style>