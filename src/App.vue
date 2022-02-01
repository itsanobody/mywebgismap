<template>
	<div id="app">
		<el-container>
			<el-header>一张图WebGIS项目系统</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu default-active="1" class="el-menu-vertical-demo" @select='handleMenuSelect' background-color='#545c64' text-color='#fff' active-text-color='#ffd04b' :collapse="true">
						<el-menu-item index="1">
							<i class="el-icon-monitor"></i>
							<span slot="title">首页大屏</span>
						</el-menu-item>
						<el-menu-item index="2">
							<i class="el-icon-picture-outline"></i>
							<span slot="title">一张图</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {
		// Mapview
	},
	methods: {
		handleMenuSelect(index) {
			if(index === '1') {
				//跳转到首页大屏
				this.$router.push('/');
			}else if(index === '2') {
				this.$router.push('/onemap');
			}
		}
	}
};
</script>

<style>
html,
body,
#app {
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
}

.el-container {
	height: 100%;
}

.el-header {
	background-color: #32373e;
	line-height: 60px;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
}

.el-aside {
	background-color: #545c64;
	width: 64px !important;
	overflow: hidden !important;
}
.el-main {
	padding: 5px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
