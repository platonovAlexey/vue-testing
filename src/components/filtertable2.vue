<template>
	<div class="filter__table">
		<div class="container">
			<div class="row">
				<table class="table table-striped">
					<thead>
						<tr>
							<th v-for="column in columns">
								<a class="table__link" href="#" v-on:click="reverse" v-on:active="sortKey == columns">
									{{ column | capitalize }}
								</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="cards in filteredCards" >
							<td>{{ cards.title }}</td>
							<td>{{ cards.body }}</td>
							<td>{{ cards.value }}</td>
							<td><img :src="cards.image" alt="photo" class="blog__img"></td>
						</tr>
					</tbody>
				</table>

			</div>
		</div>
	</div>
</template>

<script>
var cards = require('../cards');
import _ from 'lodash';

	export default {
		data () {
			return {
				cards: cards,
				sortKey: 'title',
				search: '',
				columns: ['Название', 'Описание', 'Количество комнат', 'Фотография квартиры']
			}
		},
		computed: {
			filteredCards: function () {
				return this.cards.filter(function (card) {
					var searchRegex = new RegExp(this.search, 'i');

					if (searchRegex.test(card.title) || searchRegex.test(card.body))
						return true;
				}.bind(this))
			}
		},
		methods: {
	    reverse: function () {
	        this.cards.reverse();
	    }
		}
	}
</script>

<style lang="scss">
	.filter__table{
		margin-top: 40px;
	}
	.table__link{
		color: #000;
		&:hover{
			color: #000;
			text-decoration: underline;
		}
	}
	
</style>
