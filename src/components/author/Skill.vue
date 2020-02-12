<template>
  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <h2><span class="glyphicon glyphicon-book"></span> 本站所用到的知识</h2>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >博客有话说</a>
        </h4>
      </div>
      <div
        id="collapseOne"
        class="panel-collapse collapse in"
        role="tabpanel"
        aria-labelledby="headingOne"
      >
        <div
          class="panel-body"
        >本站前台是基于vue开发，用到了Bootstrap，主要原因是Bootstrap简洁、直观、强悍，让我的开发更迅速、简单。后台是基于php开发,服务用的是apache,服务器是阿里云的轻量应用服务器。本站源码我已经上传到<a href="https://github.com/ayong1/myBlog">我的GitHub</a> 
        <span class="glyphicon glyphicon-user">如有问题可以咨询QQ：1296545486</span></div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingTwo">
        <h4 class="panel-title">
          <a
            class="collapsed"
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >Bootstrap</a>
        </h4>
      </div>
      <div
        id="collapseTwo"
        class="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby="headingTwo"
      >
        <div
          class="panel-body"
        >Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。
        <span class="glyphicon glyphicon-list-alt"></span> <a href="https://v3.bootcss.com/">立即学习</a></div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
          <a
            class="collapsed"
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >vue-router</a>
        </h4>
      </div>
      <div
        id="collapseThree"
        class="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby="headingThree"
      >
        <div
          class="panel-body"
        >Vue Router 是 <a href="https://cn.vuejs.org/">Vue.js</a> 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingFour">
        <h4 class="panel-title">
          <a
            class="collapsed"
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >Axios</a>
        </h4>
      </div>
      <div
        id="collapseFour"
        class="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby="headingFour"
      >
        <div
          class="panel-body"
        >Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。<br>Github开源地址：<a href="https://github.com/axios/axios">https://github.com/axios/axios</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {};
  }
};
</script>

<style scoped>
    h2{
        margin-bottom: 1em;
    }
    .panel-heading{
        text-align: center;
    }
    a{
        text-decoration: none;  
    }
    .panel-body{
        font-size: 18px;
        line-height: 2em;
    }
    .panel-body span{
        margin-left: 1em;
    }
</style>