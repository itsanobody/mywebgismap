<template>
	<div class="maptree-pannel" v-show="this.$store.getters._getDefaultMapTreeVisible">
		<div class="maptree-header">
			<span>图层管理</span>
			<i class="el-icon-close" @click="closeMapTreePannel"></i>
		</div>
		<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
	</div>
</template>

<script>
import { loadModules } from 'esri-loader';

//引入arcgis js api
const options = {
	url: 'https://js.arcgis.com/4.18/init.js', //改为了4.18API
	css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css'
};

export default {
	name: 'MapTree',
	data() {
		return {
			data: [
				{
					label: '底图数据',
					children: [
						{
							label: '暖色系图层',
							layerid: 'layerid',
							layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer'
						},
						{
							label: '灰色系图层',
							layerid: 'layerid',
							layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer'
						}
					]
				},
				{
					label: '行政区划数据',
					children: [
						{
							label: '省数据',
							layerid: 'layerid',
							layerurl: 'https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/province6/FeatureServer'
						},
						{
							label: '市数据',
							layerid: 'layerid',
							layerurl: 'https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/city4326_GBK/FeatureServer'
						},
						{
							label: '县数据',
							layerid: 'layerid',
							layerurl: 'https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county4326_Code/FeatureServer'
						}
					]
				},
				{
					label: '业务数据',
					children: [
						{
							label: '火车站数据 84',
							layerid: 'layerid',
							layerurl: 'https://services3.arcgis.com/4MALbzcKZ6tNTFMI/arcgis/rest/services/trainstationdata/FeatureServer'
						},
						{
							label: '火车站数据 Mekatuo',
							layerid: 'layerid',
							layerurl: 'https://services3.arcgis.com/4MALbzcKZ6tNTFMI/arcgis/rest/services/trainstation_WebMokatuo/FeatureServer'
						}
					]
				}
			],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		};
	},

	methods: {
		async handleNodeClick(data) {
			if (data.layerurl) {
				//删除以添加的图层
				const view = this.$store.getters._getDefaultMapView;
				const resultLayer = view.map.findLayerById('layerid');
				if (resultLayer) view.map.remove(resultLayer);

				//处理不同服务类型
				const [TileLayer, FeatureLayer] = await loadModules(['esri/layers/TileLayer', 'esri/layers/FeatureLayer'], options);
				const c = data.layerurl.split('/');
				const serverType = c[c.length - 1];
				let layer = '';
				switch (serverType) {
					case 'MapServer':
						layer = new TileLayer({ url: data.layerurl, id: data.layerid });
						break;
					case 'FeatureServer':
						layer = new FeatureLayer({ url: data.layerurl, id: data.layerid });
						break;
					default:
						break;
				}
				view.map.add(layer);
			}
		},
		closeMapTreePannel() {
			const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
			this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
		}
	}
};
</script>

<style>
.maptree-pannel {
	position: absolute;
	left: 15px;
	top: 20px;
	width: 200px;
	height: 300px;
	background-color: #ffffff;
}
.maptree-header {
	width: 100%;
	height: 35px;
	border-bottom: 1px solid #e4e7ed;
	padding: 0 5px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.maptree-header > span {
	line-height: 35px;
	font-size: 16px;
	font-weight: 600;
}
.maptree-header > i {
	line-height: 35px;
	cursor: pointer;
}
</style>
