import Vue from 'vue'
import hello from './components/hello.vue'
import nohello from './components/nohello.vue'

new Vue({
  el: '#app',
  components: {
  	hello: hello,
  	nohello: nohello
  }
})

