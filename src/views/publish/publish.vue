<template>
  <div class="publish">
    <div class="pub-top">
      <div class="back">
        <span>x</span>
      </div>
      <span><i class="iconfont icon-publish-top-yinfu"></i>选择音乐</span>
    </div>
    <div class="upload-box">
      <video
        src=""
        ref="video"
        style="width: 100%; height: 500px; object-fit: fill"
      ></video>
      <div class="upload-bar">
        <div class="bar-item">
          <div class="icon"></div>
          <p>道具</p>
        </div>
        <div class="bar-item" @click="getCamera">
          <div class="pub-border">
            <div class="pub"></div>
          </div>
        </div>
        <div class="bar-item">
          <div class="icon"></div>
          <p>上传</p>
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
  methods: {
    getCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((success) => {
          //开启摄像头成功，将摄像头放到videos中，要获取video
          this.$refs['video'].srcObject = success
          //实现效果
          this.$refs['video'].play()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
.publish {
  background-color: #ccc;
  color: white;
}
.pub-top {
  position: relative;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 16px;
}
.back {
  position: absolute;
  left: 10px;
}
.back span {
  font-size: 28px;
}
.upload-box {
  background-color: #ccc;
  height: 100vh;
}
.upload-box .upload-bar {
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.upload-box .upload-bar .icon {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px red solid;
  margin-bottom: 5px;
}
.pub-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px #cb6074 solid;
  box-shadow: -5px 0 5px #cb6074, 5px 0 5px #cb6074, 0 -5px 5px #cb6074,
    0 5px 5px #cb6074;
}
.pub {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #fe2c55;
}
</style>