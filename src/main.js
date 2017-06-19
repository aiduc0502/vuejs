import Vue from 'vue'
import App from './App.vue'

//Vue.component('container', Container)
export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
