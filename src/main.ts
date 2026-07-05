import '@/assets/base.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入Icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.use(createPinia())
app.use(router)


app.mount('#app')
