<template>
  <div class='postlist'>
    <label>{{ title }}</label>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'content']
}
</script>
