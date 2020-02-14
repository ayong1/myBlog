<template>
  <div class="single">
    <div class="container">
      <div class="col-md-5" id="sideBar">
        <!-- 老鼠跑步 -->
        <div class="mouse">
        <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/hamster/hamster.swf?" width="300" height="225"><param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param></object>
        </div>
        <!-- 钟表  -->
        <div class="time">
            <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/pendulumclock/pendulumClockV2.swf?" width="300" height="200"><param name="movie" value="http://cdn.abowman.com/widgets/pendulumclock/pendulumClockV2.swf?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param><param name="bgcolor" value=""/></object>
        </div>
      </div>
      <div class="col-md-7 content">
        <div class="singleArticle">
            <div class="article_title">
                <h2>{{article.article_title}}</h2>
            </div>
            <div class="article_content">
                <p>{{article.article_content}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: '',
      article: {}
    }
  },
  created() {
    // console.log(this.$route.params.article_title);
    this.getJoke()
    this.$http
      .get(
        'http://47.95.228.1/phpcrud/app.php?action=selArticle&article_title=' +
          this.$route.params.article_title
      )
      .then(res => {
        this.article = res.data.article
        // console.log(res.data.article);
        
      })
  },
  mounted() {
    $('#datetimepicker13').datetimepicker({
      inline: true
    })
  },
  methods: {
    getJoke() {
      this.$http.get('https://autumnfish.cn/api/joke/list?num=1').then(data => {
        // console.log(data.data.jokes[0]);
        this.joke = data.data.jokes[0]
        // console.log(this.joke);
      })
    }
  }
}
</script>

<style lang="less" scoped>
.single{
    background: rgba(0, 0, 0, 0.1);
    height: 100vh;
}
#sideBar {
  width: 330px;
  background: #f6f8fa;
  box-shadow: 0 0 12px #aaa;
  margin-top: 10px;
}
.mouse{
    margin-top: 10px;
}
.time{
    margin-top: 2em;
}
.content{
    margin-top: 10px;
    margin-left: 15px;
    border: 2px dotted #ccc;
    font-family: sans-serif;
    min-height: 470px;
    max-height: 470px;
    overflow-y: scroll;
}
.article_title{
    text-align: center;
}
.article_content{
    text-indent: 2em;
    font-size: 18px;
    margin-top: 20px;
}
.content::-webkit-scrollbar {/*滚动条整体样式*/

        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/

        height: 1px;

    }

.content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #535353;

    }

.content::-webkit-scrollbar-track {/*滚动条里面轨道*/

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
</style>