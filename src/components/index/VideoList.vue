<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div><videos ref="videos" :videoList="item"></videos></div>
        <div class="infobar_wrap">
          <info-bar></info-bar>
        </div>
        <div class="rightbar_wrap">
          <right-bar></right-bar>
        </div>
      </swiper-slide>
    </swiper>
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
          },
          slidePrevTransitionEnd: () => {
            if (this.page > 0) {
              this.page -= 1
              console.log(this.page)
            }
          },
        },
      },
      dataList: [
        {
          id: '0',
          url:
            'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4', // 路径
        },
        {
          id: '1',
          url:
            'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4', // 路径
        },
        {
          id: '2',
          url:
            'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4', // 路径
        },
        {
          id: '3',
          url:
            'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4', // 路径
        },
      ],
    }
  },
  methods: {
    playAction(pageIndex) {
      this.$refs.videos[pageIndex].playOrStop()
    },
  },
}
</script>
<style>
.video-list {
  height: 100%;
}
.video-list .swiper-container {
  height: 100%;
  position: relative;
}
.infobar_wrap {
  font-size: medium;
  color: black;
  position: absolute;
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
</style>
