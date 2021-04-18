<template>
  <div class="videos">
    <video-player
      class="video-player vjs-default-skin vjs-big-play-centered"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    >
    </video-player>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Videos',
  components: {
    videoPlayer,
  },
  props: ['videoList'],
  data() {
    return {
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto',
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: this.videoList.url,
            type: 'video/mp4', // 类型
          },
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false,
      },
      playing: false,
    }
  },
  methods: {
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause()
        this.playing = false
      } else {
        this.$refs.videoPlayer.player.play()
        this.playing = true
      }
    },
  },
}
</script>
<style>
.videos {
  position: relative;
}
.videos .vjs-default-skin > .video-js .vjs-big-play-button {
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  width: 40px;
  height: 40px;
  line-height: 1.35em;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  /* transform: translate(-50%, -50%); */
}
</style>
