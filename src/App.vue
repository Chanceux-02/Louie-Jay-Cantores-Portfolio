<template>
  <Header/>
  <About/>
  <Port/>
  <Skills/>
  <Services/>
  <Cont/>
</template>

<script>

import Header from "./components/HeaderComponent.vue";
import About from "./components/AboutComponent.vue";
// import Exp from "./components/ExpComponent.vue";
// import Edu from "./components/EducationComponent.vue";
import Skills from "./components/SkillsComponent.vue";
import Services from "./components/ServicesComponent.vue";
import Port from "./components/PortComponent.vue";
import Cont from "./components/ContactComponent.vue";

export default {
  name: 'App',
  components: { 
    Header,
    About,
    Port,
    Cont,
    Skills,
    Services,
    }
}
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
