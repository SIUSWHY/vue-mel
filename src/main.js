import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencilAlt,
  faSearch,
  faHeart,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faPencilAlt, faHeart, faComment)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
