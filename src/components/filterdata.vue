<template>
		<!-- <p> {{ reversedmessage }} </p> -->

		<div>
			<p class="message__text"> {{ reversedmessage }} </p>
			<hr>
			<ul class="demo">
				<li v-for="value in object">
					{{ value }}
				</li>
			</ul>
			<hr>
			<button v-on:click="show = !show">
				Переключить
			</button>
			<transition name="fade">
				<p v-if="show" class="transition__text">hello</p>
			</transition>
		</div>
</template>

<script>

	export default {
		data () {
			return{
				greeting: 'hello',
				messagenorm: 'хохохо',
				show: true,
					object:{
					firstName: 'Иван',
					lastName: 'Петров',
					age: 30
					}
			}
		},
		computed: {
			reversedmessage: function(){
					return this.messagenorm.split('').reverse().join('')
				}
		}
	}

</script>

<style lang="scss">
	p{
		font-family: sans-serif;
		color: black; 
		font-weight: 100; 
		font-size: 22px;
		text-align: center;
	}
	.message__text{
		color: yellow;
	}

	.demo{
		list-style: none;
		li{
			color: green;
			font-size: 22px;
		}
	}

	.transition__text{
		text-align: left;
		color: tomato;
	}

	.fade-enter-active, .fade-leave-active {
  	transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
	  opacity: 0
	}
</style>
