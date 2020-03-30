<template>
    <div class="artdetail">
         <nav-bar>
            <div slot="left"  class="left"><van-icon name="arrow-left" size="20"  class="arrow"/></div>
            <div slot="center" >{{art.artname}}</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll" @scrollTopback="scrollTopback" :probe-type='3'>
            <div class="article">
                <h4 class="title" >{{art.artname}} </h4>
                <p class="type">来自 <span>{{art.status==0?'热文':'新文'}}</span></p>
                <p class="time">{{art.time}}</p>
                <img :src="'http://localhost:3000/'+art.artpic" alt="" >
                <div class="content" ref='content' v-html="art.content"></div>
            </div>
        </scroll>
                <back-top @click.native="backTop" v-if="isShow"></back-top>

       
       
    </div>
</template>
<script>
import navBar from '@/components/navbar/navBar'
import {request} from '@/network/request.js'
import Scroll from '@/components/scroll/Scroll'
import backTop from '@/components/content/backTop/BackTop'
import {mixins} from '@/assets/js/mixin.js'
    export default{
        
        mixins:[mixins],
        components:{
        navBar,Scroll,backTop
        },
        data(){
            return{
                art:''
            }
        },
        mounted(){
             //页面挂载完成接口
            this.artnames()
          
        },
        methods:{
   
            //文章详情
            artnames(){  
                request({
                    url:'/getArtDetail',
                    params:{
                       _id : this.$route.query.id
                    }
                }).then(res=>{
                    // this.artname = res.data.artname
                   
                    this.art = res.data
                    console.log(res)

                })
               
            }
        },
        
           
    }
</script>
<style scoped>

.scroll{
     height:calc(100% - 49px) ;
}
.article img{
    width: 100%;
    height: 150px;
    margin-bottom: 7px;
}
.type span{
    color: skyblue;
}
.article .content{
    height: 100%;
    width: 100%;
    font-size: 14px;
   
}
.article .type{
    color: #ccc;
    margin-bottom: 10px;
}
.article .time{
    font-size: 12px;
    margin-bottom: 7px;
}
.article .title{
    margin-bottom: 10px;
}
.article{
    padding: 10px;
}
    .artdetail{
        padding: 49px 0;
        height: 100vh;
    }
    .left{
        margin-left: 10px;
        margin-top: 5px;
    }
    .content p{
        line-height: 16px;
    }
</style>