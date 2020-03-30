<template>
    <div class="cateDetail">
        
        <nav-bar>
            <div slot="left"  class="left"><van-icon name="arrow-left" size="20"  class="arrow"/></div>
            <div slot="center" >{{typename}}</div>
            <div slot="right" class="el-icon-more" is-link @click="showPopup"></div>
        </nav-bar>
        <van-popup v-model="show"   position="top" :style="{ height: '40%' }">  
            <ul class="ulType">
                <li v-for="item in result" :key="item.value" @click="conlecttype(item._id)">{{item.artname}}</li>
            </ul>
        </van-popup>
        <scroll class="scroll">   
            <art-list :hot="result"></art-list>
        </scroll>
        
    </div>
</template>
<script>

import navBar from '@/components/navbar/navBar'
import {request} from '@/network/request.js'
import artList from '@/components/common/artlList'
import Scroll from '@/components/scroll/Scroll'

export default {
     components:{
        navBar,artList,Scroll
    },
    data(){
        return{
            result:[],
            show: false,
            columns: [],
            typeid:'',
            typename:''
        }
    },
    mounted(){
      this.typeDetail()
      this.typeAll()
      this.oneType()
    },
    methods:{
        //点击出现分类选择
    showPopup() {
      this.show = true;
    },
    conlecttype(id){
        this.$router.push({path:'/artDetail',query:{id}})
    },
    //获取对应分类下的所有文章
    typeDetail(){
     this.typeid =this.$route.query.id
       request({
           url:'/getTypesArt',
           params:{
               typeid:this.typeid
           }
       }).then(res=>{
        console.log(res)
           this.result = res.data  
       })
    },
    //获取所有分类
    typeAll(){
        request({
            url:'getTypes'
        }).then(res=>{
            // console.log(res.data)
            //遍历所有分类并将分类给了columns
           this.columns = res.data  
        })
    },
    //获取单个分类详情
    oneType(){
        const typeid =this.$route.query.id
        request({
            url:'/getOneType',
            params:{
               _id : typeid
            }
        }).then(res=>{
            console.log(res)
           this.typename = res.data.typename
        })
    }
    }
}
</script>
<style scoped>

    .ulType li{
        margin-left: 20px;
        height:40px ;
        line-height: 40px;
    }
    .left{
        margin-left: 10px;
        margin-top: 5px;
    }
    .cateDetail{
        padding: 49px 0 0;
        height: 100vh;
    }
    .scroll{
         height:calc(100% - 98px) ;
    }
    
</style>