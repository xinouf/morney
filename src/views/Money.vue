<template>
  <div class="nav-wrapper">
    <div class="content">
      money.vue
    </div>
<Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money',
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid royalblue;
  height: 100vh;
}
.content {
  border: 1px solid lightsalmon;
  overflow: auto;
  flex-grow: 1;
}
</style>