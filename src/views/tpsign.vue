<template>
  <div class="sign">
    <div class="sign-header">
      <router-link class="icon" tag="span" to="/sign">←</router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>手机号密码登录</h2>
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
            @keyup="loginAction"
            v-model="phone"
            type="text"
            class="inp-control"
            placeholder="请输入手机号码"
          />
        </div>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            @keyup="loginAction"
            v-model="password"
            type="password"
            class="inp-control input-pw"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="not-sign">
        <p>
          登录即表明同意<a href="">抖音用户协议</a>和<a href="">隐私政策</a>
        </p>
      </div>
      <div class="code-btn">
        <button
          :disabled="disabled"
          @click="loginAction"
          :class="btnBg ? 'active' : ''"
        >
          登录
        </button>
      </div>
      <div class="other">
        <span>忘记了？<a href="">找回密码</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      telErea: '',
      phone: '',
      password: '',
      disabled: true,
      btnBg: false,
    }
  },
  methods: {
    loginAction() {
      var regtel = /^1[345789]{1}\d{9}$/
      if (this.phone == '') {
        this.$toast('手机号不能为空')
      } else if (!regtel.test(this.phone)) {
        this.$toast({
          message: '请填写正确的手机号码',
          type: 'error',
          duration: 3000,
        })
      } else if (this.password == '') {
        this.$toast({
          message: '密码不能为空',
          type: 'error',
          duration: 3000,
        })
        return
      } else {
        //判断通过，可以请求接口
        this.disabled = false
        this.btnBg = true
      }
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
.des {
  margin-bottom: 30px;
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
  margin-top: 12px;
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
  padding-left: 6px;
  width: 200px;
  border: none;
}
.input-pw {
  padding-left: 12px;
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
.not-sign a {
  color: #628db8;
  text-decoration: none;
}

.code-btn button {
  margin: 20px 0;
  width: 100%;
  background: #ccc;
  padding: 15px 0;
  border: none;
  color: white;
  font-size: 17px;
}
.code-btn .active {
  color: white;
  background: #fe2c55;
}
.other {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.other a {
  color: #628db8;
  text-decoration: none;
}
</style>