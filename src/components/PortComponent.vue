<template>

    <section class="portfolio-container" id="portfolio">

        <h2 class="title" data-aos="zoom-in-down">Portfolio</h2>

        <div class="card-container">

            <CardComponent v-for="data in datas" :key="data.id" :backgroundImage="data.image" data-aos="zoom-in-up">
                <div class="card-content">
                    <section>
                        <h3 class="proj-title">{{data.title}}</h3>
                        <p class="proj-desc">{{data.desc}}</p>
                    </section>
                    <section class="datas-container">
                            <h4 class="task-heading">Task and Activities:</h4>
                        <ul class="tasks">
                            <li class="task-item" v-for="task in data.tasks" :key="task">{{ task }}</li>
                        </ul>
                            <h4 class="tech-heading">Development Technologies:</h4>
                        <ul class="tech">
                            <li class="tech-item" v-for="tech in data.tech" :key="tech">{{ tech }}</li>
                        </ul>
                    </section>
                    <section class="link-container">
                        <a :href="data.link" target="_blank" class="redirection-link btn btn-outline-light">Visit Store</a>
                    </section>
                </div>
            </CardComponent>

        </div>

    </section>
</template>

<script>

import CardComponent from './child/CardComponent.vue';
import Datas from '../datas/portfolioData';


export default {
      components: {
        CardComponent,
    },
    data() {
        return {
            datas: Datas    
        };
    }
}
</script>

<style scoped>

    .portfolio-container{
        padding: 40px 0;
        height: auto;
        min-height: 90vh;
        background-color: #191919;
        background-size: cover;
        background-position: center;
        width: 90%;
        max-width: 2000px;
        margin: auto;
    }
    
    .card {
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        margin: 1% 0%;
        transition: transform 0.3s ease;
        padding: 0;
    }

    .card img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .card-content{
        background-color: rgb(16 16 16 / 90%);
        margin: 0px;
        padding: 0 20px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        border: 2px solid #00000078;
        height: 100%;
    }

    .card-container{
        display: grid;
        grid-template-columns: repeat(1, 1fr); 
        margin-top: 5%;
        gap: 15px;
    }

    a{
        text-decoration: none;
        color: rgba(198, 201, 216, .75);;
        border: 1px solid white;
        padding: 1% 3%;
        border-radius: 5px;
        width: 40%;
        margin: 0% auto;
        cursor: pointer;
        font-size: 0.9em;
    }

    a:hover{
        text-decoration: none;
        color: #F9004D;
        border: 1px solid #F9004D;
        padding: 1% 3%;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
    }

    .datas-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 5%;
    }
    
    .tech-heading, .task-heading{
        margin: 0;
        text-align: start;
        font-size: 1em;
    }

    .tasks{
        display: grid;
        grid-template-columns: repeat(1, 1fr); 
        justify-content: start;
        align-items: start;
        text-align: start;
        padding-left: 20px;
    }

    .tech{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        justify-content: start;
        align-items: start;
        text-align: start;
        padding-left: 20px;
    }

    .tech-item, .task-item{
        font-size: 0.9em;
        color: #b9b9b9;
    }

    .proj-title{
        color: #F9004D;
        font-size: 2rem;
        font-weight: 900;
    }

    .proj-desc{
        font-size: 1rem;
        color: #ffffff;
        text-align: justify;
    }

    .link-container{
        width: 100%;
        padding: 8% 0 10% 0;
    }

    .redirection-link{
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        .card-container{
            grid-template-columns: repeat(2, 1fr); 
        }
    }

    @media (min-width: 1024px) {
        .card-content:hover{
            background-color: rgb(16, 16, 16, 1)
        }

        .card:hover{
            transform: scale(1.04);
        }

        .portfolio-container{
            padding: 80px 0;
        }

        .card-content{
            padding: 0 50px;
        }
    }

    @media (min-width: 1440px) {
        .tech-item, .task-item{
            font-size: 1em;
        }

        .card-container{
            gap: 30px;
        }
    }

    /* @media (min-width: 2400px) {
        .title {
            font-size: 2rem;
        }
        .proj-title {
            font-size: 3rem;
        }
        .tech-heading, .task-heading{
            font-size: 2rem;
        }
        .tech-item, .task-item, .proj-desc, .redirection-link{
            font-size: 2em;
        }
    } */
           
</style>