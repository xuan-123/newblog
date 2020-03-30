<template>
  <div id="app" >
     <keep-alive include="Home">
        <router-view/>
     </keep-alive>
  </div>
</template>

<script>


import {request} from '@/network/request'
export default {
  
  name: 'App',
  components:{
 
  },

}
</script>

<style scoped>
  @import './assets/css/base.css';

  

</style>
