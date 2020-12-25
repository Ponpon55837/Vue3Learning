<template>
  <form @submit.prevent='handleSubmit'>
    <label>Email:</label>
    <!-- 使用v-model的方式，將值綁定到data當中，與平常js不同的是，一般js需要用addEvenetListener來將值寫入 -->
    <input id='email' type='email' required v-model="email" />

    <label>Password:</label>
    <input type='password' required v-model="password" />
    <div v-if='passwordError' class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.enter='addSkill' />
    <!-- 這邊skill並沒有被下面的data給定義，是由skills這個陣列創造出來使用，可以想像成map的時候會寫成aaa.map(items => item)這種概念 -->
    <div v-for="skill in skills" :key="skill" class="pill" >
      <span @click='removeSkill(skill)'>{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" />
      <label>Accept terms to conditions</label>
    </div>

    <div class='submit'>
      <button>Submit</button>
    </div>

  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms Accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: 'text@text.email.com',
      password: '',
      role: 'developer',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      //如果tempSkill是存在值，並且陣列skills裡面不包含現在tempSkill當中的內容，才把tempSkill的值推送到陣列skills當中
      if(this.tempSkill && !this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill)
      }
      this.tempSkill = ''
    },
    removeSkill(skill) {
      // 使用filter的方式創造一個新的陣列回傳給skills陣列，這樣不是做remove的動作，而是創造一個沒有當下點擊的skill的陣列丟進skills陣列中
      this.skills = this.skills.filter(item => {
        return skill !== item
      })
    },
    handleSubmit() {
      // validate Password
      this.passwordError = this.password.length > 7 ? '' : 'Password must be at least 8 chas long'
    }
  }
}
</script>
