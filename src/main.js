import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import carousel from './components/carousel.vue'
import navigation from './components/navigation.vue'
import tabbed from './components/tabbed.vue'

import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(VueRouter);


new Vue({
	el: '#app',
	components: {
		navigation:navigation,
		carousel: carousel,
		tabbed:tabbed
	}
})

