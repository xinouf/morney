<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator'
import TagHelper from "@/mixins/TagHelper";

@Component
export default class Tags extends Mixins(TagHelper) {

  selectedTags: string[] = []
  get tagList(){
    return  this.$store.state.tagList
  }
  created(){
    this.$store.commit('fetchTags')
  }

  toggle(tag: string) {

    const index = this.selectedTags.indexOf(tag)

    if (this.selectedTags.length === 0) {
      this.selectedTags.push(tag)
    } else if (index >= 0) {//匹配成功
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags.splice(index, 1)
      this.selectedTags.push(tag)
    }
    this.$emit('update:value', this.selectedTags)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
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