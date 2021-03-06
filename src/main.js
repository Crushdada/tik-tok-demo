/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import icons from './static/iconfont/iconfont.css'
//活动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { videoPlayer } from 'vue-video-player'
import 'swiper/swiper-bundle'
//视频播放器
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

//自定义弹窗
import Toast from './components/toast/toast.js'
Vue.prototype.$toast = Toast

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(videoPlayer)
new Vue({
  router,
  store,
  render: h => h(App),

  mounted() {
    axios
      .get('https://matthewelvey.spinetail.cdu.edu.au/blog.json')
      .then(res => {
        console.log(res.data[0].href)
      })
  }
}).$mount('#app')
