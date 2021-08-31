<template>
  <ul class="tabs">
   <li v-for="item in dataSourse" :key="item.value"
       :class="{selected: item.value=== value, [classPrefix+'-tabs-item']:classPrefix}"
   @click="select(item)">{{item.text}}

   </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

type DateSourceItem = {text:string, value:string}
@Component
export default class Tabs extends Vue{
@Prop({required:true,type:Array})
  dataSourse!:DateSourceItem[]
@Prop(String)readonly value!:string
@Prop(String)classPrefix?: string

  select(item:DateSourceItem){
this.$emit('update:value',item.value)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
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