<template>
<div class="about-container" id="about">

  <div class="about-image">
    <div class="image" data-aos="zoom-in"></div>
  </div>

  <div class="about-text">
    <p class="title" data-aos="zoom-in-down"><span style="color: #F9004D;">About</span> Me</p>
    <p class="about-desc" data-aos="zoom-in">
      Freelance Shopify developer passionate about crafting seamless e-commerce experiences using Liquid, JavaScript, HTML, and CSS. I specialize in customizing themes, improving site speed, and optimizing for conversions to help businesses turn more visitors into customers. I focus on building responsive, user-friendly stores and enhancing online performance, delivering solutions that elevate brands and drive measurable results.
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
    background-color: rgb(25,25,25,0.8);
    min-height: 200px;
    width: 50%;
    position: relative;
}
.image{
    background-image: url('@/assets/myPic/mypic.jpeg');
    background-repeat: no-repeat;
    height: 60%;
    width: 90%;
    background-size: contain;
    position: absolute;
    top: 20%;
    left: 10%;
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


@media (max-width: 1000px) {
      .image{
        background-size:contain;
      }
     .title{
        font-size: 2rem;
      }
      .about-desc{
        font-size: 1rem;
      }
      .about-image{
        display: none;
      }
      .about-text {
        max-width: 100%;
      }
      .about-text p{
        max-width: 80%;
        margin-right: auto;
        margin-left: auto;
      }
}
@media (max-width: 768px) {
    .about-container{
      height: 60vh;
    }
    .about-desc{
      font-size: 0.8rem;
    }
    
}
@media (max-width: 425px) {

  .about-container{
    display: block;
    margin: auto;
    width: 100%;
    max-height: 450px;
  }
  .image{
    display: none;
  }
  .title{
    font-size: 2rem;
  }
 
  .about-text {
    background-color: rgb(25, 25, 25, 0.8);
    max-width: 100%;
    padding: 15% 0% 0% 0%;
    height: 100%;
  }
  .about-image{
    padding: 0%;
    min-height: 0;
    width: 0%;
  }
  
}


</style>