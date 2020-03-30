<template>
   <div class="artlistbox">
        <!-- <div v-for="(item,index) in result" :key="index">
            <div>{{item.artname}}</div>
        </div> -->
        <div class="artlist" v-for="(item,index) in result||hot" :key="index" @click="goartDetail(item._id)">
            <div class="top">
                <p class="title">{{item.artname}}</p>
            </div>
            <div class="mid">
                <div class="left">
                    <div class="status">{{item.status==1?'热文':'新文'}}</div>
                    <div class="content" v-html="item.content"></div>
                </div>
                <div class="right">
                    <img :src="'http://localhost:3000/'+item.artpic" alt="">
                </div>
            </div>
            <div class="bot">
                 <div class="time">{{item.time}}</div>
                 </div>
        </div>

    </div>
</template>
<script>
    export default{
        props:['result','hot'],
        methods:{
            goartDetail(id){
        this.$router.push({path:'/artDetail',query:{id}})
    },
        }
    }
</script>
<style >
    *{
        padding: 0;
        margin: 0;
    }
    .title{
        font-size: 18px;
    }
    .artlistbox{
        background-color: #f6f6f6;
    }
    .artlistbox .status{
        color: skyblue;
    }
   .artlistbox h3{
       margin:0 0 10px 0;
    }
   .artlistbox .artlist{
        margin-bottom: 5px;
        padding: 10px 10px;
        background-color: #fff;

    }
   .artlistbox .content{

        height: 40px;
        word-break:break-all;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
   .artlistbox .left{
        font-size: 14px;
        height: 65px;
        width: 65%;
        float: left;
        margin-right: 10px;
    }
   .artlistbox .right{
        width: 30%;
        float: left;
    }
   .artlistbox .right img{
        width: 100px;
        height: 65px;
    }
   .artlistbox .time{
        color: #666;
        font-size: 14px;
    }

</style>