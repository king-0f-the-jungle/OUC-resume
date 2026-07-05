import { createRouter, createWebHashHistory } from 'vue-router'
import BaseInfo from '@/views/BaseInfo.vue'
import MySkills from '@/views/MySkills.vue'
import MyExperience from '@/views/MyExperience.vue'
import FuturePlan from '@/views/FuturePlan.vue'

const router = createRouter({
  // 使用Hash模式
  // 因为不知道腾讯云的静态页面托管要怎么配才不会404
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/base-info', component: BaseInfo },
    { path: '/my-skills', component: MySkills },
    { path: '/my-experience', component: MyExperience },
    { path: '/future-plan', component: FuturePlan },
    { path: '/', redirect: '/base-info' },
  ],
})

export default router
