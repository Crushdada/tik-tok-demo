<template>
  <div class="me">
    <div class="me-top" :style="bgPic">
      <div class="menu-box">
        <div class="menu-icon"></div>
      </div>
    </div>
    <div class="me-wrap">
      <div class="me-content">
        <div class="info">
          <img src="../../static/img/me-info.jpg" alt="" />
          <button class="btn">编辑资料</button>
          <button class="btn">+朋友</button>
        </div>
        <div class="des">
          <h2>爱学习的孩子</h2>
          <span>抖音号：1582312330</span>
          <p>越努力越幸运</p>
        </div>
        <div class="user-tag">
          <span>23岁</span>
          <span>中国最富垃圾场</span>
          <span>+添加学校等标签</span>
        </div>
        <div class="user-tag2">
          <span><a>2</a>获赞</span>
          <span><a>543</a>关注</span>
          <span><a>2.0w</a>+粉丝</span>
        </div>
        <div class="me-ab">好好学习，天天向上</div>
      </div>
      <div class="me-tab">
        <div class="me-navbar">
          <div
            class="item"
            @click="changeTab(0)"
            :class="indexTab == 0 ? 'active' : ''"
          >
            作品23
          </div>
          <div
            class="item"
            @click="changeTab(1)"
            :class="indexTab == 1 ? 'active' : ''"
          >
            动态33
          </div>
          <div
            class="item"
            @click="changeTab(2)"
            :class="indexTab == 2 ? 'active' : ''"
          >
            喜欢21
          </div>
        </div>
        <div class="tab-wrap">
          <div class="tab-con" v-show="indexTab === 0">
            <div class="tab-img">
              <img src="../../static/img/me-production1.jpg" alt="" />
              <img src="../../static/img/me-production2.jpg" alt="" />
              <img src="../../static/img/me-production3.jpg" alt="" />
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 1">2</div>
          <div class="tab-con" v-show="indexTab === 2">4</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgPic: {
        backgroundImage: `url(${require('../../static/img/me-1.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      },
      indexTab: 0,
    }
  },
  methods: {
    changeTab(index) {
      this.indexTab = index
    },
  },
}
</script>
<style scoped>
.me {
  position: relative;
}
.me-top {
  height: 160px;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
.menu-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-icon {
  background: #fff;
  border-top: 2px #fff solid;
  border-bottom: 2px #fff solid;
  background-clip: content-box;
  width: 20px;
  height: 2px;
  padding: 5px 0;
}
.me-wrap {
  position: absolute;
  top: 140px;
  /* height: 100%; */
  width: 100%;
  background-color: #101821;
  color: #fff;
}
.me-content {
  padding: 0 20px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-bottom: 20px; */
}
.info img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.info button {
  height: 40px;
  padding: 0 24px;
  background-color: #393842;
  border: none;
  color: #fff;
}
.des {
  padding: 20px 0;
}
.des h2 {
  font-size: 24px;
  font-weight: bold;
}
.des span {
  padding: 10px 0 15px 0;
  display: block;
}
.des p {
  line-height: 24px;
}
.user-tag span {
  font-size: 14px;
  color: #ccc;
  margin-right: 5px;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 8px;
}
.user-tag2 {
  padding: 20px 0;
}
.user-tag2 span {
  font-size: 14px;
  margin-right: 10px;
  color: #ccc;
}
.user-tag2 a {
  margin-right: 5px;
  color: #ccc;
}
.me-ab {
  background: red;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
}
.me-tab {
  height: 300px;
}
.me-navbar {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
.me-navbar .item {
  padding: 10px 25px;
  color: #ccc;
}
.me-navbar .active {
  border-bottom: 2px #ffdf0e solid;
  color: #fff;
}

.tab-img img {
  width: 33.3%;
  height: 230px;
}
</style>