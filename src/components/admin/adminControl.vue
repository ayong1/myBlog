<template>
    <div id="adminControl">
        <div class="container">
            <div class="col-md-3">
                <ul class="nav nav-pills nav-stacked">
                <li role="presentation" class="active"><router-link to="/admincontrol">关于我</router-link></li>
                <li role="presentation"><a href="#">添加随笔</a></li>
                <li role="presentation"><a href="#">修改</a></li>
            </ul>
            </div>
            <div class="col-md-7"></div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {
            
        }
    },
    beforeCreate() {
        const token = localStorage.getItem('token');
        if(!token){
            this.$router.push({
                path:'/admin'
            })
        }
    },
}
</script>

<style scoped>
    .container{
        padding: 2.5em;
    }
</style>