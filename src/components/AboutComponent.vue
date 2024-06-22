<template>
<div class="about-container">

  <div class="about-image">
    <div class="image"></div>
  </div>

  <div class="about-text">
    <p class="title"><span style="color: #F9004D;">About</span> Me</p>
    <p class="about-desc">
      Hi, I am a full stack developer, with a strong foundation in web development. From concept to execution, I thrive as a valuable team player. Equipped with expertise in database management, responsive design techniques, and version control systems like Git, I am poised to launch a successful career in web development.
    </p>
  </div>

</div>



</template>

<script>
export default {

}
</script>

<style scoped>

.about-container{
  display: flex;
  justify-content: space-evenly;
  height: 120vh;
  max-height: 950px;
  background-image: url('@/assets/aboutBG.svg');
  background-size: cover;
  background-position: center;
  
}

.about-text{
  background-color: rgb(25,25,25,0.8);
  max-width: 60%;
  padding: 5%;
  padding-top: 15%;
}

.about-image{
    padding-top: 15%;
    background-color: rgb(25,25,25,0.8);
    min-height: 200px;
    width: 50%;
}
.image{
    margin-top: 18%;
    margin-left: 40%;
    background-image: url('@/assets/logo.png');
    background-repeat: no-repeat;
    min-height: 200px;
}

.title{
  font-size: 4rem;
}
.about-desc{
  color: white;
  line-height: 2; /* Adjust the value as needed */
  text-align: center;
  font-size: 1.5rem;
  margin: auto;
  margin-top: 5%;
}

</style>