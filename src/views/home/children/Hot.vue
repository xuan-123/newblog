<template>
    <div>
        <artl-list :result="hot"></artl-list>
        

    </div>
</template>
<script>
    import artlList from '@/components/common/artlList'
    import {request} from '@/network/request.js'
    export default{   
        props:['lian'],
        data(){
            return{
                hot:[],
               lianDon:0
            }
        },
        components:{
            artlList
        },
        mounted(){
            //需要提前行请求默认要显示的接口数据 ，要不总线请求过来的首次加载不会有内容
            request({
                url: '/getHot'    
                }).then(res=>{
                    console.log(res)
                    this.hot = res.data 
                })
        //事件总线动态修改接口路由
        this.$bus.$on('lianDon',(index)=>{
            //通过传来的index决定要用到哪个接口的数据
            this.lianDon = index
            request({
                url: this.lianDon==0?'/getHot':'/getNew'     
                }).then(res=>{
                    console.log(res)
                    this.hot = res.data 
                })
            }) 

        }}
    
</script>
<style scoped>
    .hot{
        border-left: 5px solid red;
        padding:5px 0 0  10px;
        border-bottom: 1px solid #f6f6f6;
    }
</style>
