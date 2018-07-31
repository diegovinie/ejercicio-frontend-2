import Vue from 'vue'
import App from './App.vue'

import Instructions from './components/Instructions'

Vue.component('Instructions', Instructions)

new Vue({
  el: '#app',
  render: h => h(App)
})