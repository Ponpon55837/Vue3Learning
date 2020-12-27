import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog/Blog.vue'
import PostList from '../views/Blog/PostList.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }, {
    path: '/blog/:id',
    name: 'PostList',
    component: PostList,
    // 使用props: true這樣就不需要在使用data() {}，來接資料，直接使用props: ['id', 'details']即可
    props: true
  },{
  // catch all 404，使用catchAll去判斷這個網址存不存在
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
