<template>
	<div class="filter__table">
		<div class="container">
			<div class="row">
				<vue-good-table
					title="Выбор квартиры"
					:columns="columns"
					:globalSearch="true"
					:rows='cards'
					globalSearchPlaceholder="Искать квартиру"
					styleClass="table condensed table-bordered table-striped">
				</vue-good-table>

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
				columns: [
					{
						label: 'Название',
						field: 'title',
					},
					{
						label: 'Описание',
						field: 'body',
					},
					{
						label: 'Количество комнат',
						field: 'value',
						width: '50px'
					}
				]
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
	.good-table {
		width: 100%;
	}
	table thead .sorting:before, table thead .sorting_asc:before, table thead .sorting_asc_disabled:before, table thead .sorting_desc:before, table thead .sorting_desc_disabled:before{
		display: none !important;
	}
</style>
