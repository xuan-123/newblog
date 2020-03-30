<template>
    <div>
        <nav-bar></nav-bar>
        <main-tab-bar></main-tab-bar>
    </div>
</template>
<script>
    import MainTabBar from '@/components/MainTabBar'
import navBar from '@/components/navbar/navBar'
export default {
     components:{
        MainTabBar,navBar
    },
}
</script>
<style scoped>

</style>