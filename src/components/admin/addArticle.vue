<template>
  <div>
    <span class="addArticle-title">添加文章</span>
    <el-card>
      <el-input type="text" placeholder="标题" v-model="article.article_title" maxlength="30" show-word-limit></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="article.article_content"
        maxlength="300"
        show-word-limit
        :rows="15"
      ></el-input>
      <div style="margin: 20px 0;"></div>
      <el-button type="info" :plain="true" @click="add_success">发布</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  methods: {
    add_success() {
      this.$http.post("http://localhost/phpcrud/app.php?action=addArticle",this.article).then((res)=>{
        this.$message({
          message: '博客发布成功',
          type: 'success'
        })
        this.$router.push('/Welcome');
      })
      
    }
  }
}
</script>

<style lang="less" scoped>
.addArticle-title {
  font-weight: bold;
  font-size: 18px;
}
.el-card {
  margin-top: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
.el-button:hover {
  background: #67c23a;
}
</style>