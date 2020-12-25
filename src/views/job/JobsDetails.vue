<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
  <p>{{ details }}</p>
</template>

<script>
export default {
  props: ['id', 'details']
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //     details: this.$route.params.details
  //   }
  // }
}
</script>
