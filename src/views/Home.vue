<template>
  <div class='home'>
    <h1>Home</h1>
  </div>
  <div class="content">
    <h2>Refs</h2>
    <p>My name is {{ init.name }} and my age is {{ init.age }}</p>
    <label>Name:</label>
    <input type="text" v-model="init.name" />
    <label>Age:</label>
    <input type="text" v-model="init.age">
    <button @click='updateValue(init)'>Clear Input</button>

    <h2>Reactive</h2>
    <label>Name:</label>
    <input type="text" v-model="initTwo.name" />
    <label>Age:</label>
    <input type="text" v-model="initTwo.age">
    <button @click='updateValue(initTwo)'>Clear Input</button>

    <h2>Computed</h2>
    <!-- 使用v-model把輸入的值綁到searchMember這個ref裡面 -->
    <input type="text" v-model="searchMember">
    <p>search term - {{ searchMember }}</p>
    <!-- 一開始因為搜尋框沒有值，所以會return原始陣列，就是members這個陣列 -->
    <div v-for="member in matchMembers" :key="member">
      {{ member }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {
    const init = ref({
      name: 'mario',
      age: 30
    })

    // reactive用法與ref基本一樣但是在function呼叫reactive的內容時，原先要寫成init.value.name = 'XXXX'，現在使用reactive則是直接寫initTwo.name = 'XXXX'
    // reactive跟ref最大的差別在在於需要寫成物件的形式，而ref可以單獨使用
    // 例如 const aaa = ref('bbb')，但是const aaa = reactive('bbb')在呼叫時只有ref的值可以被改變，reactive的值無法
    const initTwo = reactive({
      name: 'John',
      age: 40
    })

    const updateValue = (target) => {
      // 使用ref之後，如果要變動值，要使用xxx.value來改變值，而不是原本的xxx = OOO
      // 例如原本寫成let name = ref('mario')，變動時要用name.value = 'XXXX'

      // 如果是用定義一個物件底下的變數的話，這邊value必須放在這個物件後面，而不是變數後面
      // 所以要寫成init.value.name = 'XXXX'，而不是init.name.value這個方式不行
      // init.value.name = ''
      // init.value.age = ''

      // 使用傳入變數的方式來定義物件，這樣呼叫底下的變數可以直接省去使用value
      target.name = ''
      target.age = ''
    }

    const searchMember = ref('')
    const members = ref(['Shan', 'Jane', 'Uei', 'Mei', 'Yuan'])
    console.log(searchMember.value)

    const matchMembers = computed(() => {
      // 如果searchMember的值有變動，進行計算，這邊是回返一個過濾過只包含目前searchMember有的值的陣列，當searchMember為空值，則會回返一個完整的members陣列
      return members.value.filter(mem => mem.includes(searchMember.value))
    })

    // 執行watch查看的function才會呼叫這個watch function的內容
    watch(searchMember, () => {
      console.log('watch function')
    })

    // 就跟react hooks的 useEffect差不多
    watchEffect(() => {
      console.log('watchEffect function')
    })

    // 使用setup時，要記得把物件或是變數return出來，才能被使用
    return { init, initTwo, updateValue, searchMember, matchMembers }
  }
}
</script>
