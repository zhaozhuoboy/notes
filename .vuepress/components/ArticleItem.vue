<template>
  <div class="article-item">
    <h3 class="article-title">
      <a :href="info.path">{{info.title}}</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
.article-item {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
}
</style>
