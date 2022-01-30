<template>
  <div id="mapview"></div>
</template>

<script>
// 引入loadModules
import {loadModules} from 'esri-loader';

// 引入arcgis js api
// const options = {
//     url: "https://js.arcgis.com/4.20/init.js",
//     css: "https://js.arcgis.com/4.20/esri/themes/light/main.css",
// };

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
        // async _createMapView() {

        //     // 实例化地图
        //     // ES6 数组结构[Map, Mapview]；async await ES8 语法
        //     const[Map, Mapview] = await loadModules(
        //         ['esri/Map', 'esri/views/Mapview'], options
        //     );

        //     const map = new Map({
        //         basemap: 'osm',
        //     });

        //     const view = new Mapview({
        //         container: 'mapview',
        //         map: map,
        //         zoom: 10,
        //     });
        //     console.log(view);

           // 创建二维场景
           _createMapView: function () {
             let options = {
               url: 'https://js.arcgis.com/4.22/',
               css: 'https://js.arcgis.com/4.22/esri/themes/light/main.css'
             };
           
             loadModules(['esri/Map', 'esri/views/MapView'], options).then(([Map, MapView]) => {
           
               const map = new Map({
                   basemap: "streets",
                 });
           
                 const view = new MapView({
                   container: "mapview", // Reference to the scene div created in step 5
                   map: map, // Reference to the map object created before the scene
                   scale: 50000000, // Sets the initial scale to 1:50,000,000
                   center: [-101.17, 21.78] // Sets the center point of view with lon/lat
                 });
           
                 console.log(view);
             })
           },
        }
}
</script>


<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}

</style>

