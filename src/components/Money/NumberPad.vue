<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class NumberPad extends Vue {
  name= 'NumberPad'
  @Prop(Number) readonly value!:number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement)
    //as HTMLButtonElement强制指定内容}
    const input = button.textContent!
    //! 不会为空
    if (this.output.length === 16) {
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {//根据input检索第0个开始有没有包含0123456789，如果有就替换
        this.output = input
      } else {//如果不是的话，就剩下一个.符号就加上
        this.output += input
      }
      return
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return
    }
    this.output += input
  }
  remove(){
    if(this.output.length === 1){
      this.output = '0'
    }else {
      this.output = this.output.slice(0,-1)
    }
  }
  clear(){
    this.output ='0'
  }
  ok(){
    const number =parseFloat(this.output)
    this.$emit('update:value',number)
    this.$emit('submit',number)//提交数据事件，和上面的值变化区分
    /*this.output = this.value.toString() *///把output变为初始值，置空，不能这样写，this.$emit('update:value',this.output)已经把value改了
    this.output = '0'//把output置空
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
    padding: 9px 16px;
    height: 72px;
  }

  .buttons {
    @extend %clearFix;
    /*display: flex;
    flex-wrap: wrap; 换行*/
    button {
      width: 25%;
      height: 64px; /*高度等比vh\宽度等比vw,具体看设计师*/
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 64px*2;
        float: right;
      }

      &.zero {
        width: 25%*2;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%); /*scss的颜色函数*/
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%); /*scss的颜色函数*/
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%); /*scss的颜色函数*/
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%); /*scss的颜色函数*/
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%); /*scss的颜色函数*/
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }
}
</style>