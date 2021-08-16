<template>
  <svg class="icon">
    <use  :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
//import x from '@/assets/icons/label.svg';
//console.log(x)


//把一个目录的文件里的svg文件全部引入
let importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
try {//单元测试时，可能会遇到问题，所以try
  importAll(require.context('../assets/icons', true, /\.svg$/));
}catch (error){
  console.log(error)
}
export default {
  props:['name'],
  name: 'Icon'
}

</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>