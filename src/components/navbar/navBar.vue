<template>
    <div class="navbar">
        <div class="left" @click="goback"><slot name="left"></slot></div>
        <div class="centers"><slot name="center" ></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
    export default{
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        height: 49px;
        line-height: 49px;
        text-align: center;;
        background-color: #f46;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        color: #fff;
    }
    .left{
        margin: 0;
        float: left;
        overflow: hidden;
        width: 20%;
    }
    .centers{
        position: relative;
        float: left;
        text-align: center;
        width: 60%;
    }
    .right{
        float:left;
        width: 20%;
    }
</style>