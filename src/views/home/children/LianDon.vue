<template>
    <div class="liandong">
        <div v-for="(item,index) in titles" :key="item.value"   class="ld"
            @click="itemClick(index)"
        >
            <p :class="{active:index===current}">{{item}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props:['titles'],
        data(){
            return{
                current:0
            }
        },
        methods:{
            itemClick(index){
                this.current = index
                this.$bus.$emit('lianDon',index)
            }
        }

    }
</script>
<style scoped>
.liandong p{
    width: 40px;
    height: 30px;
    margin-left: 50px;
    padding-bottom: 5px;
   
}
.liandong .ld{
    flex-direction:row;
    text-align: center;
    flex:1
}
.active{
        color: #f46;
    border-bottom: 3px solid #f46;
}
    .liandong {
        display: flex;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #f6f6f6;
       
    }

</style>