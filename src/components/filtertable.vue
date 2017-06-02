<template>
	<div class="filter__table">
	<div class="container">
		<div class="row">
			<h2>Выбор квартиры</h2>
		
		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="column in columns">
						<a class="table__link" href="#" @click="sortBy(column)">
							{{ column | capitalize }}
						</a>
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="card in orderedCards">
					<td>{{ card.title }}</td>
					<td>{{ card.body }}</td>
					<td>{{ card.value }}</td>
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
				sortKey: ['title', 'body', 'id'],
				reverse: false,
				columns: ['Название', 'Описание', 'Количество комнат']
			}
		},

		computed: {
			orderedCards: function (e) {
				return _.orderBy(this.cards, this.sortKey)
			},
		},

		methods: {
			sortBy: function(sortKey) {
				this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
				this.sortKey = sortKey;

		 },
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
