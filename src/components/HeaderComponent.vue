<template>
  <Nav class="nav"/>
  <div class="header-container" id="home">

    <div class="dim">

      <div class="intro">

        <h1 data-aos="zoom-in-down">Full Stack Web Developer</h1>
        
        <p class="text" data-aos="fade-right">Hello, <br> I'm <span class="name">Louie Jay Cantores</span> <br> <span>Welcome to my world.</span></p>

      </div>

      <ul class="nav-link">
        <li> <a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank"><i class="fa-brands fa-linkedin fa-3x mx-2" aria-hidden="true"></i></a></li>
        <li> <a href="https://github.com/Chanceux-02" target="_blank"><i class="fa-brands fa-square-github fa-3x mx-2" aria-hidden="true"></i></a></li>
      </ul>

    </div>

  </div>
</template>

<script>

import Nav from "./NavigationComponent.vue";

export default {
  name: 'HeaderComponent',
  components: { Nav }
}
</script>

<style scoped>

  .nav{
    top: 0;
    position: fixed;
    width: 100%;
  }
  .header-container{
    min-height: 88vh;
    max-height: 900px;
    background-image: url('@/assets/myPic/mypic1.jpg');
    background-repeat: no-repeat;
    background-size: cover;  
  }
  .dim{
    padding: 9% 0 0 0;
    background-color: rgb(5 5 5 / 81%);
    min-height: 88vh;
    max-height: 900px;
  }
  .intro{
    width: 50%;
    text-align: start;
    padding: 5% 0 0 10%;
  }

  .intro p {
    color: white;
    font-weight: 900;
    font-size: 4em;
  }
  h1{
    color: white;

  }
  .name{
    color: #F9004D;
  }

  .text {
      line-height: 1.5; /* Adjust the value as needed */
  }
   .nav-link{
      visibility: hidden;
    }

  @media (max-width: 1000px) {
    .intro{
      width: 70%;
    }
    .intro p{
        font-size: 2.5rem;
    }
    h1{
        font-size: 1.5rem !important;
    }
  }

  @media (max-width: 768px) {
    .header-container{
        min-height: 0vh;
        height: 60vh;
    }

  }
  @media (max-width: 425px) {
    .intro{
      width: 90%;
      margin-top: 20%;

    }
    .intro p{
        font-size: 1.5rem;
    }
    h1{
        font-size: 1rem !important;
    }

    .nav-link{
      display: flex;
      justify-content: space-between;
      width: 30%;
      visibility: visible;
    }
    .nav-link li{
      width: 100%;
      list-style: none;
    }

  }


</style>