<template>
  <div class='Blog'>
    <h1>Blog</h1>
    <div class="bloglink" v-for="post in posts" :key="post.id">
      <router-link
        :to="{
          name: 'PostList',
          params: {
            id: post.id,
            title: post.title,
            content: post.content }
          }">
          {{ post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'Blog',
  setup() {
    const posts = ref([])

    watchEffect(() => {
      // 這邊是用json-server來跑，要在終端機執行json-server --watch data/post.json --port 3004，這裡指定port是為了避免跟vite重複使用port 3000
      fetch(`http://localhost:3004/post`)
        .then(res => res.json())
        .then(data => posts.value = data )
        .catch(err => console.log(err.message))
        console.log(posts)
    })

    return { posts }
  }
}
</script>
