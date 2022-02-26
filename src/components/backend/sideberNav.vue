<template>
    <aside class="main-sidebar">
    <!-- sidebar-->
    <section class="sidebar position-relative">	
	  	<div class="multinav">
		  <div class="multinav-scroll" style="height: 100%;">	
			  <!-- sidebar menu-->
			  <ul class="sidebar-menu" data-widget="tree">	


			<li class="treeview">
				  <a href="#">
					<i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
					<span>Dashboard</span>
					<span class="pull-right-container">
					  <i class="fa fa-angle-right pull-right"></i>
					</span>
				  </a>
				  <ul class="treeview-menu">
					<li><a href="index.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Test</a></li>
				
				  </ul>
				</li>


			  </ul>
			  		 <div id="nav">
         <router-link :to="{ path: 'admin' }" style="color:green" >Admin</router-link> |
         <router-link :to="{ path: 'management' }" style="color:blue" >Management</router-link> |
         <router-link :to="{ path: 'student' }" >Student</router-link>
      </div>
	  
		  </div>
		</div>
    </section>

  </aside>
</template>

<script>
export default {
  name: 'sideber-Nav',
}
</script>

<style>

</style>