<template>
  <div class=''>
    <p>Reaction time - {{ resultScore }} ms</p>
    <p class='rank'>{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['resultScore'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.resultScore < 250) {
      this.rank = 'Ninja Fingers'
    }
    else if (this.resultScore < 400) {
      this.rank = 'Rapid Reflexes'
    }
    else {
      this.rank = 'Snail pace...'
    }
  }
}
</script>
