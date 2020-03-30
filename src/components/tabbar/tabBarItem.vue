<template>
    <div class='tabbaritem' @click="clickItem">
        <div v-if="!isShow"><slot name="top"></slot></div>
        <div v-else><slot name="top-active"></slot></div>
        <div :class="{active: isShow}"><slot name="bottom"></slot></div>
    </div>
</template>

<script>
export default {
    props:{
        path:String
    },
    data(){
        return{
           
        }
    },
    computed:{
        isShow(){
            //判断当前点击的这个组件和传进来的路径是否相同
         return this.$route.path.indexOf(this.path) !==-1
        }
    },
    methods:{
        clickItem(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
    .active{
        color: #f46;
    }
    .tabbaritem{
        flex:1;
        text-align: center;
        font-size: 14px; 
    }
    .tabbaritem img{
        width: 20px;
        height: 20px;
         vertical-align: middle;
         margin-top: 5px;
    }
</style>