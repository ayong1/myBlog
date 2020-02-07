<template>
  <div id="app">
    <nav class="navbar navbar-default" id="top">
      <div class="container nav-style">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="javascript:;" class="navbar-brand">大勇哥</a>
          <!-- <a class="navbar-brand" href="javascript:;"></a> -->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">首页</router-link> 
            </li>
            <li>
              <router-link to="/picture">相册馆</router-link> 
            </li>
            <li>
              <router-link to="/message">留言</router-link> 
            </li>
            <li>
              <router-link to="/about/authorabout">关于我</router-link> 
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login">登陆</router-link> 
            </li>
            <li>
              <router-link to="/register">注册</router-link> 
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <a href="#top" class="back-to-top" style="position:fixed;right:20px;bottom:20px">
      <span class="glyphicon glyphicon-plane">回到顶部</span>
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
}
.back-to-top{
  font-size: 25px;
}
</style>
