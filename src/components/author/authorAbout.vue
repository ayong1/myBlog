<template>
  <div class="container">
    <h2>
      <span class="glyphicon glyphicon-pencil"></span>关于作者
    </h2>
    <div class="col-md-3 authorPic">
      <img src="../../assets/myself.jpg" alt="我自己" />
    </div>
    <div class="col-md-4 authorInfo">
      <ul class="list-group">
        <li class="list-group-item list-group-item-success">博主姓名：张勇</li>
        <li class="list-group-item list-group-item-info">职业：学生</li>
        <li class="list-group-item list-group-item-info">兴趣爱好：唱歌</li>
        <li class="list-group-item list-group-item-warning">家乡：沧州</li>
        <li class="list-group-item list-group-item-warning"><a href="https://github.com/ayong1">点击进入大勇哥的GitHub</a></li>
        <li class="list-group-item list-group-item-danger">座右铭：代码不是青春的专利,但是,它属于青春。</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'author-about',
  data() {
    return {}
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 1em;
}
.authorPic img {
  width: 100%;
  border-radius: 12px;
}
.container {
  margin-top: 0;
}
</style>