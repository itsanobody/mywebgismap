<template>
	<div class="onemap-page">
		<Mapview></Mapview>
		<MapTools></MapTools>
		<MapTree></MapTree>
	</div>
</template>

<script>
import Mapview from '../components/common/Mapview_await.vue';
// import Mapview from "../components/common/Mapview2D.vue"
// import Mapview from "../components/common/Mapview3D.vue"

import MapTools from '../components/MapTools.vue';
import MapTree from '../components/MapTree.vue';

export default {
	name: 'OneMap',
	components: {
		Mapview,
		MapTools,
		MapTree,
	},
	methods: {}
};
</script>
<style>
.onemap-page {
	position: relative;
	height:100%;
	width:100%;
}
</style>
