import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'
import en from './locales/en.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'
import { createI18n } from 'vue-i18n'

// 👉 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/index.scss'
import messages from './locales'

let savedLocale = "en"
if (typeof window !== "undefined") {
  savedLocale = localStorage.getItem("locale") || "en"
}
const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: savedLocale,
  messages
})

// export const createApp = ViteSSG(App, { routes }, ({ app }) => {
//   app.use(ElementPlus)
// })

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createPinia())
    app.use(ElementPlus)
    app.use(i18n)
  },
  {
    client: false, // ⬅️ Это отключает клиентский JS
  },
)
