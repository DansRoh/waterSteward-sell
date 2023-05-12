<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// 登录逻辑
			const isLogin = uni.getStorageSync('isLogin');
			if (!isLogin) {
				uni.redirectTo({
					url: '/pages/register/register'
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
