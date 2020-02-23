<template>
  <div class="content">
    <div class="container message-panel">
      <div class="title">
        <h1>
          <span>欢迎来到大勇哥留言板</span>
        </h1>
      </div>
      <div class="message-main">
        <div class="penguin">
          <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/penguins/penguins.swf?" width="300" height="200"><param name="movie" value="http://cdn.abowman.com/widgets/penguins/penguins.swf?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param><param name="scale" value="noscale"/><param name="salign" value="tl"/></object>
        </div>
        <div class="box">
          <h3>稍微说点什么吧，给个面子</h3>
          <textarea class="form-control" rows="3" v-model.trim="content" @input="descInput"></textarea>
          <div class="message-btn">
            <span>还能输入<span class="wordStyle">{{wordCount}} </span>个字</span>
            <button class="btn btn-success" @click="submitMessage">发布</button>
          </div>
          <hr />
          <div class="message-list">
            <h3>
              <span>留言榜</span>
            </h3>
            <ul>
              <li v-for="(item, index) in messageList" :key="index">
                <div class="userPic">
                  <img src="../assets/messageImg.jpg" alt />
                </div>
                <div class="userContent">
                  <div class="userName">
                    <a href="#">{{item.message_username}}:</a>
                  </div>
                  <div class="msgInfo">{{item.message_content}}</div>
                  <div class="times">
                    <span>{{item.message_date}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
        content:'',
        wordCount:'140',
        isSubmit:true,
        messageList:[]
    }
  },
  beforeCreate() {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      this.$message({
        message: '请先登录你的账号',
        type: 'warning',
        offset:60
      })
      this.$router.push({
        path: '/login'
      })
    }
    this.$http.get('http://dayongge.xyz/phpcrud/app.php?action=readMessages').then(res => {
      // console.log(res.data.messages);
      this.messageList = res.data.messages;
    })
  },
  inject:['reload'],
  methods: {
    descInput(){
      let txtVal = this.content.length;
      this.wordCount = 140 - txtVal;
      if(this.wordCount >= 0 && this.wordCount != 140){
        this.isSubmit = true;
        // console.log('123');
      }else{
        this.isSubmit = false;
        // console.log('456');
      }
    },
    submitMessage(){
      if(this.isSubmit){
        let userMessage = {};
        userMessage.username = window.sessionStorage.getItem('username');
        userMessage.content = this.content;
        // console.log(userMessage);
        this.$http.post('http://dayongge.xyz/phpcrud/app.php?action=addMessage',userMessage).then(res=>{
          this.$message({
            message:'留言发布成功',
            type:'success',
            offset:60
          })
          this.reload();
        })
      }else{
        this.$message({
          message:'字数超过了最大限制，请删除一些呦！',
          type:'error',
          offset:60
        })
      }
    }
  }
}
</script>


<style scoped>
.wordStyle{
  font-size: 30px;
  font-family: sans-serif;
  font-style:italic;
}
h1 {
  margin-top: 30px;
  margin-bottom: 20px;
}
.content {
  background: #a7ab8c;
  /* height: 100vh; */
}
.message-panel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.message-main {
  width: 100%;
  display: flex;
  justify-content: center;
  /* background: #fff; */
}
.message-main .box {
  border-radius: 12px;
  padding: 8px 20px;
  min-width: 500px;
  max-width: 500px;
  background: #fff;
  margin-bottom: 80px;
}
.message-main .box .message-btn {
  margin-top: 10px;
  color: #999;
  font-size: 18px;
}
.message-list {
  margin-top: 1em;
}
ul {
  list-style-type: none;
}
li {
  width: 100%;
  border-bottom: 1px dashed #d8d8d8;
  padding: 10px 0;
  background: #fff;
  overflow: hidden;
  display: flex;
}
.userPic {
  display: inline-block;
  margin-left: 10px;
  border-radius: 3px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 3px;
  display: inline;
}
.userContent {
  font-size: 14px;
  margin-left: 10px;
  font-family: arial;
  word-wrap: break-word;
  display: flex;
  flex-wrap: wrap;
}
.userName {
  padding-right: 5px;
  height: 16px;
  margin-bottom: 10px;
}
.userName a {
  color: #2b4a78;
}
.times {
  margin-top: 10px;
  width: 100%;
  color: #889db6;
}
.penguin{
  border-top-left-radius:2em;
  border-top-right-radius:2em;
  overflow: hidden;
  margin-right: 12px;
}
</style>
