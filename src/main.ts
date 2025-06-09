import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

// 👉 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/index.scss'

// export const createApp = ViteSSG(App, { routes }, ({ app }) => {
//   app.use(ElementPlus)
// })

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createPinia())
    app.use(ElementPlus)
  },
  {
    client: false, // ⬅️ Это отключает клиентский JS
  },
)
