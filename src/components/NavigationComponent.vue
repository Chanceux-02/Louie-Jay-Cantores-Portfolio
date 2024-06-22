<template>

<div class="nav-main">
  <nav class="nav-container" :style="scrollNav">
    <ul class="nav-items">
        <p class="type-text"> {{ typedText }} </p>
        <li id="1"><a href="#home">Home</a></li>
        <li id="2"><a href="#about">About</a></li>
        <li id="3"><a href="#experience">Experience</a></li>
        <li id="4"><a href="#education">Education</a></li>
        <li id="5"><a href="#skills">Skills</a></li>
        <li id="6"><a href="#portfolio">Portfolio</a></li>
        <li id="7"><a href="#contact">Contact</a></li>
    </ul>
    <ul class="nav-link">
        <li><a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank">Linked in</a></li>
        <li><a href="https://github.com/Chanceux-02" target="_blank">Git hub</a></li>
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

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
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


    return {
      scrollNav,
      typedText
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
    font-size: 1.2rem;
    font-weight: 600;
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
    width: 20%;
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

  li:hover{
    border-bottom: rgba(187, 4, 4, 0.5) 5px solid;
    border-radius: 0px;
  transform: scale(1.2);

  }
  .type-text{
    min-width: 15%;
    min-height: 10%;
  }

</style>