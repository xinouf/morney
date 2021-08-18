<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  li {
    width: 50%;
    height: 64px; /*固定，防止其他padding等把它撑大*/
    display: flex;
    align-items: center; /*对于居中，最好用这个*/
    justify-content: center;
    position: relative;

    &.selected::after {
      /*不能用border-bottom，会影响本来的框框*/
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }

}
</style>