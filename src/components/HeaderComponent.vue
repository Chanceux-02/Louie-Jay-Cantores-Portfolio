<template>
  <Nav class="nav"/>
  <div class="header-container">

    <div class="intro">

      <h1>Full Stack Web Developer</h1>
      

      <p class="text">Hello, <br> I'm <span class="name">Louie Jay Cantores</span> <br> <span>Welcome to my world.</span></p>

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
    padding: 9% 0 0 0;
    height: 88vh;
    max-height: 900px;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVc6b5oNxqkkh3vJQ761Wt26gFO5nxTXmVw&s);
    /* background-position: 50%; */
    background-repeat: no-repeat;
    background-size: cover;  
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


</style>