<template>
  <div class='Blog'>
    <h1>Blog</h1>
    <!-- <label>Search Post:</label>
    <input type="text" v-model="searchPost"> -->
    <div class="bloglink" v-if="posts" v-for="post in posts" :key="post.id">
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
    <div v-else>
      posts is loading ...
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
  name: 'Blog',
  setup() {
    const posts = ref([])
    // const searchPost = ref('')

    watchEffect(() => {
      // 這邊是用json-server來跑，要在終端機執行json-server --watch data/post.json --port 3004，這裡指定port是為了避免跟vite重複使用port 3000
      fetch(`http://localhost:3004/post`)
        .then(res => res.json())
        .then(data => posts.value = data )
        .catch(err => console.log(err.message))
    })

    // const matchPosts = computed(() => {
    //   return posts.value.filter(pos => pos.includes(searchPost.value))
    // })

    onMounted(() => {
      console.log('console.log Mounted')
    })

    onUnmounted(() => {
      console.log('console.log unMounted')
    })

    onUpdated(() => {
      console.log('console.log unUpdated')
    })

    return { posts }
  }
}
</script>
