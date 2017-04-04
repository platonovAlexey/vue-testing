<template>
		<h1>{{ message }}</h1>
</template>

<script>

	module.exports = {
		data:function () {
			return {
				message: 'Hello world'
			}
		}
	}
	
</script>

<style lang="scss">
	h1{
		font-family: sans-serif;
		color: red; 
		font-weight: bold; 
		font-size: 44px;
		text-align: center;

	}
</style>
