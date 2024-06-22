<template>

    <div class="portfolio-container">

        <p class="title">Portfolio</p>

        <div class="card-container">

            <!-- looping throug datas -->

            <CardComponent v-for="card in cards" :key="card.id" :backgroundImage="card.image">
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

    </div>
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
            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s);
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
            transform: scale(1.03);
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
        }

        .card-content{
            background-color: rgb(16, 16, 16, 1);
            height: 93.5%;
            padding: 20px;
            margin: 0px;
            border-radius: 10px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }
        .card-content:hover{
            background-color: rgba(39, 12, 12, 0.9);

        }
        .card-container{
            display: flex;
            justify-content: space-evenly;
            margin-top: 5%;
            flex-wrap: wrap;
        }
        a{
            text-decoration: none;
            color: white;
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
           
</style>