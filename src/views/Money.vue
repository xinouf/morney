<template>
  <Layout class-prefix="layout"> <!--当看到classPrefix时，里面会有一些可以控制的css，但是不希望一个一个的传给他-->
    {{record}}
    <NumberPad :x.sync="record.amount"/>
<!--    叫x,那触发的事件就叫@update:x-->
<!--    <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>-->
    <Types :value.sync="record.type"/>
<!--    <Types :value="record.type" @update:value="onUpdateType"/>同上-->
<!--    :value="record.type" 把默认的type值传给子组件，保持子组件和父亲的默认值一致，然后把子组件的type默认值删掉-->
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import {Component} from 'vue-property-decorator'

type Record = {//类型声明，不需要告诉值
  tags: string[]//可以在tags后面加个？：tags？，这样下面的tag就不用声明
  notes: string
  type: string
  amount: number
}/*不用声明，下面的可以反推，但最好不要省*/

@Component({components: {Types, Notes, Tags, NumberPad}})//告诉下面的是组件
export default class Money extends Vue {
  name= 'Money';
  tags = ['衣', '食', '住', '行'];
  record:Record ={tags:[],notes:'',type:'-',amount:0};
  /*recode ={tags:[],note:'',type:'-',amount:'0'};不用声明，下面的可以反推，但最好不要省*/
  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  onUpdateNotes(value:string){
    this.record.notes = value;
  }
/*  onUpdateType(value:string){
    this.record.type = value;
  }*/
/*  onUpdateAmount(value:string){
    this.record.amount = parseFloat(value);
  }*/
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse; /*从最下面开始布局*/
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

</style>