<template>
  <div class="login">
    <video src="static/media/login-video.mp4" loop autoplay></video>  
    <div class="container content">
      <div class="col-md-6 login-img">
        <img src="../assets/login-logo.jpg" class="login-logo" alt="login-logo">
      </div>
      <div class="col-md-6 login-info">
        <div class="login-form">
          <label class="user-title">用户登录</label>
          <form>
            <div class="form-group">
              <p class="glyphicon glyphicon-user"></p>
              <input type="text" class="form-control username" placeholder="用户名">
            </div>
            <div class="form-group">
              <p class="glyphicon glyphicon-lock"></p>
              <input type="password" class="form-control password" placeholder="密码">
            </div>
            <button type="submit" class="btn form-control">登录</button>
            <div class="form-bottom">
              <router-link to="/register">注册新账号</router-link> 
              <router-link to="">意见反馈</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      
    };
  }
};
</script>


<style scoped>
  @media screen and (min-width:1366px) {
    video{
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%; 
      width: auto;
      height: auto; 
      z-index: -100; 
    }
    .content{
        margin:12em auto;
      }
  }
  @media screen and (max-width:1366px){
    video{
        position: fixed;
        left: -10em;
        bottom: 0;
        min-width: 100%;
        min-height: 100%; 
        width: auto;
        height: auto; 
        z-index: -100; 
      }
      .content{
        margin:5em auto;
      }
  }
  p{
    position: relative;
    top: 33px;
    left: 5px;
  }
  input{
    text-indent: 1em;
  }
  .login-img{
    display: flex;
    justify-content: center;
  }
  
  .login-logo{
    opacity: .8;
    border-radius: 14px;
  }
  .login-form{
    width: 80%;
    height: 400px;
    background: rgba(255,241,240,.6);
    padding: 60px 40px;
    border-radius: 14px;
    margin-left: 20px;
  }
  .user-title{
    font-size: 18px;
    margin-top: 10px;
  }
  form{
    margin-top: 15px;
  }
  .btn{
    background: #86ce2f;
    margin-top: 10px;
  }
  .form-bottom{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .form-bottom *{
    margin: 20px 15px;
  }
  .btn:hover{
    background: #82da17;
    margin-top: 10px;
  }
  
  .login-info{
    display: flex;
    justify-content: center;
  }
</style>
