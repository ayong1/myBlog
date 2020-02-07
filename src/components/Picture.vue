<template>
  <div class="content">
        <img class="pic1" src="../assets/picture/1.jpg" />
        <img class="pic2" src="../assets/1.jpg" />
        <img class="pic3" src="../assets/1.jpg" />
        <img class="pic4" src="../assets/1.jpg" />
        <img class="pic5" src="../assets/1.jpg" />
        <img class="pic6" src="../assets/1.jpg" />
        <img class="pic7" src="../assets/1.jpg" />
        <img class="pic8" src="../assets/1.jpg" />
        <img class="pic9" src="../assets/1.jpg" />
     </div>
</template>

<script>
export default {
  name: "photo",
  data() {
    return {
        
    };
  }
};
</script>


<style scoped>
.content{
  background: url("../assets/photo-background.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden; 
  margin: 0 auto; 
  position: relative;
}
img{ 
  margin: 100px auto;
  width: 100%; 
  max-width: 100%;
  z-index: 1;
  width: 20%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 10px 15px 10px;
  background: #ffffff;
  border: 1px solid #CCCCCC;
  /* 动画的时间 */
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
 }
img:hover{
  z-index: 2;
  transform:  scale(3);
  box-shadow: -10px 10px 20px #000000;
}
.pic1{
  left: 150px;
  top: 50px;
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  transform: rotate(20deg);
}
.pic2{
  left: 320px;
  top: 90px;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
}
.pic3{
  left: 351px;
  top: 2250px;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
.pic4{
  left: 400px;
  top: 230px;
  -webkit-transform: rotate(-40deg);
  -moz-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
.pic5{
  left: 500px;
  top:  210px;
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  transform: rotate(50deg);
}
.pic6{
  left: 600px;
  top:  105px;
  -webkit-transform: rotate(32deg);
  -moz-transform: rotate(32deg);
  transform: rotate(32deg);
}
.pic7{
  left: 700px;
  top:  260px;
  -webkit-transform: rotate(65deg);
  -moz-transform: rotate(65deg);
  transform: rotate(65deg);
}
.pic8{
  left: 800px;
  top:  46px;
  -webkit-transform: rotate(-40deg);
  -moz-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
.pic9{
  left: 600px;
  top:  200px;
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  transform: rotate(50deg);
}
</style>
