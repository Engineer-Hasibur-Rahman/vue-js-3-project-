<template>

  <div>


      <div class="wrapper">
	<!-- <div id="loader"></div> -->
	
    <!-- main header start-->   
    <page-header></page-header> 
    <!-- main header end-->
  
    <!-- main Sideber start-->
	<sideber-nav> </sideber-Nav>
    <!-- main Sideber end-->


  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
	  <div class="container-full">
		<!-- Main content -->
		<section class="content">
			<div class="row">
				<div class="col-xl-12 col-12">

						<h2>Welcome back, Vue js 3 new project start 2022 by Hasibur Rahman </h2>
													
				</div>
			
       <router-view/>
				
			</div>
		</section>
		<!-- /.content -->
	  </div>
  </div>

<!-- /.content-wrapper -->
  <footer class="main-footer mt-200">
 
	  &copy; 2021 <a href="https://www.multipurposethemes.com/">Multipurpose Themes</a>. All Rights Reserved.
  </footer>

</div>
<!-- ./wrapper -->
	

		

 </div>


</template>

<script>
import pageHeader from '@/components/backend/pageHeader.vue'
import SideberNav from '@/components/backend/sideberNav.vue'
export default {
  components: { pageHeader, SideberNav },

}
</script>

<style>

</style>