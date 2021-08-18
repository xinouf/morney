<template>
  <Layout class-prefix="layout"> <!--当看到classPrefix时，里面会有一些可以控制的css，但是不希望一个一个的传给他-->
   <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
export default {
  name: 'Money',
  components: {Types, Notes, Tags, NumberPad},
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