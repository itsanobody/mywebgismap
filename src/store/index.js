import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex);

// 定义数据，并创建getter和setter方法
const state = {
	_defaultMapView: '', //默认地图view
	_defaultMapTreeVisible: false, //底图目录树显示/隐藏
};

const getters = {
	_getDefaultMapView() { //名字随意取
		return state._defaultMapView;
	},
	_getDefaultMapTreeVisible() {
		return state._defaultMapTreeVisible;
	}
};

const mutations = {
	_setDefaultMapView(state, value) {
		state._defaultMapView = value;
	},
	_setDefaultMapTreeVisible(state, value) {
		state._defaultMapTreeVisible = value;
	}
};

const store = new Vuex.Store({
	state,
	getters,
	mutations
});

export default store;
