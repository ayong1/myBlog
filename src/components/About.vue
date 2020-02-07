<template>
  <div class="container">
    <div class="col-md-2 sidebar">
      <ul class="nav nav-pills nav-stacked">
        <li role="presentation" class="active"><router-link to="/about/authorabout">关于我</router-link></li>
        <li role="presentation"><router-link to="/about/skill">技术栈</router-link></li>
        <li role="presentation"><router-link to="/about/authormessage">博主寄语</router-link></li>
        <li role="presentation"><a href="javascript:;" class="disabled">网站建设中...</a> </li>
      </ul>
    </div>
    <div class="col-md-8">
      <router-view></router-view>
    </div>
    <div class="col-md-2 right">
      13213465
    </div>
  </div>
  
</template>

<script>

export default {
  
  name: "about",
  data() {
    return {

    };
  }
};
</script>


<style scoped>
  .container{
    margin-top: 20px;
  }
  .sidebar{
    height: 100vh;
    border-right: 1px solid #ddd;
  }
  .right{
    height: 100vh;
    border-left: 1px solid #ddd;
  }
</style>
