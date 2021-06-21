<template>
  <div class="tab-bar">
    <div class="item" @click="changeTab(0)">
      <router-link to="index" tag="span" :class="tabIndex == 0 ? 'active' : ''"
        >首页</router-link
      >
    </div>
    <div class="item" @click="changeTab(1)">
      <router-link
        to="/follow"
        tag="span"
        :class="tabIndex == 1 ? 'active' : ''"
        >熟人</router-link
      >
    </div>
    <div class="item" @click="changeTab(2)">
      <router-link
        to="/publish"
        tag="span"
        :class="tabIndex == 2 ? 'active' : ''"
        ><img
          class="footer-bar-plus-img"
          src="../../assets/footer-bar-plus-img.png"
          alt=""
      /></router-link>
    </div>
    <div class="item" @click="changeTab(3)">
      <router-link to="/msg" tag="span" :class="tabIndex == 3 ? 'active' : ''"
        >消息</router-link
      >
    </div>
    <div class="item" @click="changeTab(4)">
      <router-link to="/sign" tag="span" :class="tabIndex == 4 ? 'active' : ''"
        >我</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index
      // console.log(this.tabIndex);
    },
  },
  props: {
    msg: String,
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #ccc;
  font-size: 16px;
  display: flex;
  justify-content: center;
}
.tab-bar .item {
  flex: 1;
  text-align: center;
}
.tab-bar .item {
  padding: 1px 10px 2px 10px;
}
.tab-bar .item .active {
  color: #fff;
}
.footer-bar-plus-img {
  margin: 10px;
  width: 50px;
  height: 30px;
}
</style>
