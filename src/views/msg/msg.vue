<template>
  <div class="message">
    <my-header
      :title="'消息'"
      :hasRight="true"
      :rightTxt="'发起聊天'"
    ></my-header>
    <div class="msg-wrap">
      <div class="msg-nav">
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>赞</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>@我的</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>评论</p>
        </div>
      </div>
      <div class="msg-ab">
        <img src="../../static/img/msg-bk.jpg" alt="" />
      </div>
      <div class="down">
        <div>抖音好友圈</div>
        <div><button class="btn">下载</button></div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../../static/img/msg-example1.jpg" alt="抖音小助手" />
          <div class="user-des">
            <div class="top">
              <span>抖音小助手</span>
              <span style="font-size: 14px">12:10</span>
            </div>
            <div class="bottom">
              <span class="bottom-msg">抖音安全课堂</span>
              <div class="no-see"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from '../../components/header/myHeader.vue'
export default {
  data() {
    return {}
  },
  components: {
    myHeader,
  },
}
</script>
<style scoped>
.msg-wrap {
  height: 100vh;
  padding: 0 20px;
  color: #fff;
  background-color: #101821;
}
.msg-nav {
  padding: 25px 5px;
  display: flex;
  justify-content: space-between;
}
.msg-nav-item {
  text-align: center;
  width: 60px;
}
.icon-box {
  width: 55px;
  height: 55px;
  background-color: #ff4d74;
  border-radius: 5px;
  margin-bottom: 5px;
}
.msg-ab {
  padding: 20px 0;
  border-top: 1px #242630 solid;
  border-bottom: 1px #242630 solid;
}
.msg-ab img {
  height: 120px;
  width: 100%;
}
.down {
  padding: 13px 0;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #242630 solid;
}
.down .btn {
  padding: 8px 25px;
  border: none;
  background-color: #fe2c55;
  color: #fff;
  border-radius: 2px;
}
/* .msg-list-box {
  padding-top: 30px;
} */
.msg-list {
  display: flex;
  padding: 10px 0;
}
.msg-list img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-des {
  flex: 1;
  height: 60px;
}
.user-des .top,
.bottom {
  font-size: 14px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 25px;
}
.top .top-msg {
  color: #666;
  align-items: center;
}

.bottom .bottom-msg {
  color: #666;
}
.bottom .no-see {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #face15;
}
</style>