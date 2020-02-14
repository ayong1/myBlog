<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-6 register-logo">
        <img src="../assets/register-logo.jpg" />
      </div>
      <div class="col-md-6 register-info">
        <form @submit.prevent="getUser">
          <h3>用户注册</h3>
          <div class="form-group">
            <label>用户名</label>
            <input
              type="text"
              placeholder="username"
              class="form-control"
              v-model="user.username"
              @input="checkUser"
            />
            <p v-show="userInfo">{{userInfo}}</p>
          </div>
          <div class="form-group">
            <label>密码</label>
            <input
              type="password"
              placeholder="password"
              class="form-control"
              v-model="user.password"
            />
          </div>
          <button type="submit" class="btn btn-primary form-control">立即注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      user: {},
      userInfo: ''
    }
  },
  methods: {
    getUser() {
      this.$http
        .post('http://47.95.228.1/phpcrud/app.php?action=userRegister', {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=uft-8'
          },
          username: this.user.username,
          password: this.user.password
        })
        .then(data => {
          console.log(data)
          if (data.data.message == '注册成功') {
            let token = data.data.token
            sessionStorage.setItem('token', token)
            this.$message({
              message: '注册成功,请登录',
              type: 'success',
              offset: 60
            })
            this.$router.push({
              path: '/login'
            })
          } else {
            alert('信息有误')
          }
        })
    },
    checkUser() {
      console.log(this.user.username)
      this.$http
        .post('http://47.95.228.1/phpcrud/app.php?action=userCheck', {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=uft-8'
          },
          username: this.user.username
        })
        .then(data => {
          this.userInfo = data.data.message
        })
    }
  }
}
</script>


<style scoped>
.register-info {
  margin-top: 6em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
label {
  margin: 10px 0;
}
form {
  border-radius: 12px;
  width: 80%;
  background: rgba(204, 204, 204, 0.6);
  padding: 30px;
}
button {
  margin: 20px auto;
  height: 2.5em;
  font-size: 24px;
}
.register-logo img {
  border-radius: 12px;
}
.register-logo {
  margin-top: 6em;
  display: flex;
  justify-content: center;
}
</style>
