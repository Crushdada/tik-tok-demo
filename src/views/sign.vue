<template>
  <div class="sign">
    <div class="sign-header">
      <router-link class="icon" tag="span" to="/index">x</router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>登录后即可展示自己</h2>
        <p>
          登录即表明同意<a href="">抖音用户协议</a>和<a href="">隐私政策</a>
        </p>
      </div>
      <div class="sign-box">
        <div class="sele">
          <select class="sele-control" v-model="telErea">
            <option value="+86" selected>+86</option>
            <option value="+82">+82</option>
          </select>
        </div>
        <div class="inp">
          <input
            v-model="phone"
            @input="changeTel($event)"
            type="text"
            class="inp-control"
            placeholder="请输入手机号码"
          />
        </div>
      </div>
      <div class="not-sign">
        <p>未注册手机号验证通过后将自动登录</p>
      </div>
      <div class="code-btn">
        <button
          :disabled="disabled"
          @click="getCode"
          :class="btnBg ? 'active' : ''"
        >
          获取短信验证码
        </button>
      </div>
      <div class="other">
        <router-link tag="a" to="/tpsign">密码登录</router-link>
        <a @click.stop="show">其它方式登录</a>
      </div>
    </div>
    <div class="mask" v-if="showMask">
      <div class="oauth">
        <ul>
          <li class="oauth-item">
            <img
              class="img-plus"
              src="../static/img/other-login-toutiao.jpg"
            />今日头条登录
          </li>
          <li class="oauth-item">
            <img src="../static/img/other-login-QQ.jpg" /> QQ登录
          </li>
          <li class="oauth-item">
            <img
              class="img-plus"
              src="../static/img/other-login-wechat.jpg"
            />微信登录
          </li>
          <li class="oauth-item">
            <img src="../static/img/other-login-weibo.jpg" /> 微博登录
          </li>
          <li class="oauth-item" @click="close">取消</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      telErea: '',
      showMask: false,
      disabled: true,
      btnBg: false,
      phone: '',
    }
  },
  mounted() {
    let isLogin = sessionStorage.getItem('islogin')
    if (isLogin == 'yes') {
      this.$router.push('/me')
    }
  },
  methods: {
    show() {
      this.showMask = true
    },
    close() {
      this.showMask = false
    },
    changeTel(e) {
      this.phone = e.target.value
      var regtel = /^1[345789]{1}\d{9}$/
      if (regtel.test(this.phone)) {
        this.btnBg = true
        this.disabled = false
      } else {
        this.btnBg = false
        this.disabled = true
      }
    },
    getCode() {
      //存入sessionStorage
      sessionStorage.setItem('islogin', 'yes')
      //跳转至输入验证码
      this.$router.push('/code')
    },
  },
}
</script>
<style>
.sign {
  padding: 30px;
}
.sign-header {
  display: flex;
  justify-content: space-between;
}
.sign-header .icon {
  height: 26px;
  font-size: 26px;
}
.sign-content {
  padding: 40px 10px;
}
.des h2 {
  font-size: 24px;
  font-weight: bold;
}
.des p {
  line-height: 50px;
  font-size: 14px;
  color: #666;
}
.des p a {
  color: #628db8;
  padding: 0px 5px;
  text-decoration: none;
}
.sign-box {
  display: flex;
  height: 50px;
  align-items: center;
  background: #f9f9f9;
}
.sele-control {
  background: #f9f9f9;
  height: 40px;
  font-weight: bold;
  margin-left: 5px;
  border: none;
}
.inp-control {
  height: 36px;
  background: #f9f9f9;
  border: 0px;
  width: 200px;
  border: none;
}
input {
  caret-color: #fe2c55;
}
input::-webkit-input-placeholder {
  color: #cccccc;
}
.not-sign p {
  color: #c2c2c2;
  font-size: 14px;
  margin-top: 10px;
}
.code-btn button {
  margin: 20px 0;
  width: 100%;
  padding: 15px 0;
  border: none;
  background: #ccc;
  color: white;
}
.code-btn .active {
  color: white;
  background: #fe2c55;
}
.other {
  display: flex;
  justify-content: space-between;
}
.other a {
  color: #628db8;
  text-decoration: none;
}
/* 其他登录方式 */
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.oauth {
  position: absolute;
  height: 260px;
  width: 100%;
  bottom: 0;
  background: white;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  text-align: center;
}
.oauth ul {
  padding: 0;
}
.oauth ul img {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  bottom: 0;
}
.oauth ul .img-plus {
  width: 40px;
  height: 30px;
}
.oauth-item {
  list-style: none;
  border-bottom: 1px solid #f5f5f5;
  line-height: 52px;
}
</style>