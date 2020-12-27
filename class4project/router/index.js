import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/job/Jobs.vue'
import JobsDetails from '../views/job/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }, {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    // 使用props: true這樣就不需要在使用data() {}，來接資料，直接使用props: ['id', 'details']即可
    props: true
  }, {
  // redirect page，這個例子是說如果你網址輸入all-jobs，會被轉址到jobs去
    path: '/all-jobs',
    redirect: '/jobs'
  }, {
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
