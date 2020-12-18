<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :theme='theme' @close="toggleModal" >
      <!-- 以default slot方式傳入內容，原先則是以:header='header'方式傳入 -->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <!-- 以命名為links的slot來傳入這個特別的slot -->
      <template v-slot:links>
        <a href='#'>AAA</a>
        <a href='#'>BBB</a>
      </template>
    </Modal>
  </div>
  <button @click="toggleModal">Toggle Modal</button>
  <button @click="toggleTheme">Toggle Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'APP',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue App',
      header: 'Sign of the data',
      text: 'Grab your web for half price',
      showModal: false,
      theme: 'light'
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleTheme() {
      this.theme = 'light' ? this.theme = 'dark' : this.theme = 'light'
      console.log(this.theme)
    }
  }
}
</script>
