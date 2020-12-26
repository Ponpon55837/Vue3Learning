<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" key='job.id' :title='job.title'>
      <router-link
        :to="{
          /* 使用name將值傳入指定的components，這邊就是指定傳入JobsDetails */
          name: 'JobsDetails',
          /* params將指定的值傳如，這樣在components裡面只要用props接著值就可以使用了 */
          params: { id: job.id, title: job.title, details: job.details }
        }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Jobs content is loading...</p>
  </div>
</template>

<script>
import JobsDetails from './JobsDetails.vue'

export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    // 這邊是用json-server來跑，要在終端機執行json-server --watch data/content.json --port 3004，這裡指定port是為了避免跟vite重複使用port 3000
    fetch(`http://localhost:3004/jobs`)
    .then(res => res.json())
    .then(data => this.jobs = data )
    .catch(err => console.log(err.message))
  }
}
</script>
