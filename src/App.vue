<template>
  <div id="app">
<router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height:1.5;
  font-size: 16px;
  font-family: $font-hei;
}
/*
.clearfix::after {记住：清除浮动就是这么写的
  content: '';
  display: block;
  clear: both;
}*/
/*#app {多团队合作全局样式写这里
}*/
</style>
