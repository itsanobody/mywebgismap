<template>
	<div class="XZQHComponent-pannel" v-show="this.$store.getters._getDefaultXZQHVisible">
		<div class="XZQHComponent-header">
			<span>行政区划导航</span>
			<i class="el-icon-close" @click="closeXZQHPannel"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'XZQHComponent',
	methods: {
		closeXZQHPannel() {
			const currentVisible = this.$store.getters._getDefaultXZQHVisible;
			this.$store.commit('_setDefaultXZQHVisible', !currentVisible);
		}
	}
};
</script>

<style>
.XZQHComponent-pannel {
	position: absolute;
	left: 15px;
	top: 15px;
	width: 500px;
	height: 600px;
	background-color: #ffffff;
}
.XZQHComponent-header {
	width: 100%;
	height: 35px;
	border-bottom: 1px solid #e4e7ed;
	padding: 0 5px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
</style>
