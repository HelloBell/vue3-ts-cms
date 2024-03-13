import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from './global/resgister-icons'

// 针对ElMessage和Elloading的样式引入
// import 'element-plus/theme-chalk/el-message.css'
/**
 * 或使用vite-plugin-style-import
 *  * npm install vite-plugin-style-import consola -D
 *  * 在 vite.config里配置
 */

// 全局注册Element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(icons)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
