export const mixins ={
    data(){
        return {
            isShow: false,
        }
    },
    methods: {
        //滑动到某一处显示回到顶部按钮 
        scrollTopback(position) {
            if ((position.y) < -400) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        },
        //回到顶部
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        },
       
    },
}