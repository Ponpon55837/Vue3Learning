<template>
  <router-link :to="{ name: 'Details', params: { id: post.id, } }">
    <h2>{{ post.title }}</h2>
  </router-link>

  <p>{{ snippet }}</p>
  <span v-for="tag in post.tags" :key="tag">
    #{{ tag }}
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.content.substring(17, 100) + '...'
    })

    return { snippet }
  }
}
</script>
