<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChange($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class FormItem extends Vue {
  name= 'FormItem.vue';
  @Prop({default:''}) readonly value!:string
  /*value = '';*/
  @Prop({required:true}) fieldName!: string;/*required:true必填*/
  @Prop() placeholder?: string;/*default默认值  ?是有可能不存在*/
  onValueChange(value:string){
    this.$emit('update:value', value)
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 44px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
    border: none;
  }
}
</style>