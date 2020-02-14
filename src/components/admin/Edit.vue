<template>
  <div>
    <span class="edit-title">编辑文章</span>
    <el-card>
      <el-input
        type="text"
        placeholder="标题"
        v-model="article.article_title"
        maxlength="30"
        show-word-limit
      ></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="article.article_content"
        show-word-limit
        :rows="15"
      ></el-input>
      <div style="margin: 20px 0;"></div>
      <el-button type="info" :plain="true" @click="edit_success">保存修改</el-button>
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
    edit_success() {
      this.$http
        .post(
          'http://47.95.228.1/phpcrud/app.php?action=editArticle',
          this.article
        )
        .then(res => {
          // console.log(res);
          
          this.$message({ message: '文章修改成功', type: 'success' }
          )
          this.$router.push('/welcome')
        })
    }
  },
  created() {
      this.$http.get('http://47.95.228.1/phpcrud/app.php?action=edit&article_id='+this.$route.query.article_id).then(res=>{
          this.article = res.data.article
          // console.log(this.article);
      })
      
  },
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