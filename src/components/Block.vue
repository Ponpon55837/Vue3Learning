<template>
  <div class='block' v-if="showBlock" @click='stopTimer'>
    click me
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    console.log('component mount')
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      console.log(this.reactionTime)
    }
  }
  // setup() {
  //   const showBlock = false
  //   const timer = null
  //   const reactionTime = 0
  //
  //   const startTimer = () => {
  //     timer = setInterval(() => {
  //       reactionTime += 10
  //     }, 10)
  //   }
  //
  //   const stopTimer = () => {
  //     clearInterval(timer)
  //     console.log(reactionTime)
  //   }
  //
  //   onMounted(() => {
  //     setTimeout(() => {
  //       showBlock = true
  //       startTimer()
  //     }, this.delay)
  //   })
  //
  //   return {
  //     showBlock,
  //     timer,
  //     reactionTime
  //   }
  // }

}
</script>
