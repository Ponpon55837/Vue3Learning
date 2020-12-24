<template>
  <h1>{{ title }}</h1>
  <button @click='start' :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay='delay' @end="endGame" />
  <Results v-if="showResults" :resultScore="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data() {
    return {
      title: 'Reaction Timer',
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    // 這裡的reactionTime的值由Block.vue裡面的this.$emit('end', this.reactionTime)傳出的callback function
    endGame(reactionTime) {
      this.score = reactionTime,
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>
