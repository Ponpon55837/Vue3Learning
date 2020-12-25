<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" key='job.id' :title='job.title'>
    <router-link
      :to="{
        name: 'JobsDetails',
        params: { id: job.id, details: job.details }
      }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
import JobsDetails from './JobsDetails.vue'

export default {
  components: {
    JobsDetails
  },
  data() {
    return {
      jobs: [
        { title: 'UX DESIGNER', id: 1, details: 'make by designer' },
        { title: 'WEB DEVELOPER', id: 2, details: 'make by developer' },
        { title: 'WEB USER', id: 1, details: 'use by user' },
      ]
    }
  }
}
</script>
