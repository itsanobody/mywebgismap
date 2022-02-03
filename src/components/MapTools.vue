<template>
	<div class="maptools-view">
		<div class="basemap-toggle">
			<span class="maptools-item">行政导航</span>
			<span class="maptools-item">距离测量</span>
			<span class="maptools-item">面积测量</span>
			<span class="maptools-item">清屏</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MapTools',
	}
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
