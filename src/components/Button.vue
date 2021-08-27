<template>
  <button class="button"
          @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component
export default class Button extends Vue {
  name='Button'
}
</script>

<style lang="scss" scoped>
.button {
  color: white;
  background: #767676;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  height: 40px;

}
</style>