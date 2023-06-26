<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

			// 登录逻辑
			const token = uni.getStorageSync('token');
			if (!token) {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			} else {
				this.$store.dispatch('getUserInfoSync')
				uni.switchTab({
					url: "/pages/signedClient/signedClient"
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('static/css/common.css');
</style>