import Vue from "vue";
import Vuex from 'vuex';
import Mapview from '../components/common/Mapview_await.vue';

Vue.use(Vuex);

// 定义数据，并创建getter和setter方法
const state = {
	_defaultMapView: Mapview, //默认地图view
};

const getters = {
	_getDefaultMapView() { //名字随意取
		return state._defaultMapView;
	}
};

const mutations = {
	_setDefaultMapView(state, value) {
		state._defaultMapView = value;
	}
};

const store = new Vuex.Store({
	state,
	getters,
	mutations
});

export default store;
