<template>
  <nav>
    <router-link class="item" active-class="selected" to="/money"><Icon name="money"/>记账</router-link>
    <router-link class="item" active-class="selected" to="/labels"><Icon name="label"/>标签</router-link>
    <router-link class="item" active-class="selected" to="/statistics"><Icon name="chart"/>统计</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  font-size: 12px;
  @extend %outerShadow;
  > .item{
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>