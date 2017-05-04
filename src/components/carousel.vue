<template>
<div class="carousel__block">
<h1 class="main__title">{{ title }}</h1>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<b-carousel controls indicators :interval="3000" background="grey">

					 <!-- Text slides -->
						<b-carousel-slide height="400px"
														 text="Дорого"
														 img="http://urbanus.ru/upload/c_item_houses/original/2135/2135-13957468731.jpg"
														 class="carousel__text">
						</b-carousel-slide>

						<!-- Slides with custom text -->
						<b-carousel-slide background="grey" height="400px"
															text="Долго"
															img="https://www.metrprice.ru/netcat_files/11/14/top.jpg"
															class="carousel__text">
						</b-carousel-slide>

					 <!-- Slides with image -->
						<b-carousel-slide background="grey" height="400px"
															text="Качественно"
															img="http://www.akadem-park.ru/images/construction_history/2K_4.jpg"
															class="carousel__text">
						</b-carousel-slide>

				</b-carousel>
			</div>
		</div>
	</div>
</div>

	
		
</template>

<script>

	export default {
		data () {
			return {
					title: 'Продажа квартир'
				}
			}
	}
	
</script>

<style lang="scss">
	.main__title{
		font-family: sans-serif;
		color: #781E19; 
		font-weight: 100;
		text-transform: uppercase; 
		font-size: 44px;
		text-align: center;
		margin: 40px 0;

	}

	.carousel__text{
		font-size: 30px;
		color: #781E19;
	}
</style>
