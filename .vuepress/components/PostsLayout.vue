<template>
  <div class="posts-layout">
    <div class="posts-list" v-if="list.length">
      <ArticleItem
        v-for="item in list"
        :key="item.uuid"
        :info="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts-layout',
  components: {
  },
  props: {
  },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  computed: {
  },
  created () {
    this.findArticles()
  },
  methods: {
    findArticles () {
      const pages = this.$site.pages
      this.list = pages.map(item => {
        const info = {
          uuid: item.key,
          title: item.title,
          tags: item.frontmatter.tags || [],
          path: item.path,
          creteTime: item.frontmatter.createTime || 0
        }

        return info
      })
    }
  }
}
</script>
