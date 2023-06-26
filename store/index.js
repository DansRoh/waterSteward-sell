import Vue from 'vue'
import Vuex from 'vuex'
import {
	request
} from '../utils/request.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {}, // 用户信息
		referCodeQr: '', // 二维码图片访问地址
	},
	mutations: {
		getUserInfo(state, data) {
			state.userInfo = data
		},
		getReferCodeQr(state, data) {
			state.referCodeQr = data
		}
	},
	actions: {
		async getUserInfoSync({
			commit
		}) {
			const {
				statusCode,
				data
			} = await request('/market/profile')
			console.log('userInfo', data);
			if (statusCode === 200) {
				commit('getUserInfo', data)
			}
		},
		async getReferCodeQrSync({
			commit
		}) {
			const {
				statusCode,
				data
			} = await request('/market/profile/refer_code')
			if (statusCode === 200) {
				commit('getReferCodeQr', data.refer_code_qr)
			}
		}
	}
})

export default store