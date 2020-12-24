<template>
  <div class='block' v-if="showBlock" @click='stopTimer'>
    click me
  </div>
</template>

<script>
// import { onMounted } from 'vue'
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
      // 使用emit從父元件拿到名為end的function，再把值傳到上層
      this.$emit('end', this.reactionTime)
    }
  }
  // setup(props) {
  //   console.log(props.delay)
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
  //     }, props.delay)
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
