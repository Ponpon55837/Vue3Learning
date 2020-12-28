import { ref } from 'vue'

const getDetails = (id) => {
  const detail = ref()
  const error = ref(null)
  const jsonDetailsHandler = async () => {
    try {
      const data = await fetch(`http://localhost:3004/post/${id}`)
      if(!data.ok) {
        throw Error('no available data')
      }
      detail.value = await data.json()
    }
    catch(err){
      error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { detail, error, jsonDetailsHandler }
}

export default getDetails
