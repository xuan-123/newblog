<template>

   <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide">
            <img src="@/assets/img/01(1).jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <img src="@/assets/img/01(2).jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <img src="@/assets/img/01(3).jpg" alt="">
        </swiper-slide>
        <p class="swiper-pagination" slot="pagination"></p>
    </swiper>

</template>
<script>

import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
	return {
         swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
                
               
            },
    }
},
components:{
    swiper, swiperSlide
}



}
</script>
<style scoped>
.swiper-slide img {
    width: 100%;
    height: 160px;
}
.swiper-slide {
  width: 100%;
  height: 160px;
  line-height:160px;
  font-size: 50px;
  text-align: center;
  background-color: rosybrown;
}
</style>