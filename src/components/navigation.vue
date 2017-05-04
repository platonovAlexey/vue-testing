<template>
<div class="header">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">

				<b-navbar toggleable type="inverse" variant="success" class="header__line">
			    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

			    <b-link class="navbar-brand" to="http://www.bn.ru/">
			      <span>BN.ru</span>
			    </b-link>

			    <b-collapse is-nav id="nav_collapse">
			      <b-nav is-nav-bar>
			        <b-nav-item to="http://www.bn.ru/zap_fl_w.phtml">Квартиры</b-nav-item>
			        <b-nav-item to="http://www.bn.ru/zap_rm_w.phtml">Комнаты</b-nav-item>
			        <b-nav-item to="http://www.bn.ru/zap_bd_w.phtml">Новостройки</b-nav-item>
			      </b-nav>
			    </b-collapse>
  			</b-navbar>

			</div>
		</div>
	</div>
</div>
	
		
</template>

<script>


</script>

<style lang="scss">
	.header__line.navbar.navbar-inverse.bg-success.navbar-toggleable-sm{
		background: #781E19 !important;
	}
	.navbar-inverse .navbar-nav .nav-link{
		color: #FFF !important;
	}
	.navbar-brand{
		margin-right: 2rem !important;
	}
</style>
