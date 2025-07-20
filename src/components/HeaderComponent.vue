<template>
  <Nav class="nav"/>
  <section class="header-container" id="home">

    <div class="dim">

      <div class="heading-container">

        <h1 class="heading-text" data-aos="fade-right">
          <span class="heading-title" data-aos="zoom-in-down">Freelance Shopify Developer</span>
          <span> Hello,  </span>
          <span>
            I'm
            <span class="header-name">Louie Jay Cantores</span> 
          </span>
        </h1>

        <h2 class="header-other-info" data-aos="fade-right" >I make Shopify stores shine.</h2>

      </div>

      <ul class="nav-link">
        <li> <a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank"><i class="fa-brands fa-linkedin fa-3x mx-2" aria-hidden="true"></i></a></li>
        <li> <a href="https://github.com/Chanceux-02" target="_blank"><i class="fa-brands fa-square-github fa-3x mx-2" aria-hidden="true"></i></a></li>
      </ul>

    </div>

  </section>
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
    background-image: url('@/assets/myPic/mypic1.jpg');
    background-repeat: no-repeat;
    background-size: cover;  
    background-position: right;
    height: 60vh;
    max-height: 500px;
  }
  
  .dim{
    padding: 9% 0 0 0;
    background-color: rgb(5 5 5 / 81%);
    height: 100%;
  }

  .heading-container{
    width: 80%;
    text-align: start;
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  .heading-text {
    color: white;
    font-weight: 900;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }

  .heading-title{
    color: white;
    font-size: 1rem;
    margin-bottom: 0.83em;
  }

  .header-name{
    color: #F9004D;
  }

  .heading-text, .header-other-info {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .header-other-info{
    color: white;
  }

  .nav-link{
    display: flex;
    justify-content: start;
    align-items: center;
    width: 80%;
    margin: auto;
    visibility: visible;
    padding: 0;
    gap: 15px;
  }

  .nav-link li{
    list-style: none;
  }

  @media (min-width: 768px) {
    .header-container{
      height: 70vh;
      max-height: 700px;
    }
  }

  @media (min-width: 1024px) {

    .header-container{
      height: 100vh;
      max-height: unset;
    }
    
    .nav-link{
      visibility: hidden;
    }

    .heading-title{
      font-size: 1.5rem;
    }

    .heading-text, .header-other-info {
      font-size: 3em;
    }
  }

  @media (min-width: 1440px) {
    .heading-title{
      font-size: 2rem;
    }

    .heading-text, .header-other-info {
      font-size: 4em;
    }
  }


</style>