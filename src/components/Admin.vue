<template>
  <div id="admin">
    <div class="admin-login">
      <form @submit.prevent.enter="checkAdmin">
        <div class="well">
          <div class="form-group">
            <label for="exampleInputUsername">用户名</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              autofocus
              v-model="admin.username"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword">密码</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              v-model="admin.password"
            />
          </div>
          <button type="submit" class="btn btn-primary form-control">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      admin: {}
    }
  },
  methods: {
    checkAdmin() {
      this.$http
        .post('http://dayongge.xyz/phpcrud/app.php?action=adminLogin', {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=uft-8'
          },
          username: this.admin.username,
          password: this.admin.password
        })
        .then(data => {
          //   console.log(data.data.token);
          if (data.data.message == '查到了') {
            let token = '2b7780ad2177f8e6140f3c208f2966c6';
            sessionStorage.setItem('token', token)
            alert('登录成功')
            this.$router.push({
              path: '/admincontrol'
            })
          } else {
            alert('信息有误')
          }
        })
    }
  }
}
</script>

<style scoped>
#admin {
  height: 100vh;
  background: #656d7c;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.admin-login {
  margin-top: 10em;
}
</style>