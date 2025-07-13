<template>
<div class="about-container" id="about">

  <div class="about-image-container">
    <img :src="myPic" alt="Louie Jay Cantores Picture" class="about-image" data-aos="zoom-in" />
  </div>

  <div class="about-text">
    <p class="title" data-aos="zoom-in-down"><span style="color: #F9004D;">About</span> Me</p>
    <p class="about-desc" data-aos="zoom-in">
      Freelance Shopify developer passionate about crafting seamless e-commerce experiences using Liquid, JavaScript, HTML, and CSS. 
      <span class="about-desc-extend-text">
        I specialize in customizing themes, improving site speed, and optimizing for conversions to help businesses turn more visitors into customers.
      </span>
      <span class="about-desc-extend-text">
        I focus on building responsive, user-friendly stores and enhancing online performance, delivering solutions that elevate brands and drive measurable results.
      </span>
    </p>
  </div>

</div>



</template>

<script setup>
  import myPic from '@/assets/myPic/mypic.jpeg'
</script>

<style scoped>

.about-container{
  display: flex;
  justify-content: space-between;
  background-image: url('@/assets/aboutBG.svg');
  background-size: cover;
  background-position: center;
  padding: 15% 0;
}

.about-text{
  background-color: rgb(25,25,25,0.5);
  width: 100%;
  max-width: 85%;
  margin: auto;

}

.about-image-container{
    background-color: rgb(25,25,25,0.8);
    position: relative;
    display: none;
}

.title{
  font-size: 1.5rem;
}

.about-desc{
  color: white;
  line-height: 2; 
  text-align: justify;
  font-size: 1rem;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}

.about-desc-extend-text{
  margin-top: 5%;
}

@media (min-width: 1024px) {

  .title{
    font-size: 3rem;
  }

  .about-container{
    padding: 5% 10%;
    gap: 50px;
  }

  .about-image-container{
    display: block;
    width: 40%;
  }

  .about-text{
    width: 60%;
  }

  .about-image{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: block;
  }

  .about-desc{
    text-align: left;
  }

}

@media (min-width: 1440px) {
  .title{
    font-size: 4rem;
  }

  .about-image{
    object-position: center;
    object-fit: contain;
    max-width: 400px;
    margin: auto;
  }
}

@media (min-width: 1900px) {
  .about-container{
    padding: 8% 10%;
  }

  .title{
    font-size: 4rem;
  }

  .about-image{
    object-position: center;
    object-fit: contain;
    max-width: 600px;
    margin: auto;
  }

  .about-desc{
    font-size: 2rem;
  }
}


</style>