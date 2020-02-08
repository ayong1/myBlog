<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <span>博客后台管理系统</span>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#334744" text-color="#fff">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>添加文章</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>添加文章</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
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
</style>