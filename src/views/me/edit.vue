<template>
  <div class="edit">
    <my-header
      :title="'编辑资料'"
      :hasLeft="true"
      @changeBack="toBack"
    ></my-header>
    <div class="edit-wrap">
      <div class="ava-box">
        <div class="avatar">
          <div class="avatar-and-icon">
            <img src="../../static/img/avatar.jpg" alt="头像" />
            <i class="iconfont icon-edit-avatar"></i>
            <input type="file" />
          </div>
        </div>
        <p>点击更换头像</p>
      </div>
      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名字</span>
          <span>Crushdada<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>15962823<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">简介</span>
          <span>摒弃傲慢与偏见<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>点击设置<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">性别</span>
          <span>男<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>1999-12-02<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">地区</span>
          <span>中国·浙江·杭州<span class="icon">></span></span>
        </div>
        <div class="edit-item">
          <span class="label">头像挂件</span>
          <span>点击设置头像挂件<span class="icon">></span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from '../../components/header/myHeader.vue'
export default {
  components: {
    myHeader,
  },
  methods: {
    toBack() {
      this.$router.push('/me')
    },
  },
}
</script>
<style scoped>
.edit {
  background-color: #101821;
}
.edit-wrap {
  padding: 0 10px;
  box-sizing: border-box;
}
.ava-box {
  color: #ccc;
  text-align: center;
  padding: 20px;
}
.avatar {
  position: relative;
}
.avatar img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  /* margin-bottom: 16px; */
  opacity: 0.5;
}
.avatar .icon-edit-avatar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: white;
}
.avatar-and-icon {
  position: relative;
  height: 100px;
  width: 100px;
  margin: 0 auto;
}
.avatar input {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 16px;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.edit-box {
  border-top: 1px #292831 solid;
  color: #ccc;
}
.edit-item {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.edit-item .label {
  color: #fff;
}
.edit-item .icon {
  margin-left: 10px;
}
</style>