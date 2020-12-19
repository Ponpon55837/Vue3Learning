<template>
  <!-- 使用@click的話會變成點擊backdrop任何地方都會觸發，但是@click.self就只有點擊backdrop灰色的地方才會觸發function -->
  <div class='backdrop' @click.self='closeModal'>
    <!-- 這邊的sale是要被綁定的class，theme則是用作爲判斷值的value，theme從父元件傳入 -->
    <div class='modal' :class="{ sale: theme === 'dark' }">
      <!-- {{}} 當中的內容都由父元件傳入 -->
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <slot>No such value input  in Default Slot</slot>
      <div class='actions'>
        <slot name='links'>No such value input  in Links Slot</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 原先寫為props: ['header', 'text', 'theme']
  // 後來header跟text改由父元件藉由slot傳入
  props: ['theme'],
  methods: {
    closeModal() {
      // $emit 可以從父元件拿到function來用
      this.$emit('close')
    }
  }
}
</script>
