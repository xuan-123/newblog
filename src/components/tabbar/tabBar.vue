<template>
<div>
    <div class="tabbar">
         <slot></slot>
     </div>
</div>
</template>
<script>
export default {
    components:{
       
    }
}
</script>
<style scoped>

  .tabbar{
    display:flex;
    height: 49px;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
  }

</style>