<template>

<div class="nav-main">
  <nav ref="navContainerInlineStyle" class="nav-container" :style="scrollNav">
    <a href="#home" @click.prevent="scrollTo('#home')" class="def-home-link">
      <p v-if="windowWidth <= 1024" v-show="!navElementVisibility" class="type-textouter"> {{ typedText }} </p>
    </a>
    <ul ref="navItemsILineStyle" v-show="navElementVisibility" class="nav-items">
        <p v-if="windowWidth <= 1024"  @click="burger(0)" class="close"><i class="fa-solid fa-3x fa-circle-xmark"></i></p>
        <a href="#home" @click.prevent="scrollTo('#home')" class="def-home-link-2">
          <p  v-if="windowWidth > 1024" class="type-text"> {{ typedText }} </p>
        </a>
        <li :class="{ 'active': activeTab === 'home' }" class="anch"><a href="#home" @click.prevent="scrollTo('#home')">Home</a></li>
        <li :class="{ 'active': activeTab === 'about' }" class="anch"><a href="#about"  @click.prevent="scrollTo('#about')">About</a></li>
        <li :class="{ 'active': activeTab === 'portfolio' }" class="anch"><a href="#portfolio"  @click.prevent="scrollTo('#portfolio')">Portfolio</a></li>
        <li :class="{ 'active': activeTab === 'skills' }" class="anch"><a href="#skills"  @click.prevent="scrollTo('#skills')">Skills</a></li>
        <li :class="{ 'active': activeTab === 'services' }" class="anch"><a href="#services"  @click.prevent="scrollTo('#services')">Services</a></li>
        <li :class="{ 'active': activeTab === 'contact' }" class="anch"><a href="#contact" @click.prevent="scrollTo('#contact')">Contact</a></li>
    </ul>
    <ul class="nav-link">
        <!-- <li> <a href="https://drive.google.com/drive/folders/10Ki3ut0qQUHM5fbjkim3I61-ja-oo6Wr" target="_blank" class="resume"></a></li> -->
        <li> <a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank"><i class="fa-brands fa-linkedin fa-3x mx-2" aria-hidden="true"></i></a></li>
        <li> <a href="https://github.com/Chanceux-02" target="_blank"><i class="fa-brands fa-square-github fa-3x mx-2" aria-hidden="true"></i></a></li>
    </ul>

  <div @click="burger(1)" v-show="!navElementVisibility" class="burger"><i class="fa-solid fa-bars"></i></div>
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

    const activeTab = ref('home');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        scrollNav.value.backgroundColor = 'rgb(25, 25, 25, 0.9)';
      } else {
        scrollNav.value.backgroundColor = '';
      }

    };

    const windowWidth = ref(window.innerWidth);
    const navElementVisibility = ref(false);
    const navItemsILineStyle = ref(''); 
    const navContainerInlineStyle = ref('')   


    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;

        if (windowWidth.value > 1024) {
          navItemsILineStyle.value.style.height = '';
          navContainerInlineStyle.value.style.padding = '';

          navElementVisibility.value = true;
        }else{
           navElementVisibility.value = false;
        }

    };

    // **scroll nav animation border bottom

    let observer

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateWindowWidth);
      window.addEventListener('load', updateWindowWidth);

     const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target.id) {
                activeTab.value = entry.target.id;
              }
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: `-50% 0px -50% 0px`,
        }
      );

      const sections = document.querySelectorAll('section')
      sections.forEach(section => observer.observe(section))

    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('load', updateWindowWidth);

      if (observer) {
        observer.disconnect()
      }
    });


    // **logo typing animation

    const text = "Welcome to";
    const typedText = ref("");
    let currentIndex = -1;
    const typingSpeed = 150; 
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
          typedText.value = "My Portfolio";
        }
        setTimeout(backspace, backspaceSpeed);
      } else {

        // setTimeout(() => {
        //   typedText.value = ""; 
        //   currentIndex = 0; 
        //   setTimeout(type, 500); 
        // }, 1000); 
     
      }
    };
   
    const burger = (type) => {

      if (windowWidth.value <= 925) {
        navElementVisibility.value = !navElementVisibility.value;
        if(type == 1){
          navItemsILineStyle.value.style.height = '500px';
          navContainerInlineStyle.value.style.padding = '0px';
        }else{
          navItemsILineStyle.value.style.height = '';
          navContainerInlineStyle.value.style.padding = '';
        }
       
      }

    }

    const scrollTo = (selector) => {
      const target = document.querySelector(selector);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        navItemsILineStyle.value.style.height = '';
        navContainerInlineStyle.value.style.padding = '';

        if (windowWidth.value < 925) {
          navElementVisibility.value = false;
        }
      }
    }

    type();

    return {
      scrollNav,
      typedText,
      windowWidth,
      burger,
      navElementVisibility,
      navItemsILineStyle,
      navContainerInlineStyle,
      scrollTo,
      activeTab
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
    height: 9%;
    padding-top: 15px;
  }

  ul{
    display: flex;
  }

  li{
    list-style: none;
    border-bottom:  rgba(0, 0, 0, 0) 5px solid;
    border-radius: 5px;
    transition: transform 0.3s ease;

  }

  .def-home-link{
    text-decoration: none;
    width: 30%;
    height: 40%;
    padding: 2% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:not(.def-home-link) {
    text-decoration: none;
    color:white;
    padding: 10px 15px;
    display: block;

  }
  .nav-items {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    padding: 15% 0px 5% 0px;
    max-width: 1600px;
  }

  .anch{
    min-width: 60%;
    margin: auto;
    border-bottom: 1px solid rgba(146, 146, 146, 0.5);
    border-radius: 0px;
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
    display: none;
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
    border-radius: 8px;
    transform: scale(1.2);
    background-color: rgba(187, 4, 4, 0.2);
  }

  .type-text{
    min-width: 15%;
    min-height: 10%;
    margin: 1% 9%;
  }

  .type-textouter{
    min-width: 100px;
    min-height: 25px;
    margin: 1% 8%;
    padding: 5%;
  }

  .close{
    border: 0px;
    color: rgb(190, 187, 187);
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;

  }

  .burger{
    margin: 1% 4%;
    width: 30px;
    height: auto;
    display: block;
    color: red;
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    .burger{
      display: none;
    }

    .nav-container {
      width: 100%;
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      transition: background-color 0.5s;
      position: fixed;
    }

    .nav-items {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: row;
      background: transparent;
      padding: 0;
      gap: 20px;
      justify-content: space-between;
      max-width: 800px;
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

    .anch{
      min-width: unset;
    }

    .anch:not(.active.anch){
      border-bottom: unset;
    }

    .def-home-link{
      display: none;
    }

    .nav-items .def-home-link-2{
      text-decoration: none;
      width: 30%;
      height: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .type-text{
        margin: auto;
        margin-left: 9%;
        margin-right: 9%;
        width: 100%;
        min-height: 34px;
        min-width: unset;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  }

  @media (min-width: 1900px) {
    .nav-container {
      max-height: 102px;
    }
    .nav-items .def-home-link-2{
      height: 50%;
    }
    .type-text{
      font-size: 1.5rem;
    }
    .anch{
      font-size: 1.5rem;
    }

    .nav-items {
      max-width: 1900px;
    }

    .nav-items .anch{
      margin: 0;
      width: 200px;
    }

    .fa-brands{
      font-size: 3rem;
    }
  }
  
</style>