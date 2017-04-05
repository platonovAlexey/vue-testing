<template>
		<p>{{ reversedMessage }}</p>
</template>

<script>

	export default {
		data () {
			return {
					greeting: 'hello',
					messagenorm: 'фильтр задом на перёд'
				}
			},
		reversedMessage () {
			return function(){
				this.messagenorm.split('').reverse().join('')
			}
		}
	}

// reversedMessage написать как объект

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
