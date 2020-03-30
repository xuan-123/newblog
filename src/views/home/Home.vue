<template>
    <div class="home">
         <nav-bar>
             <div slot="left"></div>
             <div slot="center" class="center"><span>首页</span></div>
         </nav-bar>
         <!-- 滚动 -->
         <scroll class="scroll" ref="scroll" @scrollTopback="scrollTopback" :probe-type='3'>
            <swiper></swiper>
            <swiper-type :arr="types"></swiper-type>
            <lian-don :titles="['热文','新文']" @lianDon="lianDons"></lian-don>
            <hot :lian = 'data'></hot>
         </scroll>
            <back-top @click.native="backTop" v-if="isShow"></back-top>
          <main-tab-bar></main-tab-bar>
    </div>

</template>
<script>
import {request} from '@/network/request'
 import  swiper  from '../me/children/swiper'
 import  swiperType  from '../me/children/swiperType'
 import MainTabBar from '@/components/MainTabBar'
import navBar from '@/components/navbar/navBar'
import LianDon from '../home/children/LianDon'
import Hot from '../home/children/Hot'
import Scroll from '@/components/scroll/Scroll'
import backTop from '@/components/content/backTop/BackTop'
import {mixins} from '@/assets/js/mixin.js'
export default {
    name:'home',
    //混入回到顶部模块
    mixins:[mixins],
    data(){
        return{
            result:{},
            arr:[],
            types:[],
            lianDon:'0',
            data:0,
            saveY:0
        }
    },
    components:{
       backTop,Scroll,swiper,swiperType,MainTabBar,navBar,Hot,LianDon
    },
    mounted(){ 
        
    },
    methods:{
       //点击的新文还是热文
        lianDons(data) {
            this.data = data
        }
    },
    activated(){
 
        this.$refs.scroll.scrollTo(0,this.saveY,0) //x,y，时间
        //回到页面再刷新一次，避免不必要的错误
    },
    //记录页面离开的高度
 deactivated(){
this.saveY = this.$refs.scroll.scroll.y
       console.log(this.saveY)
    },
created(){
     
    //获取所有分类数据
    request({
        url:'/getTypes',
    }).then(res=>{
        console.log(res)
         //分类轮播图的分页
        let arr = res.data
        let types=[]
        let len = Math.ceil(arr.length)/8
        for(let i =0;i<len;i++){
            if(i>=len-1){
                types.push(arr)
            }else{
                let brr = arr.splice(0,8)
                types.push(brr)
            }
        }
        console.log(types)
        this.types = types
    })
},

}
</script>
<style scoped>

    .home{
        padding-bottom: 49px;
        padding-top: 49px;
        height: 100vh;
    }
    .scroll{
       height:calc(100% - 98px) ;
    }
    .center{
        color: #fff;
    }
    .center span{
        margin-left: 130px;
    }
</style>