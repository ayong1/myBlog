<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-6 register-logo">
        <img src="../assets/register-logo.jpg">
      </div>
      <div class="col-md-6 register-info">
        <form>
        <h3>用户注册</h3>
        <div class="form-group">
          <label>用户名</label>
          <input type="text" placeholder="username" class="form-control">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" placeholder="password" class="form-control">
        </div>
        <button class="btn btn-primary form-control">立即注册</button>
    </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      
    };
  }
};
</script>


<style scoped>
  .register-info{
    margin-top: 6em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  label{
    margin: 10px 0;
  }
  form{
    border-radius: 12px;
    width: 80%;
    background: rgba(204, 204, 204, .6);
    padding: 30px;
  }
  button{
    margin: 20px auto;
    height: 2.5em;
    font-size: 24px;
  }
  .register-logo img{
    border-radius: 12px;
    
  }
  .register-logo{
    margin-top: 6em;
    display: flex;
    justify-content: center;
  }
</style>
