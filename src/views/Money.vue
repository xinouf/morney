<template>
  <Layout class-prefix="layout"> <!--当看到classPrefix时，里面会有一些可以控制的css，但是不希望一个一个的传给他-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <!--    叫x,那触发的事件就叫@update:x-->
    <!--    <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>-->
    <Tabs :data-sourse="recordTypeList" :value.sync="record.type"/>
    <!--    <Types :value="record.type" @update:value="onUpdateType"/>同上-->
    <!--    :value="record.type" 把默认的type值传给子组件，保持子组件和父亲的默认值一致，然后把子组件的type默认值删掉-->
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
    <!--    data-source代表props-->
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Tags from '@/components/Money/Tags.vue'
import FormItem from '@/components/Money/FormItem.vue'
import {Component} from 'vue-property-decorator'
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

const version = window.localStorage.getItem('version') || '0'


@Component({components: {Tabs, FormItem, Tags, NumberPad}})
export default class Money extends Vue {
get recordList(){
  return  this.$store.state.recordList
}
  recordTypeList=recordTypeList
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0}

  onUpdateNotes(value: string) {
    this.record.notes = value
  }
  saveRecord() {
    this.$store.commit('createRecord', this.record)
  }

}
</script>
<style lang="scss" scoped>
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