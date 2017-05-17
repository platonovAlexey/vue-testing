<template>
	<div class="justify-content-centermy-1 row">
    <b-form-fieldset horizontal label="Rows per page" class="col-6" :label-size="6">
      <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
      </b-form-select>
    </b-form-fieldset>

    <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
      <b-form-input v-model="filter" placeholder="Поиск"></b-form-input>
    </b-form-fieldset>
  </div>

  <!-- Main table element -->
  <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    <template slot="name" scope="item">
      {{item.value.first}} {{item.value.last}}
    </template>
    <template slot="isActive" scope="item">
      {{item.value?'Yes :)':'No :('}}
    </template>
    <template slot="actions" scope="item">
      <b-btn size="sm" @click="details(item.item)">Details</b-btn>
    </template>
  </b-table>

  <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.items.length" :per-page="perPage" v-model="currentPage" />
  </div>
</template>

<script>
var cards = require('../cards');

	export default {
		data () {
			return {
					items: [{
					isActive: true,
					age: 40,
					name: {
						first: 'Вася',
						last: 'Иванов'
					}

				}, {
					isActive: false,
					age: 21,
					name: {
						first: 'Петя',
						last: 'Петров'
					}

				}, {
					isActive: false,
					age: 9,
					state: 'success',
					name: {
						first: 'Сеня',
						last: 'Сидоров'
					}

				}, {
					isActive: false,
					age: 89,
					name: {
						first: 'Василиса',
						last: 'Иванова'
					}

				}, {
					isActive: true,
					age: 38,
					name: {
						first: 'Поля',
						last: 'Петрова'
					}

				}, {
					isActive: false,
					age: 27,
					name: {
						first: 'Сюзана',
						last: 'Сидорова'
					}
				}],
				fields: {
					name: {
						label: 'Имя',
						sortable: true
					},
					age: {
						label: 'Возраст',
						sortable: true
					},
					isActive: {
						label: 'Активный'
					}
				},
				currentPage: 1,
				filter: null
			}
		},
		methods: {
			details(item) {
				alert(JSON.stringify(item));
			}
		}
	}
</script>

<style lang="scss">
	
</style>
