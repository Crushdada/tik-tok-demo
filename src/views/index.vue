<template>
  <div class="indexWrap">
    <top-bar></top-bar>
    <video-list></video-list>
    <router-view></router-view>
  </div>
</template>
<script>
import TopBar from '../components/index/TopBar.vue'
import VideoList from '../components/index/VideoList'
export default {
  name: 'index',
  components: {
    TopBar,
    VideoList,
  },
}
</script>
<style>
.indexWrap {
  background: black;
}
</style>
