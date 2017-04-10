<template>
		<p class="text"> {{ reversedmessage }} </p>
</template>

<script>

	export default {
		data () {
			return{
				greeting: 'hello',
				messagenorm: 'работает'
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
	.text{
		font-family: sans-serif;
		color: black; 
		font-weight: 100; 
		font-size: 22px;
		text-align: center;
	}
</style>
