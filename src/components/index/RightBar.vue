<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <img src="../../static/img/avatar.jpg" alt="头像" />
        <span class="iconfont icon-avatar-plus"></span>
        <div class="icon-plus-background"></div>
      </div>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-rightbar-xin">
        <p>18.0w</p>
      </span>
    </div>
    <div class="item-icon">
      <span
        class="iconfont icon-rightbar-pinglun"
        @click.stop="showCom($event)"
      >
        <p>18.0w</p>
      </span>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-rightbar-zhuanfa">
        <p>18.0w</p>
      </span>
    </div>
    <div class="rightbar-item">
      <div class="rightbar-music">
        <img src="../../static/img/avatar.jpg" alt="头像" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightBar',
  methods: {
    showCom(e) {
      e.preventDefault()
      this.$emit('changeCom')
    },
  },
}
</script>
<style>
.right-bar .rightbar-item {
  width: 100%;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-border {
  width: 52px;
  height: 52px;
  position: relative;
  text-align: center;
}
/* 头像 */
.right-bar .avatar-border img {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  border: 1px solid rgba(248, 248, 248, 0.699);
}
/* 头像下的加号 */
.avatar-border .icon-avatar-plus {
  color: #fe2c5a;
  position: absolute;
  font-size: 23px;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 2;
}
/* 在图标后面加背景颜色 */
.avatar-border .icon-plus-background {
  width: 12px;
  height: 12px;
  background-color: white;
  position: absolute;
  margin: 0 auto;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 1;
}

/* 心、评论、转发 */
.right-bar .item-icon {
  width: 100%;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-icon .iconfont {
  color: rgb(252, 252, 252);
  font-size: 32px;
  text-align: center;
  padding-top: 12px;
}
.item-icon .iconfont p {
  font-size: 7px;
}
.rightbar-item .rightbar-music {
  width: 45px;
  height: 45px;
  margin-top: 30px;
  background: #2e2e2e;
  border-radius: 50%;
  transform: scale(1.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2e2e2e;
}
.rightbar-item .rightbar-music img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  animation: round 5s 0s linear infinite; /* 关键帧名 完成花费时间 延迟 速度曲线 播放次数 */
}
@keyframes round {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
