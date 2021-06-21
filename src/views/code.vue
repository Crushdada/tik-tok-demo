<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>

<template>
  <div class="sign">
    <div class="sign-header">
      <router-link class="icon" tag="span" to="/tpsign">←</router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>请输入验证码</h2>
        <p>验证码已通过短信发送至+86 12314387295</p>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            @input="changeCode"
            v-model="code"
            type="text"
            class="inp-control input-pw"
            placeholder="验证码是1234，没买短信验证api.."
          />
        </div>
        <div class="sele">
          {{ time }}
        </div>
      </div>
      <div class="code-btn">
        <button
          :disabled="disabled"
          :class="btnBg ? 'active' : ''"
          class="load-btn"
          @click="toMe"
        >
          <div v-if="loading" class="loads"></div>
          登录
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      telErea: '',
      time: 60,
      code: '',
      disabled: true,
      btnBg: false,
      loading: false,
    }
  },
  created() {
    this.getCode()
  },

  methods: {
    getCode() {
      this.timer()
      this.codes = '1234'
    },
    timer() {
      if (this.time > 0) {
        this.time--
        setTimeout(this.timer, 1000)
      } else {
        console.log(11)
      }
    },
    changeCode(e) {
      this.code = e.target.value
      if (this.code == this.codes) {
        this.btnBg = true
        this.disabled = false
        this.loading = true
      } else {
        console.log('验证码错误')
      }
    },
    toMe() {
      //跳转
      this.$router.push('/me')
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
  color: #999;
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
  justify-content: space-between;
}
.sele {
  margin-right: 20px;
  color: #cccccc;
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
.load-btn {
  display: flex;
  justify-content: center;
}
.loads {
  width: 14px;
  height: 14px;
  border: 3px solid #ffffff;
  border-bottom: 3px #cccccc solid;
  border-radius: 50%;
  animation: load 1s infinite linear;
  margin-right: 5px;
}
@keyframes load {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>