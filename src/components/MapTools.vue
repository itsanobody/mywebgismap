<template>
	<div class="maptools-view">
		<div class="basemap-toggle">
			<span class="maptools-item" @click="handleMapToolsitemClick" id="xzqh">行政导航</span>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="maptree">目录树管理</span>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="distance">距离测量</span>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="area">面积测量</span>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="clear">清屏</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MapTools',
		methods: {
			handleMapToolsitemClick(e) {
				console.log('handleMapToolsitemClick'+' '+e.target.id);
				 
				 switch(e.target.id) {
					 case 'xzqh':
					 break;
					 case 'maptree':
					 this.open();
					 break;
					 case 'distance':
					 break;
					 case 'area':
					 break;
					 case 'clear':
					 break;
					 default:
					 break;
				 }
			},
			open() {                                     
				const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
				this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
			},
		},
	};
</script>

<style>
	.maptools-view {
		position: absolute;
		height: 30px;
		padding: 0 15px;
		right: 15px;
		top: 15px;
		background-color: #FFFFFF;
	}
	.maptools-item {
		line-height: 30px;
		margin-left: 15px;
		color: #32373E;
		cursor: pointer;
	}
	.maptools-item:first-child {
		margin-left: 0;
	}
</style>
