<template>
  <Layout>
    <Tabs class-prefix="type" :data-sourse="array2" :value.sync="yyy"/>
    <Tabs class-prefix="interval" :data-sourse="array" :value.sync="hhh"/>
  </Layout>
</template>

<script lang="ts">

import Types from "@/components/Money/Types.vue";
import Component from "vue-class-component";
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  yyy = '-'
  hhh = 'day'
  array = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}
  ]
  array2 = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'},
  ]
}
</script>

<style lang="scss" scoped>
::v-deep .type-item {
  background: #c4c4c4;

  &.selected {
    background: white;

    &::after {
      display: none;
    }
  }
}
</style>