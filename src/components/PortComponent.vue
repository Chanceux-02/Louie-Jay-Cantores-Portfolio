<template>

    <section class="portfolio-container" id="portfolio">

        <p class="title" data-aos="zoom-in-down">Portfolio</p>

        <div class="card-container">

            <!-- looping throug datas -->

            <CardComponent v-for="card in cards" :key="card.id" :backgroundImage="card.image" data-aos="zoom-in-up">
                <div class="card-content">
                    <section>
                        <p class="proj-title">{{card.title}}</p>
                        <p>{{card.desc}}</p>
                    </section>
                    <h3>Development Technologies</h3>
                    <section class="tech">
                        <a v-for="tech in card.tech" :key="tech">{{ tech }}</a>
                    </section>
                    <a :href="card.link" target="_blank" class="btn btn-outline-light">View Codes</a>
                </div>
            </CardComponent>

        </div>

    </section>
</template>

<script>

import CardComponent from './child/CardComponent.vue';
import Cards from '../datas/cardsData';


export default {
      components: {
        CardComponent,
    },
    data() {
        return {
            cards: Cards    
        };
    }
}
</script>

<style scoped>

        .portfolio-container{
            padding: 8% 5%;
            height: auto;
            min-height: 90vh;
            background-color: #191919;
            background-size: cover;
            background-position: center;
        }
        .card {
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
            width: 500px;
            max-width: 800px;
            height: 600px;
            margin: 1% 0%;
            transition: transform 0.3s ease;
        }

        .card:hover{
            transform: scale(1.04);
        }

        /* Placeholder image */
        .card img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }

        /* Text labels */
        .card p {
            font-size: 14px;
            color: rgba(198, 201, 216, .75);
        }

        .card-content{
            background-color: rgb(16 16 16 / 95%);
            height: 93.5%;
            padding: 20px;
            margin: 0px;
            border-radius: 10px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 2px solid #00000078;
        }
        .card-content:hover{
            background-color: rgb(16, 16, 16, 1)

        }
        .card-container{
            display: flex;
            justify-content: space-evenly;
            margin-top: 5%;
            flex-wrap: wrap;
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
        }
        a:hover{
            text-decoration: none;
            color: #F9004D;
            border: 1px solid #F9004D;
            padding: 1% 3%;
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.5);
        }
        .tech{
            display: flex;
            margin: 5%;
            margin-top: 0px;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .tech a{
            width: 25%;
        }
        .proj-title{
            color: red;
            font-size: 2rem !important;
            font-weight: 900;
            text-shadow: 
                -0.5px -0.5px 0 white,  
                0.5px -0.5px 0 white,
                -0.5px  0.5px 0 white,
                0.5px  0.5px 0 white;
        }

        @media (max-width: 1111px) {
            .card {
                width: 800px;
                max-width: 800px;
                height: 400px;
                margin: 2% 0%;
            }
            .card-content{
                padding: 20px 15%;

            }
            .card p{
                font-size: 0.8rem;
            }
            .proj-title{
                font-size: 1.5rem !important;
            }
            a {
                width: 20%;
                font-size: 0.7rem;
            }
            .tech a{
                width: 15%;
                margin-top: 3%;
                font-size: 0.7rem;
            }
            .tech{
                width: 70%;
                margin: 0% auto;
            }
        }
        @media (max-width: 425px) {
            .card {
                margin: 5% 0%;
                height: 600px;

            }
            .tech a{
                width: 20%;
                margin-top: 3%;
                font-size: 0.7rem;
            }
            .tech{
                width: 100%;
                margin: 0% auto;
            }

        }

           
</style>