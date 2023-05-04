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
			// 计算自定义navbar高度（单位px）,并存入localStorage
			const {
				screenWidth,
				statusBarHeight
			} = uni.getSystemInfoSync()
			const navHeight = 40 + statusBarHeight
			uni.setStorageSync('navHeight', navHeight)
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
