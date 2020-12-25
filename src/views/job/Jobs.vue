<template>
  <h1>Jobs</h1>
  <div class="job" v-for="wave in waves" key='wave.stationId' :title='wave.locationName'>
    <h2>{{ wave.locationName }}</h2>
  </div>
  {{ waves.validTime }}
</template>

<script>
import JobsDetails from './JobsDetails.vue'

export default {
  data() {
    return {
      waves: []
    }
  },
  mounted() {
    fetch(`https://opendata.cwb.gov.tw/api//v1/rest/datastore/F-A0021-001?Authorization=CWB-59284856-0F85-4E19-A05B-42EDCCC4B575`)
    .then(res => res.json())
    .then(data => {
      const resdata = data.records.location[0]
      this.waves = resdata
    })
    .catch(err => console.log(err.message))
  }
}
</script>
