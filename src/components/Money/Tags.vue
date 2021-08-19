<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component//告诉下面的是组件
export default class Tags extends Vue {
  name: 'Tags'
  @Prop(Array) dataSource: string[] | undefined
  selectedTags: string[] = []

  toggle(tag: string) {

    const index = this.selectedTags.indexOf(tag)
    if (this.selectedTags.length === 0) {
      this.selectedTags.push(tag)
    } else {
      if (index >= 0) {//匹配成功
        this.selectedTags.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  .current {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h; /*确定只有一行字的时候，把行高和高设为一样就能居中*/
      border-radius: ($h/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 30%);
        color: #d9d9d9;
      }
    }
  }

  .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>