<template>

    <section class="services-container" id="services">

        <h2 class="title" data-aos="zoom-in-down">Services</h2>
          
        <div class="services-card-container">

            <CardComponent v-for="service in services" :key="service.id" :backgroundImage="service.image" data-aos="flip-up">
                <div class="card-content">
                    <section>
                        <h3 class="service-title">{{service.service}}</h3>
                        <p class="service-desc">{{service.description}}</p>
                        <div class="overlay"></div>
                    </section>
                </div>
            </CardComponent>

        </div>
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
        padding: 40px 0;
        height: auto;
        background-color: #191919;
        background-size: cover;
        background-position: center;
        margin: auto;
    }

    .services-card-container{
        margin: auto;
        margin-top: 10%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-items: stretch;
        width: 90%;
        max-width: 2000px;
    }
    
    .card {
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
        position: relative;
        background-position: center;
        padding: 20px 10px 10px;
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

    .service-title{
        position: relative;
        color: #F9004D;
        font-size: 1rem;
        font-weight: 900;
        /* text-shadow: 
            -0.5px -0.5px 0 white,  
            0.5px -0.5px 0 white,
            -0.5px  0.5px 0 white,
            0.5px  0.5px 0 white; */
    }

    .service-desc{
        position: relative;
        text-align: center;
        padding: 0 5px;
        font-size: 0.9rem;
    }

    @media (min-width: 768px) {
        .services-container{
            padding: 50px 0;
        }

        .services-card-container{
            grid-template-columns: repeat(2, 1fr);
            margin-top: 5%;
        }

    }

    @media (min-width: 1024px) {
        .card-content{
            height: auto;
            padding: 15px;
        }

        .services-card-container{
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
        }
        .service-title{
            text-align: start;
        }

        .service-desc{
            text-align: start;
        }

        .services-container{
            padding: 50px 0;
        }
    }

    @media (min-width: 1280px) {
        .card-content{
            height: auto;
        }
        .card-content .service-title{
            font-size: 1.5rem;
        }
        .service-desc{
            font-size: 1rem;
        }
    }

    @media (min-width: 1900px) {
        .services-card-container{
            gap: 5rem;
        }
        .card-content{
            height: auto;
        }

        .title{
            font-size: 4rem;
        }

        /* .card-content .service-title{
            font-size: 2rem;
        }

        .service-desc{
            font-size: 1.5rem;
        } */
    }

</style>