import Vue from 'vue'
import Vuex from 'vuex'
import {
	request
} from '../utils/request.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {} // 用户信息
	},
	mutations: {
		getUserInfo(state, data) {
			state.userInfo = data
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
		}
	}
})

export default store