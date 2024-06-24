<template>

<div class="nav-main">
  <nav class="nav-container" :style="scrollNav">
  <p v-if="windowWidth <= 768" class="type-textouter"> {{ typedText }} </p>
    <ul class="nav-items">
        <p v-if="windowWidth <= 768" class="close"><i class="fa-solid fa-3x fa-circle-xmark"></i></p>
        <p  v-if="windowWidth > 768" class="type-text"> {{ typedText }} </p>
        <li id="1" class="active anch"><a href="#home">Home</a></li>
        <li id="2" class="anch"><a href="#about">About</a></li>
        <li id="3" class="anch"><a href="#experience">Experience</a></li>
        <li id="4" class="anch"><a href="#education">Education</a></li>
        <li id="5" class="anch"><a href="#skills">Skills</a></li>
        <li id="6" class="anch"><a href="#portfolio">Portfolio</a></li>
        <li id="7" class="anch"><a href="#contact">Contact</a></li>
    </ul>
    <ul class="nav-link">
        <li> <a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank"><i class="fa-brands fa-linkedin fa-3x mx-2" aria-hidden="true"></i></a></li>
        <li> <a href="https://github.com/Chanceux-02" target="_blank"><i class="fa-brands fa-square-github fa-3x mx-2" aria-hidden="true"></i></a></li>
    </ul>
  </nav>
</div>
  
</template>

<script>

import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'ScrollTracker',
  setup() {
    
    // **scroll animation

    const scrollNav = ref({
      backgroundColor: '',
    });
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        scrollNav.value.backgroundColor = '#191919';
      } else {
        scrollNav.value.backgroundColor = '';
      }
    };

    const windowWidth = ref(window.innerWidth);

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };


    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowWidth);
    });


    // **logo typing animation

    const text = "My Portfolio";
    const typedText = ref("");
    let currentIndex = -1;
    const typingSpeed = 100; 
    const backspaceSpeed = 100;

    const type = () => {
      if (currentIndex < text.length) {
        typedText.value += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(backspace, 1000); 
      }
    };

    const backspace = () => {
      if (currentIndex >= 0) {
        typedText.value = typedText.value.slice(0, -1);
        currentIndex--;
        if(currentIndex == -1){
          typedText.value = "\u{1F44B} \u{1F60A}";
        }
        setTimeout(backspace, backspaceSpeed);
      } else {

        setTimeout(() => {
          typedText.value = ""; 
          currentIndex = 0; 
          setTimeout(type, 500); 
        }, 500); 
     
      }
    };

    type();

    console.log(windowWidth.value)

    return {
      scrollNav,
      typedText,
      windowWidth
    };
  }
};
</script>

<style scoped>

  .nav-main{
    display: flex;
    z-index: 1000;
  }

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: background-color 0.5s;
    position: fixed;
    max-width: 2000px;
  }

  ul{
    display: flex;
  }

  li{
    list-style: none;
    padding: 2%;
    border-bottom:  rgba(0, 0, 0, 0) 5px solid;
    border-radius: 5px;
    transition: transform 0.3s ease;

  }

  a {
    color:white;
    text-decoration: none;
    padding: 2%;
    margin: 2%;
  }
  .nav-items {
    display: flex;
    width: 60%;
    min-width: 700px;
    max-width: 800px;
    align-items: center;
    justify-content: space-between;
  }
  .nav-items li{
    width: 100px;
  }
  .nav-link{
    display: flex;
    justify-content: space-around;
    min-width: 150px;
    max-width: 200px;
    width: 10%;
    align-items: center;
    margin-right: 5%;
  }
  .nav-link li{
    width: 100%;
  }

  p{
    margin: 0 20px 0 0;
    color: rgb(225, 23, 23, 0.5);
    font-weight: 900;
    border: 1px solid rgb(225, 23, 23, 0.5);
    border-radius: 10px;
    padding: 2%;
    background: rgb(22, 22, 22);
  }
  .active{
      border-bottom: rgba(187, 4, 4, 0.5) 5px solid;
      border-radius: 0px;
  }

  li:hover{
    border-bottom: rgba(187, 4, 4, 0.5) 5px solid;
    border-radius: 0px;
    transform: scale(1.2);

  }
  .type-text{
    min-width: 15%;
    min-height: 10%;
  }
  .type-textouter{
    margin: 1% 9%;
    height: 30%;
  }

  @media (max-width: 1000px) {

    .fa-3x {
        font-size: 2rem;
    }
    .nav-link{
      min-width: 80px;
      margin-right: 2%;
    }

  }
  @media (max-width: 768px) {

      .nav-items {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.9);
        min-width: 100%;
        max-width: 800px;
        align-items: center;
        justify-content: space-between;
        margin: 0px;
        padding: 15% 0px 5% 0px;
        display: none;
      }
      .nav-container{
        height: 9%;
      }
      .anch{
        min-width: 60%;
        margin: auto;
        border-bottom: 1px solid rgb(255, 0, 0, 0.5);
        border-radius: 0px;
      }
      .nav-link{
        display: flex;
        justify-content: space-around;
        min-width: 150px;
        max-width: 200px;
        width: 10%;
        align-items: center;
        margin-right: 5%;
      }
      .nav-link li{
        display: none;
      }
      .close{
        border: 0px;
        color: rgb(190, 187, 187);
        position: absolute;
        top: 11%;
        left: 93%;
        transform: translate(-50%, -50%);
      }

  }

  @media (max-width: 426px) {
  
   .nav-container{
        height: 9%;
      }
  .type-textouter{
      margin: 3% 9%;
      height: 40%;
    }

  }



</style>