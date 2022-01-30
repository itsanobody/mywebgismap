<template>
  <div id="app">
    <el-container>
        <el-header>系统标题</el-header>
        <el-container>
          <el-aside width="200px">左侧菜单</el-aside>
          <el-main>
            <Mapview />
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import Mapview from "./components/common/Mapview2D.vue"

export default {
  name: 'App',
  components: {
    Mapview
  }
}
</script>

<style>
html, body, #app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

.el-container {
  height: 100%;
}

.el-header {
background-color:bisque;
line-height: 60px;
color: black;
font-size: 20px;
}

.el-aside {
background-color:beige
}

.el-main {
  padding: 5px !important;
}
</style>
