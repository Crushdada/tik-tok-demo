<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <videos ref="videos" :videoList="item" :index="index"></videos>

        <div class="infobar_wrap">
          <info-bar></info-bar>
        </div>
        <div class="rightbar_wrap">
          <right-bar @changeCom="showComs"></right-bar>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 评论栏 -->
    <transition name="up"
      ><!-- 评论栏向上滑出来的过渡动效 -->
      <div class="comment-wrap" v-if="showComment">
        <div class="comment-list">
          <div class="comment-top">
            <div class="number">15.0w条评论</div>
            <div class="close" @click="close()"><span>x</span></div>
          </div>
          <div class="comment-body">
            <div class="comment-box">
              <!-- 第一条评论及回复 -->
              <!-- 评论 -->
              <div class="comment-item">
                <div class="user-pic">
                  <img src="../../static/img/avatar.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">前端切图仔</p>
                    <p class="reply-info">
                      呆呆鹅==debug小公主呆呆鹅==debug小公主
                      <span class="time">04-15</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>1330</p>
                  </div>
                </div>
              </div>
              <!-- 回复 -->
              <div class="sub-comment-item">
                <div class="user-pic">
                  <img src="../../static/img/comment-avatar.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">Crushdada</p>
                    <p class="reply-info">
                      <span>回复 </span>
                      <span class="re-name">前端切图仔</span><span> :</span>
                      <span> Wish u a good day！(加班快乐)</span>
                      <span class="time">04-15</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>200</p>
                  </div>
                </div>
              </div>
              <div class="more">------展开163条回复</div>
              <!-- 第二条回复及评论 -->
              <!-- 评论 -->
              <div class="comment-item">
                <div class="user-pic">
                  <img src="../../static/img/comment-avatar2.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">年轻</p>
                    <p class="reply-info">
                      本demo“师从”特困女程序媛23333
                      <span class="time">04-20</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>200</p>
                  </div>
                </div>
              </div>
              <!-- 回复 -->
              <div class="sub-comment-item">
                <div class="user-pic">
                  <img src="../../static/img/comment-avatar3.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">前端攻城狮</p>
                    <p class="reply-info">
                      <span>回复 </span>
                      <span class="re-name">年轻</span><span> :</span>
                      <span> 996是我们的福报！(手动狗头)</span>
                      <span class="time">04-15</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>123</p>
                  </div>
                </div>
              </div>
              <div class="more">------展开14条回复</div>
              <!-- 第三条回复及评论 -->
              <!-- 评论 -->
              <div class="comment-item">
                <div class="user-pic">
                  <img src="../../static/img/comment-avatar4.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">lemonApplePie</p>
                    <p class="reply-info">
                      世界上只有一种真正的英雄主义，那就是认识生活的真相后依然爱它--罗曼·罗兰
                      <span class="time">04-10</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>100</p>
                  </div>
                </div>
              </div>
              <!-- 回复 -->
              <div class="sub-comment-item">
                <div class="user-pic">
                  <img src="../../static/img/comment-avatar3.jpg" alt="头像" />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">David</p>
                    <p class="reply-info">
                      <span>回复 </span>
                      <span class="re-name">lemonApplePie</span><span> :</span>
                      <span> 习大大说，幸福是奋斗出来的！</span>
                      <span class="time">04-15</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-comment-xin"></span>
                    <p>23</p>
                  </div>
                </div>
              </div>
              <div class="more">------展开4条回复</div>
            </div>
          </div>
          <!-- 评论输入框 -->
          <div class="reply-input">
            <input type="text" name="" id="" placeholder="留下你精彩的评论" />
            <span class="emoji">@</span>
            <span class="iconfont icon-comment-emoji"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Videos from './videos'
import InfoBar from './infoBar'
import RightBar from './RightBar'
export default {
  name: 'VideoList',
  components: {
    Swiper,
    SwiperSlide,
    Videos,
    InfoBar,
    RightBar,
  },
  data() {
    return {
      showComment: false,
      page: 0,
      swiperOption: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: () => {
            this.playAction(this.page)
          },
          slideNextTransitionStart: () => {
            this.page += 1
            this.nextVideo(this.page)
          },
          slidePrevTransitionEnd: () => {
            if (this.page > 0) {
              this.page -= 1
              this.prevVideo(this.page)
            }
          },
        },
      },
      dataList: [
        {
          id: '0',
          url: require('../../assets/Clouds64767.mp4'), // 路径
        },
        {
          id: '1',
          url: require('../../assets/Clouds64767.mp4'), // 路径
        },
        {
          id: '2',
          url: require('../../assets/Clouds64767.mp4'), // 路径
        },
        {
          id: '3',
          url: require('../../assets/Clouds64767.mp4'), // 路径
        },
      ],
    }
  },
  methods: {
    playAction(pageIndex) {
      this.$refs.videos[pageIndex].playOrStop()
    },
    //上滑播放,(往下看下一个视频)
    nextVideo(index) {
      this.$refs.videos[index - 1].stop() //上一个视频暂停
      this.$refs.videos[index].play() //当前视频播放
    },
    //下滑播放，(往之前倒)
    prevVideo(index) {
      this.$refs.videos[index + 1].stop()
      this.$refs.videos[index].play()
    },
    showComs() {
      this.showComment = true
    },
    close() {
      this.showComment = false
    },
  },
}
</script>
<style>
.swiper-slide {
  position: relative;
}
.video-list {
  overflow: hidden;
  height: 100%;
}
.video-list .swiper-container {
  height: 100%;
  position: relative;
}
.infobar_wrap {
  position: absolute;
  font-size: medium;
  color: black;
  left: 0;
  bottom: 55px;
}
.rightbar_wrap {
  font-size: medium;
  color: black;
  position: absolute;
  right: 10px;
  bottom: 86px;
}
/* 评论部分 */
/* 整个评论栏的过渡动效 */
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter,
.up-leave-to {
  transform: translateY(100%);
}
/* 评论头 */
.comment-wrap {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 500px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  background: white;
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  z-index: 2;
  overflow: auto;
}
.comment-top {
  width: 100%;
  height: fit-content;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 462px;
  background: white;
  z-index: 2;
}
.comment-top .number {
  flex: 1;
  text-align: center;
}
.comment-top .close {
  padding-right: 33px;
  font-size: 30px;
  color: #666;
}
/* 评论主体 */
.comment-body {
  color: rgb(185, 185, 185);
  max-width: 450px;
  overflow: auto;
  margin-top: 40px;
  margin-bottom: 30px;
}
.comment-item {
  display: flex;
}
.user-pic img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}
.item-info {
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
}
.zan .icon-comment-xin {
  color: rgb(196, 196, 196);
  font-size: 20px;
  margin: 0 10px;
}
.zan p,
.reply .time {
  font-size: 13px;
  text-align: center;
}
.reply {
  width: 90%;
}
.reply .name {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}
.reply .reply-info {
  line-height: 24px;
  font-size: 15px;
  color: black;
}
.reply .reply-info span {
  color: rgb(185, 185, 185);
}

/* 二级评论区 */
.sub-comment-item {
  display: flex;
  margin-left: 33px;
  margin-top: 10px;
}
.sub-comment-item .reply-info span:first-child,
.sub-comment-item .reply-info span:nth-child(3),
.sub-comment-item .reply-info span:nth-child(4) {
  /*选取 回复，:, 回复内容，给它们变成黑色 */
  color: black;
}
.sub-comment-item .user-pic img {
  width: 26px;
  height: 26px;
}
.more {
  margin: 20px 0px 12px 33px;
}
.comment-list .reply-input {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reply-input input {
  line-height: 40px;
  width: 70%;
  border: none;
  padding: 0 10px;
}
.reply-input .emoji {
  margin-right: 6%;
  font-size: 30px;
  color: #ccc;
  padding-bottom: 4px;
}
.reply-input .iconfont {
  font-size: 30px;
  color: #ccc;
}
</style>
