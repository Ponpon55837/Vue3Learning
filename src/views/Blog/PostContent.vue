<template>
  <div class="post-content">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
  name: 'PostContent',
  props: ['posts'],
  components: { SinglePost },
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })

    onUnmounted(() => {
      console.log('unMounted')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })
  }
}
</script>
