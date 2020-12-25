<template>
  <h1>{{ title }}</h1>
  <SignupForm />
</template>

<script>
import SignupForm from './components/SignupForm.vue'

export default {
  name: 'App',
  components: {
    SignupForm
  },
  data() {
    return {
      title: 'Form Input',
    }
  },
  methods: {

  }
}
</script>
