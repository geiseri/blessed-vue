import Vue from 'blessed-vue'
import MainWindow from './main.vue'

const el = Vue.dom.createElement()

Vue.dom.append(el)

const instance = new Vue({
  name: 'app',
  components: {
    MainWindow
  },
  template: '<main-window />'
}).$mount(el)
