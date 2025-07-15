<template>

    <section class="services-container" id="services">

        <p class="title" data-aos="zoom-in-down">Services</p>

        <section class="main-services">
          
          <div class="card-container">

              <CardComponent v-for="service in services" :key="service.id" :backgroundImage="service.image" data-aos="flip-up">
                  <div class="card-content">
                      <section>
                          <p class="proj-title">{{service.service}}</p>
                          <p class="service-desc">{{service.description}}</p>
                          <div class="overlay"></div>
                      </section>
                  </div>
              </CardComponent>

          </div>
        </section>

    </section>

</template>

<script>

import CardComponent from './child/CardComponent.vue';
import {services, techStack} from '../datas/cardsServicesData';


export default {

    components: {
        CardComponent,
    },
    data() {
        return {
             services: services,
             techStacks: techStack,
        };
    }

}
</script>

<style scoped>

    .services-container{
        padding: 15% 0;
        height: auto;
        background-color: #191919;
        background-size: cover;
        background-position: center;
        margin: auto;
    }
    
    .card {
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
        position: relative;
        overflow: hidden; 
        background-position: center;
        min-height: 150px;
    }

    .overlay::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(25, 25, 25, 0.9);
        z-index: 1;
        border-radius: 10px;
    }

    .card:hover{
        transform: scale(1.03);
    }
    .card *{
        z-index: 2;
    }

    .card img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .card-content{
        border-radius: 10px;
        height: auto;
    }

    .card:hover{
        background-color: rgba(39, 12, 12, 0.9);
    }

    .card-container{
        margin-top: 5%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-items: stretch;
    }

    .proj-title{
        position: relative;
        color: red;
        font-size: 1rem;
        font-weight: 900;
        text-shadow: 
            -0.5px -0.5px 0 white,  
            0.5px -0.5px 0 white,
            -0.5px  0.5px 0 white,
            0.5px  0.5px 0 white;
        z-index: 2;
    }

    .service-desc{
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 0 5px;
        font-size: 0.9rem;
    }

    .tech-stack{
        font-size: 1.5rem;
        font-weight: 900;
    }

    .main-services{
        margin: auto;
        margin-top: 5%;
        max-width: 860px;
        width: 85%;
    }

    @media (min-width: 768px) {
        .services-container{
            padding: 15% 0;
        }
        .card-container{
            grid-template-columns: repeat(2, 1fr);
        }

        .service-desc{
            padding: 0 10px;
        }
    }

    @media (min-width: 1024px) {
        .main-services{
            width: 90%;
            max-width: unset;
        }
        .card-content{
            height: auto;
            padding: 15px;
        }

        .card-container{
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
        }
        .proj-title{
            text-align: start;
        }

        .service-desc{
        text-align: start;
        }
    }

    @media (min-width: 1280px) {
        .card-content{
            height: auto;
        }
        .card-content .proj-title{
            font-size: 2rem;
        }
        .service-desc{
            font-size: 1rem;
        }
        .card-container{
            max-width: 1800px;
            margin: auto;
        }
    }

    @media (min-width: 1900px) {
        .card-container{
            gap: 5rem;
        }
        .card-content{
            height: auto;
        }
        .card-content .proj-title{
            font-size: 3rem;
        }
        .title{
            font-size: 4rem;
        }
        .service-desc{
            font-size: 1.5rem;
        }
    }

</style>