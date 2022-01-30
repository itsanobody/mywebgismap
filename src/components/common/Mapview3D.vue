<template>
  <div id="mapview"></div>
</template>

<script>

import {loadModules} from 'esri-loader';

export default {
  name: 'Mapview',
  components: {},

      // 1 定义声明周期方法
    mounted: function () {
        // 调用_createMapView方法
        this._createMapView();
    },


    methods: {

      // 创建三维场景
  _createMapView: function () {
    let options = {
      url: 'https://js.arcgis.com/4.22/',
      css: 'https://js.arcgis.com/4.22/esri/themes/light/main.css'
    };

    loadModules(['esri/Map', 'esri/views/SceneView'], options).then(([Map, SceneView]) => {

      const map = new Map({
          basemap: "streets",
          ground: "world-elevation"///
        });

        const view = new SceneView({
          container: "mapview", // Reference to the scene div created in step 5
          map: map, // Reference to the map object created before the scene
          scale: 50000000, // Sets the initial scale to 1:50,000,000
          center: [-101.17, 21.78] // Sets the center point of view with lon/lat
        });

        // console.log(view);
    })
  }
    }
}

</script>

<style>
#mapview {
  position: relative;
  width: 100%;
  height:100%;

}
</style>
