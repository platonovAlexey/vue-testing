<template>
		<p> {{ reversedmessage }} </p>
</template>

<script>

	// export default {
	// 	data () {
	// 		return {
	// 				greeting: 'hello',
	// 				messagenorm: 'фильтр задом на перёд'
	// 			}
	// 		},
	// 	reversedMessage () {
	// 		return {
	// 			this.messagenorm.split('').reverse().join('')
	// 		}
	// 	}
	// }

	// export default {
	// 	data () {
	// 		return{
	// 			greeting: 'hello',
	// 			messagenorm: 'перёд'
	// 		}
	// 	},
	// 	methods: {
	// 			reversedMessage: function(){
	// 				return this.messagenorm.split('').reverse().join('')
					
	// 			}
	// 	}
	// }

	export default {
		data () {
			return{
				greeting: 'hello',
				messagenorm: 'привет'
			}
		},
		computed () {
			return{
				reversedmessage: function () {
					return this.messagenorm.split('').reverse().join('')
				}
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
</style>
