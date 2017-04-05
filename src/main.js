import Vue from 'vue'
import hello from './components/hello.vue'
import nohello from './components/nohello.vue'
import filterdata from './components/filterdata.vue'


new Vue({
  el: '#app',
  components: {
  	hello: hello,
  	nohello: nohello,
  	filterdata: filterdata
  }
})

