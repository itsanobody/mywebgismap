<template>
	<div class="onemap-page">
		<Mapview></Mapview>
	</div>
</template>

<script>
import Mapview from '../components/common/Mapview_await.vue';
// import Mapview from "../components/common/Mapview2D.vue"
// import Mapview from "../components/common/Mapview3D.vue"

export default {
	name: 'OneMap',
	components: {
		Mapview,
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
