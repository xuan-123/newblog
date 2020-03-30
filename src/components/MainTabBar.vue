<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <img  slot="top" src="@/assets/img/tabbar/home.svg" alt="">
                <img  slot="top-active" src="@/assets/img/tabbar/home_active.svg" alt="">
                <div slot="bottom">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/cate">
                <img  slot="top" src="@/assets/img/tabbar/category.svg" alt="">
                <img  slot="top-active" src="@/assets/img/tabbar/category_active.svg" alt="">
                <div slot="bottom">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/me">
                <img  slot="top" src="@/assets/img/tabbar/profile.svg" alt="">
                <img  slot="top-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
                <div slot="bottom">我的</div>
            </tab-bar-item>     
        </tab-bar>
    </div>
</template>
<script>
import tabBar from '@/components/tabbar/tabBar'
import tabBarItem from '@/components/tabbar/tabBarItem'

    export default{
     components: {
        tabBar,tabBarItem
    }
    }
</script>