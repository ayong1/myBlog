<template>
  <div class="login">
    <video src="static/media/login-video.mp4" loop autoplay></video>
    <div class="container content">
      <div class="col-md-6 login-img">
        <img src="../assets/login-logo.jpg" class="login-logo" alt="login-logo" />
      </div>
      <div class="col-md-6 login-info">
        <div class="login-form">
          <label class="user-title">用户登录</label>
          <form @submit.prevent="userLogin">
            <div class="form-group">
              <p class="glyphicon glyphicon-user"></p>
              <input
                type="text"
                class="form-control username"
                placeholder="用户名"
                v-model="user.username"
              />
            </div>
            <div class="form-group">
              <p class="glyphicon glyphicon-lock"></p>
              <input
                type="password"
                class="form-control password"
                placeholder="密码"
                v-model="user.password"
              />
            </div>
            <button type="submit" class="btn form-control">登录</button>
            <div class="form-bottom">
              <router-link to="/register">注册新账号</router-link>
              <router-link to>意见反馈</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    userLogin() {
      // console.log(this.user.username+' '+this.user.password);
      this.$http
        .post('http://localhost/phpcrud/app.php?action=userLogin', {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=uft-8'
          },
          username: this.user.username,
          password: this.user.password
        })
        .then(data => {
          // console.log(data.data.userInfo)
          let username = data.data.userInfo.username
          let token = data.data.userInfo.token
          window.sessionStorage.setItem('username',username);
          window.sessionStorage.setItem('token',token);
          this.$message({
            message: '登录成功',
            type: 'success',
            offset: 60
          })
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            //设置延迟执行
            this.$router.push({
              path: '/'
            })
          }, 1500)
        })
    }
  }
}
</script>


<style scoped>
@media screen and (min-width: 1366px) {
  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
  }
  .content {
    margin: 12em auto;
  }
}
@media screen and (max-width: 1366px) {
  video {
    position: fixed;
    left: -10em;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
  }
  .content {
    margin: 5em auto;
  }
}
p {
  position: relative;
  top: 33px;
  left: 5px;
}
input {
  text-indent: 1em;
}
.login-img {
  display: flex;
  justify-content: center;
}

.login-logo {
  opacity: 0.8;
  border-radius: 14px;
}
.login-form {
  width: 80%;
  height: 400px;
  background: rgba(255, 241, 240, 0.6);
  padding: 60px 40px;
  border-radius: 14px;
  margin-left: 20px;
}
.user-title {
  font-size: 18px;
  margin-top: 10px;
}
form {
  margin-top: 15px;
}
.btn {
  background: #86ce2f;
  margin-top: 10px;
}
.form-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.form-bottom * {
  margin: 20px 15px;
}
.btn:hover {
  background: #82da17;
  margin-top: 10px;
}

.login-info {
  display: flex;
  justify-content: center;
}
</style>
