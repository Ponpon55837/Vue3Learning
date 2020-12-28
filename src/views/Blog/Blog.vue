<template>
  <div class='Blog'>
    <h1>Blog</h1>
    <!-- <label>Search Post:</label>
    <input type="text" v-model="searchPost"> -->
    <!-- <div class="bloglink" v-if="posts.length" v-for="post in posts" :key="post.id">
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
    </div> -->

    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostContent v-if="isShow" :posts="posts" />
      <button type="button" @click="isShow = !isShow">Toggle Content Show</button>
      <button type="button" @click="posts.pop()">Delet Post</button>
    </div>

    <div v-else>
      posts is loading ...
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import PostContent from './PostContent.vue'
import getPosts from '../../composables/getPosts.js'

export default {
  name: 'Blog',
  components: { PostContent },
  setup() {
    // jsonHandler的程式碼搬到composables/getPosts底下了
    // 這裡把posts, error, jsonHandler從getPost裡面解構出來
    const { posts, error, jsonPostsHandler } = getPosts()
    const isShow = ref(true)
    // const searchPost = ref('')

    watchEffect(() => {
      console.log('watchEffect')
      jsonPostsHandler()
    })

    // const matchPosts = computed(() => {
    //   return posts.value.filter(pos => pos.includes(searchPost.value))
    // })

    return { posts, error, isShow }
  }
}
</script>
