<template>
  <div id="mapview"></div>
</template>


<!-- 使用异步方式加载就出错，不知为什么 -->




<script>
// 引入loadModules
import {loadModules} from 'esri-loader';

// 引入arcgis js api
const options = {
    url: "https://js.arcgis.com/4.20/init.js",
    css: "https://js.arcgis.com/4.20/esri/themes/light/main.css",
};

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

            // // 实例化地图
            // // ES6 数组结构[Map, Mapview]；async await ES8 语法
            // const[Map, Mapview] = await loadModules(
            //     ['esri/Map', 'esri/views/Mapview'], options
            // );

            // const map = new Map({
            //     basemap: 'osm',
            // });

            // const view = new Mapview({
            //     container: 'mapview',
            //     map: map,
            //     zoom: 10,
            // });
            // console.log(view);

            const _self = this;   //定义一个_self防止后续操作中this丢失
            const options = {      //定义一个包含有JS API中js开发包和css样式文件的对象
                url: 'http://localhost/4.20/init.js',
                css: 'http://localhost/4.20/esri/themes/light/main.css',
            };



            //通过loadModules来做衔接
            loadModules(['esri/Map',
            'esri/views/MapView'], options)
                .then(([Map, MapView]) => {
                    
                    //业务代码在此处编写
                    const map = new Map({    //实例化地图
                        basemap: "streets"
                    });

                    const view = new MapView({   //实例化地图视图
                        container: "app",
                        map: map,
                        zoom: 11, 
                        center: [104.072044,30.663776] 
                    });

                    view.ui.components = [];   //清除掉地图左上角默认的缩放图标
                }).catch((err) => {
                    _self.$message('地图创建失败，' + err);
                });
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
