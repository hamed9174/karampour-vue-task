import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import VueAwesomeSwiper from 'vue-awesome-swiper'



// style
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/css/theme-color.scss'
import 'swiper/css/swiper.css'
import './assets/fontawesome/css/all.css'
import './assets/css/main.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
