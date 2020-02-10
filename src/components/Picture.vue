<template>
  <div class="content">
    <h1>大勇哥照片墙</h1>
    <div class="gallery">
      <a href="http://localhost/Picturewall/1.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/1.jpg" />
      </a>
      <a href="http://localhost/Picturewall/2.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/2.jpg" />
      </a>
      <a href="http://localhost/Picturewall/3.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/3.jpg" />
      </a>
      <a href="http://localhost/Picturewall/4.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/4.jpg" />
      </a>
      <a href="http://localhost/Picturewall/5.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/5.jpg" />
      </a>
      <a href="http://localhost/Picturewall/6.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/6.jpg" />
      </a>
      <a href="http://localhost/Picturewall/7.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/7.jpg" />
      </a>
      <a href="http://localhost/Picturewall/8.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/8.jpg" />
      </a>
      <a href="http://localhost/Picturewall/9.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/9.jpg" />
      </a>
      <a href="http://localhost/Picturewall/10.jpg" data-lightbox="gallery" data-title="">
        <img src="../assets/PictureWall/10.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photo',
  data() {
    return {}
  }
}
</script>


<style scoped>
.content {
  background: url('../assets/photo-background.jpg') no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  font-family: sans-serif;
  height: 100vh;
}
h1 {
  text-align: center;
  margin: 60px 0 0;
  /* color: lightseagreen; */
  font: 700 50px "Comic Sans MS";
    color: white;
    text-shadow: 0 0 20px #fdec84,
            10px -10px 30px #ffae35,
            20px -20px 40px #ec760c,
            -20px -60px 50px #cd4607,
            0px -80px 60px #973717,
            10px -40px 70px #451b0e;
}
.gallery img{
  max-width: 230px;
  max-height: 170px;
  padding: 5px;
  filter: grayscale(0);
  transition: 0.5s;
}
.gallery img:hover{
  filter: grayscale(80%);
  transform: scale(1.1);
}
.gallery{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px;
}
</style>
