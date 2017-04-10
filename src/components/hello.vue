<template>

	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h1>{{ message }}</h1>
			</div>
		</div>
	</div>
		
</template>

<script>

	export default {
		data () {
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
