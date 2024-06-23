<template>

<div class="container">

  <p class="title">Contact</p>

  <p class="copy-message" v-show="show">Text copied to clipboard!</p>
  
  <section class="footer">
      <br>
      <div class="opacity-50 lh-1"><i class="fa-solid fa-phone fa-2x" aria-hidden="true"></i></div>
      <p class=" lh-1 contact"  @click="copyText('0909-151-3512')">0909-151-3512</p>
      <div class="opacity-50 lh-1"><i class="fa-solid fa-envelope fa-2x" aria-hidden="true"></i></div>
      <p class=" lh-1 contact"  @click="copyText('louiejaycantores@gmail.com')">louiejaycantores@gmail.com</p>
      <br>
      <section class="links d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/louie-jay-cantores-988a79233" target="_blank"><i class="fa-brands fa-linkedin fa-4x mx-2" aria-hidden="true"></i></a>
        <a href="https://github.com/Chanceux-02" target="_blank"><i class="fa-brands fa-square-github fa-4x mx-2" aria-hidden="true"></i></a>
      </section>
  </section>

</div>

</template>

<script>

import { onMounted, ref } from 'vue';
import ClipboardJS from 'clipboard';

export default {
setup() {
    const clipboard = ref(null); 
    const show = ref(false); 
    let timeoutId = null;

    onMounted(() => {
      clipboard.value = new ClipboardJS('.btn');
    });

    const copyText = (text) => {

      clearTimeout(timeoutId); // Clear any existing timeout
      timeoutId = setTimeout(() => {
        let tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); 

        document.execCommand("copy");
        document.body.removeChild(tempInput); 

        showMessage(); 
      }, 500);
     
    };

    const showMessage = () => {
        show.value = true;

        setTimeout(() => {
          show.value = !show.value;
        }, 1000);
    };

    return {
      copyText,
      show
    };
  }
}
</script>

<style scoped>

.container{
  position: relative;
    padding-top: 8%;
    height: 90vh;
    max-height: 750px;
    background-color: #101010;
    background-size: cover;
    background-position: center;
}
.footer{
  margin-top: 5%;
}
.links{
  display: flex;
  justify-content: center;
}

a{
  margin: 0 0.5%;
  color: white;
  transition: transform 0.3s ease;
  cursor: pointer;
}
a:hover{
  color: #F9004D;
  transform: scale(1.2);
}

.contact{
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 25%;
  margin: 1% auto 3% auto;
}
.contact:hover{
  color: white;
  transform: scale(1.8);
}
.copy-message{
  color: red;
  font-size: 1.5rem;
  font-weight: 500;
  text-shadow: 
              -0.1px -0.1px 0 rgb(72, 71, 71),  
              0.1px -0.1px 0 rgb(72, 71, 71),  
              -0.1px  0.1px 0 rgb(72, 71, 71),  
              0.1px  0.1px 0 rgb(72, 71, 71);
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

@media (max-width: 425px) {
  .contact{
    width: 100%;
    font-size: 0.8rem;
    margin: 1% auto 3% auto;
  }
  .container{
    height: 50vh;
  }
  .fa-4x {
    font-size:2rem;
  }
  .links{
    justify-content: space-between;
    width: 20%;
    margin: auto;
  }
  .copy-message{
    font-size: 0.8rem;
    top: 22%;
  }
}


</style>