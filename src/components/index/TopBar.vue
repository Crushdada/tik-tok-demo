<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live" to="" tag="span"></span>
    </div>
    <div class="middle">
      <div class="item" @click="changeTopIndex(0)">
        <span :class="topIndex == 0 ? 'active' : ''">同城</span>
      </div>
      <div class="item" @click="changeTopIndex(1)">
        <span :class="topIndex == 1 ? 'active' : ''">关注</span>
      </div>
      <div class="item" @click="changeTopIndex(2)">
        <span :class="topIndex == 2 ? 'active' : ''">推荐</span>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-search" to="" tag="span"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      topIndex: 2,
    }
  },
  methods: {
    changeTopIndex(index) {
      this.topIndex = index
    },
  },
}
</script>
<style scoped>
.top-bar {
  position: fixed;
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: #ccc;
  padding: 13px;
  top: 0;
  left: 0;
  /* background: black; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  z-index: 999;
}
.left,
.right {
  width: 20%;
}
.iconfont {
  font-size: 24px;
}
.middle {
  display: flex;
  justify-items: center;
}
.middle .item {
  padding: 0 10px;
  flex: 1;
  text-align: center;
}
.middle .item .active {
  color: white;
  border-bottom: 3px solid white;
}
.item span {
  padding: 8px 0;
}
.right {
  text-align: right;
}
</style>