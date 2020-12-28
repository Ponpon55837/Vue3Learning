import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const jsonPostsHandler = async () => {
    // 這邊是用json-server來跑，要在終端機執行json-server --watch data/post.json --port 3004，這裡指定port是為了避免跟vite重複使用port 3000
    // await fetch(`http://localhost:3004/post`)
    //   .then(res => res.json())
    //   .then(data => posts.value = data )
    //   .catch(err => console.log(err.message))

    // 上面的寫法或是下面的寫法都可以，下面是比較完整，可是上面寫起來比較乾淨好閱讀

    try {
      const data = await fetch(`http://localhost:3004/post`)
      if(!data.ok) {
        throw Error('no available data')
      }
      posts.value = await data.json()
    }
    catch(err){
      error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { posts, error, jsonPostsHandler }
}

export default getPosts
