<template>
  <div>
    <div class="welcome_title">文章列表</div>
    <el-card>
      <el-row>
        <el-col :span="10">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="大勇哥专属搜索框"
              aria-describedby="basic-addon2"
              v-model="filterInput"
            />
            <span class="input-group-addon">
              <i class="iconfont icon-search"></i>
            </span>
          </div>
        </el-col>
      </el-row>
      <!-- 文章列表区域 -->
      <el-table :data="filterBy(filterInput)" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="article_date" label="日期"></el-table-column>
        <el-table-column prop="article_title" label="标题"></el-table-column>
        <el-table-column label="操作">
<<<<<<< HEAD
          <el-tooltip effect="dark" content="文章编辑" placement="top-start" :enterable="false">
            <el-button size="mini" @click="handleEdit">编辑</el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="文章删除" placement="right" :enterable="false">
            <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
          </el-tooltip>
=======
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="文章修改" placement="top-start" :enterable="false">
              <el-button size="mini"><router-link :to="'/edit/'+scope.row.article_title">修改</router-link></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="文章删除" placement="right" :enterable="false">
              <el-button size="mini" type="danger" @click="handleDelete(scope.row.article_title)">删除</el-button>
            </el-tooltip>
          </template>
>>>>>>> dev-adminControl
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
<<<<<<< HEAD
      filterInput:''
    }
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    //文章匹配搜索
    filterBy(search){
      return this.articleList.filter(data=>{
        return data.article_title.match(search);
=======
      filterInput: ''
    }
  },
  inject:['reload'], //注入reload方法
  methods: {
    //删除文章
    handleDelete(article_title) {
      this.$http
        .get(
          'http://localhost/phpcrud/app.php?action=delete&article_title=' +
            article_title
        )
        .then(res => {
          this.$message({ message: '文章删除成功', type: 'success' })
          this.reload() //直接调用
        })
    },
    //文章匹配搜索
    filterBy(search) {
      return this.articleList.filter(data => {
        return data.article_title.match(search)
>>>>>>> dev-adminControl
      })
    }
  },
  created() {
    this.$http.get('http://localhost/phpcrud/app.php?action=read').then(res => {
      // console.log(res.data.articles);
      this.articleList = res.data.articles
    })
<<<<<<< HEAD
  }
=======
  },
  // updated() {
  //   this.$http.get('http://localhost/phpcrud/app.php?action=read').then(res => {
  //     // console.log(res.data.articles);
  //     this.articleList = res.data.articles
  //   })
  // }
>>>>>>> dev-adminControl
}
</script>

<style lang="less" scoped>
.welcome_title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
.el-table {
  margin-top: 15px;
}
.el-row {
  display: flex;
  justify-content: center;
}
input {
  text-indent: 0.5em;
}
<<<<<<< HEAD
=======
a:hover{
  text-decoration: none;
}
>>>>>>> dev-adminControl
</style>