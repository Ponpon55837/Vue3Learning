<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="detail" class="details">
    <h3>{{ detail.title }}</h3>
    <p>{{ detail.content }}</p>
  </div>
</template>

<script>
import { watchEffect } from 'vue'
import getDetails from '../../composables/getDetails.js'

export default {
  name: 'Details',
  props: ['id'],
  setup(props) {
    // 記得這邊呼叫getDetails時，要把id值塞入，不然會找不到
    const { detail, error, jsonDetailsHandler } = getDetails(props.id)

    watchEffect(() => {
      jsonDetailsHandler()
    })

    return { detail, error }
  }
}
</script>
