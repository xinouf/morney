<template>
  <div>
    <ul class="types">
      <li
          :class="{[classPrefix+'-item']:classPrefix,selected: value==='-'}"
          @click="selectType('-')">支出</li>
      <!--如果type是-的话，则class为selected-->
      <li  :class="{[classPrefix+'-item']:classPrefix,selected: value==='+'}" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator'

@Component//告诉下面的是组件
export default class Types extends Vue  {
  @Prop(String)readonly value!:string;
  @Prop(String)classPrefix?: string
 /* type = '-';//'-'表示支出，'+'表示收入   删掉了，主组件传了默认的值*/


  selectType(type: string){
      if (type !== '-' && type !== '+'){
        throw new Error('type is unknown')
      }
    this.$emit('update:value',type)
        /*this.type = type;  删掉了，主组件传了默认的值，这个值不是这个组件了，所以不需要操作，(改变和watch了)*/
      //this.$emit('update:value',this.type) 两次+都会触发事件，所以用watch更好，只有在变化时，才会触发
    }
/*@Watch('type')
  onTypeChange(value: string){
    this.$emit('update:value',value)
}*/
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