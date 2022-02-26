<template>
	<div class="maptools-view">
		<div class="basemap-toggle">
			<span class="maptools-item" @click="handleMapToolsitemClick" id="xzqh">行政导航</span>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="maptree">目录树管理</span>
			<el-dropdown trigger="click" class="maptools-item" @command="handleCommand">
				<span class="el-dropdown-link">
					地图测量
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-plus" command="distance">距离测量</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus" command="area">面积测量</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click" class="maptools-item" @command="handleCommand">
				<span class="el-dropdown-link">
					更多功能
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-search" command="spancequery">空间查询</el-dropdown-item>
					<el-dropdown-item icon="el-icon-film" command="morescreen">多屏对比</el-dropdown-item>
					<el-dropdown-item icon="el-icon-reading" command="swipanalyst">卷帘分析</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span class="maptools-item" @click="handleMapToolsitemClick" id="clear">清屏</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MapTools',
	methods: {
		handleMapToolsitemClick(e) {
			switch (e.target.id) {
				case 'xzqh':
					this.openXZQHPannel();
					break;
				case 'maptree':
					this.openMapTreePannel();
					break;
				case 'clear':
					break;
				default:
					break;
			}
		},
		handleCommand(command) {
			switch (command) {
				case 'distance':
					break;
				case 'area':
					break;
				case 'spacequery':
					break;
				case 'morescreen':
					break;
				case 'swipanalyst':
					break;
				default:
					break;
			}
		},
		openMapTreePannel() {
			const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
			this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
		},
		openXZQHPannel() {
			const currentVisible = this.$store.getters._getDefaultXZQHVisible;
			this.$store.commit('_setDefaultXZQHVisible', !currentVisible);
		}
	}
};
</script>

<style>
.maptools-view {
	position: absolute;
	height: 30px;
	padding: 0 15px;
	right: 15px;
	top: 15px;
	background-color: #ffffff;
}
.maptools-item {
	line-height: 30px;
	margin-left: 15px;
	color: #32373e;
	font-size: 15px;
	cursor: pointer;
}
.maptools-item:hover {
	color: #409eff;
}
.maptools-item:first-child {
	margin-left: 0;
}
</style>
