<template>
  <div class="mapview-pannel">
  	<div id="mapview"></div>
	<div id="basemap-toggle"></div>
	<div id="scalebar"></div>
	<div id="zoom"></div>
  </div>
</template>


<script type=“text/javascript”>
// 引入loadModules
import {loadModules} from 'esri-loader';

export default {
    name: "Mapview",
    components: {},

    // 1 定义声明周期方法
    mounted: function () {
		// 获取Vuex中设置的默认值
		// console.log(this.$store.getters._getDefaultMapView);//这里调用vuex的getter和setter方法，4.20API会报栈溢出，改为了4.18API
        // 调用_createMapView方法
        this._createMapView();
    },

    methods: {
		
        //2 定义_createMapView方法
        async _createMapView() {
			// 引入arcgis js api
			const options = {
			url: "https://js.arcgis.com/4.18/init.js", //改为了4.18API
			css: "https://js.arcgis.com/4.18/esri/themes/light/main.css",
			};
			
			// 实例化地图
			// ES6 数组结构[Map, Mapview]；async await ES8 语法
			const [Map, MapView, Basemap, TileLayer, BasemapToggle, BasemapGallery, ScaleBar, Zoom] = await loadModules(
			['esri/Map', 'esri/views/MapView', "esri/Basemap", "esri/layers/TileLayer", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/widgets/ScaleBar", "esri/widgets/Zoom"],
			options
			);
			
			// 自定义底图
			const basemap = new Basemap({
			  baseLayers: [
			    new TileLayer({
			      url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer",
			      title: "Basemap"
			    })
			  ],
			  title: "basemap",
			  id: "basemap"
			});
			
			const map = new Map({
			basemap: basemap,
			});
			
			const view = new MapView({
			container: 'mapview',
			map: map,
			zoom: 4,
			center: [109.075246,34.399454]
			});
			
			// 初始化控件,清除自带控件
			view.ui.components = [];
			
			// 实例化basemapGallery控件
			// let basemapGallery = new BasemapGallery({
			//   view: view,
			//   // source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid")] // autocasts to LocalBasemapsSource
			// });
			
			// // Add widget to the top right corner of the view
			// view.ui.add(basemapGallery, {
			//   position: "bottom-left"
			// });
			
			// 实例化底图切换
			const basemapToggle = new BasemapToggle({
			  view: view,  // The view that provides access to the map's "streets-vector" basemap
			  nextBasemap: "hybrid"  ,// Allows for toggling to the "hybrid" basemap
			  container: 'basemap-toggle',
			});
			view.ui.add(basemapToggle); //有container后，不写也可以
			
			//实例化比例尺
			const scaleBar = new ScaleBar({
			  view: view,
			  container: scalebar,
			  unit: 'metric',
			});
			
			//实例化缩放控件
			let zoom = new Zoom({
			  view: view,
			  container: 'zoom',
			});
			// view.ui.add(zoom);

			this.$store.commit('_setDefaultMapView', view );
    },
 },
}
</script>

<style>
.mapview-pannel, #mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemap-toggle {
	position: absolute;
	right: 15px;
	bottom: 15px;
}
#scalebar {
	position: absolute;
	left: 600px;
	bottom: 15px;
}
#zoom {
	position: absolute;
	right: 35px;
	bottom: 90px;
}
</style>
