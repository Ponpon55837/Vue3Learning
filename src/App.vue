<template>
  <Nav />

  <!-- 這裡的router-view會抓取Nav當中router-link的連結做為內容輸出 -->
  <router-view />

  <Footer />
</template>

<script>
import Nav from './outerComponents/Nav.vue'
import Footer from './outerComponents/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      title: 'Vue Router',
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      // 會回到上一個頁面，看你上一個頁面是點哪一個
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>
