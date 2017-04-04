<template>
		<p>{{ message }}</p>
</template>

<script>

	module.exports = {
		data:function () {
			return {
				message: 'Нет, не Hello world'
			}
		}
	}
	
</script>

<style lang="scss">
	p{
		font-family: sans-serif;
		color: orange; 
		font-weight: bold; 
		font-size: 22px;
		text-align: center;

	}
</style>
