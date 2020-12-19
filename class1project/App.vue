<template>
  <h1>{{ title }}</h1>
  <button @click="toggleModal">Toggle Modal</button>
  <button @click="toggleTheme">Toggle Modal</button>
  <button @click="toggleModalTwo">Toggle Modal</button>

  <div v-if="showModal">
    <Modal :theme='theme' @close="toggleModal" >
      <!-- 以default slot方式傳入內容，原先則是以:header='header'方式傳入 -->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <!-- 以命名為links的slot來傳入這個特別的slot -->
      <template v-slot:links>
        <a href='#'>sign up now</a>
        <a href='#'>more info</a>
      </template>
    </Modal>
  </div>

  <div v-if="showModal2">
    <Modal :theme='theme' @close="toggleModalTwo" >
      <!-- 以default slot方式傳入內容，原先則是以:header='header'方式傳入 -->
      <h1>{{ header }} of modal 2</h1>
      <p>{{ text }} of modal 2</p>
      <!-- 以命名為links的slot來傳入這個特別的slot -->
      <template v-slot:links>
        <a href='#'>show modal 2</a>
        <a href='#'>more info of modal 2</a>
      </template>
    </Modal>
  </div>
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
      showModal2: false,
      theme: 'light'
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModal2 = !this.showModal2
    },
    toggleTheme() {
      this.theme = 'light' ? this.theme = 'dark' : this.theme = 'light'
      console.log(this.theme)
    }
  }
}
</script>
