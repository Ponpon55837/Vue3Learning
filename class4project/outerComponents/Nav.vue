<template>
  <div id="nav" @scroll='handleScroll' :class="{ opacityReduce: active }">
    <router-link :to="{ name: 'Home', params: {} }">Home</router-link>
    <router-link :to="{ name: 'About', params: {} }">About</router-link>
    <router-link :to="{ name: 'Jobs', params: {} }">Jobs</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
    },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 20 ? true : false
    }
  }
}
</script>
