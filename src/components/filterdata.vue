<template>
		<p> {{ reversedmessage }} </p>
</template>

<script>

	export default {
		data () {
			return{
				greeting: 'hello',
				messagenorm: 'как дела'
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
</style>
