<template>
  <div>

    <div v-if="check_auth">
    

      <dashboard></dashboard>

    </div>

    <div v-else >

        <!-- <h1 style="margin-left: 300px;font-size:30px;color:red">  User Login Not Success</h1>
       <div id="nav">
         <router-link :to="{ path: 'signup' }" style="color:green" >signup</router-link> |
         <router-link :to="{ path: 'login' }" style="color:blue" >Login</router-link> |
         <router-link :to="{ path: 'portfolio' }" >Portfolio</router-link>
      </div> -->

        <router-view/>
        
    </div>
  
  </div>
</template>


<script>
import dashboard from './views/backend/dashboard.vue';

export default {
  components: { dashboard },
   data: function(){
     return {
       check_auth: true,
     }
   }, // end unction
   created: function(){
     if (this.check_auth) {
       this.$router.replace({ name: 'admin' });

     } else {
       this.$router.replace({ name: 'login' });
     }
   }

}; // end main 
</script>