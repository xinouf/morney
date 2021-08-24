<template>
  <Layout class-prefix="layout"> <!--当看到classPrefix时，里面会有一些可以控制的css，但是不希望一个一个的传给他-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <!--    叫x,那触发的事件就叫@update:x-->
    <!--    <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>-->
    <Types :value.sync="record.type"/>
    <!--    <Types :value="record.type" @update:value="onUpdateType"/>同上-->
    <!--    :value="record.type" 把默认的type值传给子组件，保持子组件和父亲的默认值一致，然后把子组件的type默认值删掉-->
    <div class="notes"><FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/></div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
<!--    data-source代表props-->
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Tags from '@/components/Money/Tags.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Types from '@/components/Money/Types.vue'
import {Component, Watch} from 'vue-property-decorator'
import recordListModel from '@/models/recordListModel'
import tagListModel from '@/models/tagListModel'
/*const model = require('@/model.js').model;*///如何用ts和js配合，用require,等同于下面的写法
/*const {model} = require('@/model.js');*//*model为js的写法*/

//数据迁移
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const version = window.localStorage.getItem('version') || '0'
/*const recordList: Record[] =model.fetch()/!*model为js的写法*!/*/
const recordList = recordListModel.fetch()
const tagList = tagListModel.fetch()
    /*const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')*/

/*if (version < '0.0.2') {
  if (version === '0.0.1') {
    //数据库升级
    recordList.forEach(record =>{
      record.createdAt = new Date(2021,1,1)
    })
    //保存数据 Rails框架里面学的
    window.localStorage.setItem('recordList', JSON.stringify(recordList))
  }
}
//保存完了之后，把版本号置为0.0.2
window.localStorage.setItem('version', '0.0.2')*/

@Component({components: {Types, FormItem, Tags, NumberPad}})//告诉下面的是组件
export default class Money extends Vue {
  name = 'Money'
  tags = tagList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0}

  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordList//默认给个空数组JSON.parse，把JSON对象转为Object赋值给数组？？
  //把记录保存
  /*recode ={tags:[],note:'',type:'-',amount:'0'};不用声明，下面的可以反推，但最好不要省*/
  onUpdateTags(value: string[]) {
    this.record.tags = value
  }

  onUpdateNotes(value: string) {
    this.record.notes = value
  }

  /*  onUpdateType(value:string){
      this.record.type = value;
    }*/

  /*  onUpdateAmount(value:string){
      this.record.amount = parseFloat(value);
    }*/
  saveRecord() {
    // eslint-disable-next-line no-undef
    const deepClone: RecordItem = recordListModel.clone(this.record)
    deepClone.createdAt = new Date()
    this.recordList.push(deepClone)//地址不变，所以push进去还是原来的东西，所以得深拷贝赋值给新的参数
  }

  @Watch('recordList') onRecordListChange() {
    recordListModel.save(this.recordList)
   /* window.localStorage.setItem('recordList', JSON.stringify(this.recordList))//JSON.stringify把object变成字符串*/
  }
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
.notes {
padding: 6px 0;
}
</style>