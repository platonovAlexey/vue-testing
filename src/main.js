import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueGoodTable from 'vue-good-table';
import carousel from './components/carousel.vue'
import navigation from './components/navigation.vue'
import tabbed from './components/tabbed.vue'
import filtertable from './components/filtertable.vue'
import filtertable2 from './components/filtertable2.vue'


import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vue2Filters);
Vue.use(VueGoodTable);


new Vue({
	el: '#app',
	components: {
		navigation:navigation,
		carousel: carousel,
		tabbed:tabbed,
		filtertable: filtertable,
		filtertable2: filtertable2
	}
})

var postItem = document.querySelector('.blog__post__item');
var postList = document.getElementById('post__list');
var postListFavorites = document.getElementById('post__list__favorites');



	if (localStorage.getItem('deleteItem') !== null) {
		var item = localStorage.getItem('deleteItem');

	}

	postItem.addEventListener('click', shift);

	function shift() {
		var cont2 = document.getElementById('cont2');
		var cont1 = document.getElementById('cont1');
		var btnFavoritesTab = document.querySelector('.btn-favorites');
		var newParent = this.parentNode.id == 'cont1' ? 'cont2' : 'cont1';
		document.getElementById(newParent).appendChild(this);

		if(cont2.innerHTML !== ''  ){
			btnFavoritesTab.classList.add('btn-favorites-tab');
			btnFavoritesTab.innerHTML = 'Убрать из избранного';
		}
		// else{
		// 	btnFavoritesTab.classList.remove('btn-favorites-tab');
		// 	btnFavoritesTab.innerHTML = 'Добавить в избранное';
		// }
		
		localStorage.setItem('deleteItem','removeItem');
	}
