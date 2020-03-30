<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default{
    props:{
         probeType:{
            type:Number,
            default:0
            },
    },
        data(){
            return{
                scroll:null
            }
        },
        methods:{
            scrollTo(x,y,time=300) {
            this.scroll && this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            }
    },
     mounted(){
     //创建BScroll对象
       this.scroll = new BScroll(this.$refs.wrapper,{
           click:true,
           probeType:this.probeType,//哪个组件需要监听就传进值
           pullUpLoad:true
        })
        //监听滚动的距离
        this.scroll.on('scroll',(position)=>{
            this.$emit('scrollTopback',position)
        })
  
    //监听上拉事件
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
    })
    }

    }
    
</script>

<style scoped>

</style>