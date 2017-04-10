import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import hello from './components/hello.vue'
import nohello from './components/nohello.vue'
import filterdata from './components/filterdata.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


new Vue({
	el: '#app',
	components: {
		hello: hello,
		nohello: nohello,
		filterdata: filterdata
	}
})

