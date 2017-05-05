<template>
<div class="tabbed__wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="tabbed">
		<input type="radio" name="tabs" id="tab-nav-1" checked>
		<label for="tab-nav-1">Выбор квартиры</label>
		<input type="radio" name="tabs" id="tab-nav-2">
		<label for="tab-nav-2">Избранное</label>
		
		<div class="tabs">
			<div>
				<h2>Выбор квартиры</h2>


				<div class="blog">
				<input type="text" placeholder="Поиск квартиры" v-model="search" class="blog__search form-control"/>
				<div class="blog__buttons">
					<button class="btn btn-primary" @click="sort = 'body'">1-комнатная</button>
					<button class="btn btn-primary" @click="sort = 'title'">2-комнатная</button>
					<button class="btn btn-primary" @click="sort = 'id'">3-комнатная</button>
				</div>
				<ul>

					<!-- Filter input -->
					<li class="blog__post" v-for="card in filteredCards">
						<img :src="card.image" alt="photo" class="blog__img">
						<div class="blog__desc__wrapper">
							<div class="blog__text">{{ card.title }}</div>
							<div class="blog__desc">{{ card.body }}</div>
							<button class="btn btn-secondary">Добавить в избранное</button>
						</div>
					</li>

					<!-- Filter buttons -->
					<!-- <li class="blog__post" v-for="card in orderedCards">
						<img :src="card.image" alt="photo" class="blog__img">
						<div class="blog__desc__wrapper">
							<div class="blog__text">{{ card.title }}</div>
							<div class="blog__desc">{{ card.body }}</div>
							<button class="btn btn-secondary">Добавить в избранное</button>
						</div>
					</li> -->

					<!-- All Filters - don't work-->
					<!-- <li class="blog__post" v-for="card in cardsFiltered">
						<img :src="card.image" alt="photo" class="blog__img">
						<div class="blog__desc__wrapper">
							<div class="blog__text">{{ card.title }}</div>
							<div class="blog__desc">{{ card.body }}</div>
							<button class="btn btn-secondary">Добавить в избранное</button>
						</div>
					</li> -->
				</ul>
					

					

				</div>

				
			</div>
			<div><h2>Избранное</h2><p>Maecenas dictum, urna ut consequat condimentum, est dui commodo diam, ac pretium dui ante eu qus.</p></div>
			
		</div>
	</div>
			</div>
		</div>
	</div>
</div>
	
		
</template>

<script>

var cards = require('../cards');
import _ from 'lodash';


export default {
		data () {
			return{
				cards: cards,
				search: '',
				sort: 'name'
			}
		},

		computed: {
					filteredCards: function () {
						return this.cards.filter(function (card) {
							var searchRegex = new RegExp(this.search, 'i');

							if (searchRegex.test(card.title) || searchRegex.test(card.body))
								return true;
						}.bind(this))
					},
					orderedCards: function () {
						return _.orderBy(this.cards, this.sort);
					},
					cardsFiltered: function () {
						return this.orderedCards.concat(this.filteredCards);
					}
				}
	}

</script>

<style lang="scss">
.btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle{
	background-color: #025aa5 !important;
}
.btn-primary:focus, .btn-primary.focus{
	background: #781E19 !important;
	box-shadow: none !important;
	border-color: #781E19 !important;
}

.blog{
	margin-bottom: 100px;
}

.blog__buttons{
	margin-bottom: 20px;
}

.blog__post{
	position: relative;
	overflow: hidden;
	margin-bottom: 20px;
	list-style: none;
}

.blog__img{
	display: block;
	float: left;
	width: 300px;
	height: 300px;
	margin-right: 20px;
}


.blog__desc{
	font-size: 12px;
	text-align: left;
	margin-bottom: 20px;
}
.blog__search{
	margin-bottom: 20px;
}
	.tabbed {
	width: 100%;
	margin: 50px auto;
}

.tabbed > input {
	display: none;
}

.tabbed > label {
	display: block;
	float: left;
	padding: 12px 20px;
	margin-right: 5px;
	cursor: pointer;
	transition: background-color .3s;
}

.tabbed > label:hover,
.tabbed > input:checked + label {
	background: #781E19;
	color: #fff;
}

.tabs {
	clear: both;
	perspective: 600px;
}

.tabs > div {
	width: 100%;
	position: absolute;
	border: 2px solid #781E19;
	padding: 10px 30px 40px;
	line-height: 1.4em;
	opacity: 0;
	transform: rotateX(-20deg);
	transform-origin: top center;
	transition: opacity .3s, transform 1s;
	z-index: 0;
}

#tab-nav-1:checked ~ .tabs > div:nth-of-type(1),
#tab-nav-2:checked ~ .tabs > div:nth-of-type(2),
#tab-nav-3:checked ~ .tabs > div:nth-of-type(3),
#tab-nav-4:checked ~ .tabs > div:nth-of-type(4){
	transform: rotateX(0deg);
	opacity: 1;
	z-index: 1;
}

@media screen and (max-width: 700px) {
	.tabbed { width: 400px }
	.tabbed > label { display: none }
	.tabs > div {
		width: 400px;
		border: none;
		padding: 0;
		opacity: 1;
		position: relative;
		transform: none;
		margin-bottom: 60px;
	}
	.tabs > div h2 {
		border-bottom: 2px solid #4EC6DE;
		padding-bottom: .5em;
	}
}
</style>
