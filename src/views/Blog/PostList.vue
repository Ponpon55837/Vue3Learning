<template>
  <div class='postlist'>
    <label>{{ title }}</label>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['title', 'content'],
}
</script>
