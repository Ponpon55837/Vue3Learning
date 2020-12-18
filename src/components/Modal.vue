<template>
  <div class='backdrop' @click='closeModal'>
    <!-- 這邊的sale是要被綁定的class，theme則是用作爲判斷值的value，theme從父元件傳入 -->
    <div class='modal' :class="{ sale: theme === 'dark' }">
      <!-- {{}} 當中的內容都由父元件傳入 -->
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <slot>No such value input  in Default Slot</slot>
      <slot name='links'>No such value input  in Links Slot</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
      // $emit 可以從父元件拿到function來用
      this.$emit('close')
    }
  }
}
</script>
