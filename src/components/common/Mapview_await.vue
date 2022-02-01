<template>
  <div id="mapview"></div>
</template>


<script type=“text/javascript”>
// 引入loadModules
import {loadModules} from 'esri-loader';

export default {
    name: "Mapview",
    components: {},

    // 1 定义声明周期方法
    mounted: function () {
        // 调用_createMapView方法
        this._createMapView();
    },

    methods: {
		
        //2 定义_createMapView方法
        async _createMapView() {
			// 引入arcgis js api
			const options = {
			url: "https://js.arcgis.com/4.20/init.js", 
			css: "https://js.arcgis.com/4.20/esri/themes/light/main.css",
			};
			
			// 实例化地图
			// ES6 数组结构[Map, Mapview]；async await ES8 语法
			const [Map, MapView] = await loadModules(
			['esri/Map', 'esri/views/MapView'],
			options
			);
			
			const map = new Map({
			basemap: 'osm',
			});
			
			const view = new MapView({
			container: 'mapview',
			map: map,
			zoom: 4,
			center: [109.075246,34.399454]
			});
			
			console.log(view);
    },
 },
}
</script>


<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}

</style>
