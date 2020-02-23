<template>
    <div>
    <div class="welcome_title">留言列表</div>
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
      <!-- 留言列表区域 -->
      <el-table :data="filterBy(filterInput)" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="message_date" label="日期"></el-table-column>
        <el-table-column prop="message_username" label="用户"></el-table-column>
        <el-table-column prop="message_content" label="留言内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="留言删除" placement="right" :enterable="false">
              <el-button size="mini" type="danger" @click="handleDelete(scope.row.message_id)">删除</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageList: [],
      filterInput:''
    }
  },
  inject:['reload'], //注入reload方法
  methods: {
    //删除留言
    handleDelete(message_id) {
      console.log(message_id);
      
      this.$http
        .get(
          'http://dayongge.xyz/phpcrud/app.php?action=deleteMessage&message_id=' +
            message_id
        )
        .then(res => {
          this.$message({ message: '留言删除成功', type: 'success' })
          this.reload() //直接调用
        })
    },
    //留言匹配搜索
    filterBy(search) {
      return this.messageList.filter(data => {
        return data.message_username.match(search)
      })
    }
  },
  created() {
    this.$http.get('http://dayongge.xyz/phpcrud/app.php?action=readMessages').then(res => {
      console.log(res.data.messages);
      this.messageList = res.data.messages;
    })
  }
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
a:hover{
  text-decoration: none;
}
</style>