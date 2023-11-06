<template>
  <div :class="$style['page-home']">
    <h1>这是首页</h1>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'page-home'
}
</script>

<style lang="scss" module>
.page-home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
