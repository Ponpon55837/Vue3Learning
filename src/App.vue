<template>
  <h1>{{ title }}</h1>
  <button @click='start' :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay='delay' />
  <Result />
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data() {
    return {
      title: 'Reaction Timer',
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    }
  }
}
</script>
