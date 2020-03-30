<template>
   <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in arr" :key="index">
            <div class="swiper-item" v-for="(val,ind) in item" :key="ind">
                <div class="swiperdiv" @click="typeClicke(val._id)">
                   <img class="typepic" :src="'http://localhost:3000/'+val.typepic" alt="">
                   <div class="typename">{{val.typename}}</div>   
                </div>
            </div>
        </swiper-slide>
    </swiper>

</template>
<script>

    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {request} from '@/network/request.js'
export default {
    components:{
    swiper, swiperSlide
},
    props:['arr'],
    data(){
        return {
            swiperOption:{
                    //滑动速度
                    speed:500,
                    // delay:1000
                },
        }
},
methods:{
    typeClicke(id){
        this.$router.push({path:'/detailCate', query:{id}})
    }
}



}
</script>
<style scoped>

.swiper-slide {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  width: 100%;
  height: 160px;
  text-align: center;
}
.swiper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
   
}
.span{
    display: inline;
}
.swiper-item{
    width: 80px;
     height: 80px;
}
.swiper-item img{
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.swiperdiv{
   font-size: 14px;
    width: 80px;
    height: 80px;
    color: #000;
}
.swiperdiv .typepic{
    margin-left: 15px;
    margin-top: 5px;
}
</style>