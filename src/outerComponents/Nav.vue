<template>
  <div id="nav">
    <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
    <router-link :to="{ name: 'About', params: {} }">About</router-link>
    <router-link :to="{ name: 'Jobs', params: {} }">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>
