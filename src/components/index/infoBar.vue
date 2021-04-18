<template>
  <div class="info-bar">
    <div class="infobar-item"><span>@Crushdada</span></div>
    <div class="infobar-item" style="font-size: 12px">
      <span>一个练习demo</span>
    </div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-yinfu"></span>
      <div class="music-name">
        <span data-text="身体健康">希望能开心一点</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoBar',
}
</script>
<style>
.info-bar {
  color: white;
  font-size: 14px;
  padding-left: 10px;
  padding-bottom: 5.5px;
}
.info-bar .infobar-item {
  font-size: 17px;
  margin: 1.5px;
}
.iconfont .icon-yinfu {
  margin-right: 5px;
}
.music-item {
  display: flex;
}
.music-name {
  width: 150px;
  font-size: 16px;
  white-space: nowrap; /* 强制换行 */
  overflow: hidden;
}
.music-item .music-name span {
  display: inline-block;
  animation: scroll 2.4s linear infinite; /* 绑定的关键帧名称  完成动画花费的时间 线性速度曲线 循环播放*/
}
.music-item .music-name span::after {
  content: attr(data-text);
  margin-left: 23px; /*使用了伪元素的元素上绑定一个属性，然后就可以通过attr方法将这个属性赋给content，content就不再写死了 */
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(
      calc(-50% - 20px)
    ); /*允许计算表达式，来动态地为元素赋值 */
  }
}
</style>