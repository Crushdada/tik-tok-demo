<template>
  <div class="home">
    <router-view />
    <tab-bar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// -
import TabBar from '@/components/home/TabBar.vue'

export default {
  name: 'Home',
  components: {
    TabBar,
  },
}
</script>
<style>
* {
  margin: 0;
}
</style>