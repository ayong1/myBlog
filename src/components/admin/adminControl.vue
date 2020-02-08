<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <span>博客后台管理系统</span>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <el-aside :width="!isCollapse ? '46px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">
          |||
        </div>
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#334744" text-color="#fff" unique-opened :collapse="!isCollapse" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-component"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item :index="'/'+'welcome'">
              <template slot="title">
                <i class="iconfont icon-documentation"></i>
                <span>文章总览</span>
              </template>
            </el-menu-item>
            <el-menu-item :index="'/'+'addArticle'">
              <template slot="title">
                <i class="iconfont icon-edit"></i>
                <span>添加文章</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      isCollapse:'true'
    }
  },
  beforeCreate() {
    const token = sessionStorage.getItem('token')
    if (!token) {
      this.$router.push({
        path: '/admin'
      })
    }
  },
  methods: {
    logout(){
      sessionStorage.clear();
      this.$router.push('/admin');
    },
    //菜单栏的折叠和展开
    toggleCollapse(){
      this.isCollapse = !this.isCollapse;
    }
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background: #373d41;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 30px;
    font-size: 30px;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background: #eaedf1;
}
.iconfont{
  margin-right: 10px;
}
.el-menu{
  border: 0;
}
.toggle-button{
  background: #4a5064;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: #fff;
}
</style>