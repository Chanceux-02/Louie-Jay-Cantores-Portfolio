<template>

    <div class="skills-container" id="skills">

        <p class="title" data-aos="zoom-in-down">Skills</p>

        <section class="main-skills">
          
          <p class="tech-stack">Main Tech Stack</p>

          <div class="card-container">

              <!-- looping throug datas -->

              <CardComponent v-for="skill in skills" :key="skill.id" :backgroundImage="skill.image" data-aos="flip-up">
                  <div class="card-content">
                      <section>
                          <p class="proj-title">{{skill.skill}}</p>
                      </section>
                  </div>
              </CardComponent>

          </div>
        </section>

        <section class="other-skills">
           <p class="tech-stack">Other Skills</p>

          <div class="card-container">

              <!-- looping throug datas -->

              <CardComponent v-for="tech in techStacks" :key="tech.id" :backgroundImage="tech.image" data-aos="flip-up">
                  <div class="card-content">
                      <section>
                          <p class="proj-title">{{tech.skill}}</p>
                      </section>
                  </div>
              </CardComponent>

          </div>
        </section>

    </div>

</template>

<script>

import CardComponent from './child/CardComponent.vue';
import {skills, techStack} from '../datas/cardsSkillsData';


export default {

    components: {
        CardComponent,
    },
    data() {
        return {
             skills: skills,
             techStacks: techStack,
        };
    }

}
</script>

<style scoped>

    .skills-container{
        padding: 8% 15% 8% 15%;
        height: auto;
        min-height: 60vh;
        background-color: #101010;
        background-size: cover;
        background-position: center;
        margin: auto;
    }
    .card {
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        width: 150px;
        max-width: 800px;
        height: 100%;
        margin: 2% 1%;
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

    .card-content{
        background-color: rgb(25, 25, 25, 0.8);
        padding: 20px;
        margin: 0px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        height: 112px;
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

    .proj-title{
        color: red;
        font-size: 1.5rem !important;
        font-weight: 900;
        text-shadow: 
            -0.5px -0.5px 0 white,  
            0.5px -0.5px 0 white,
            -0.5px  0.5px 0 white,
            0.5px  0.5px 0 white;
    }
    .tech-stack{
        font-size: 1.5rem;
        font-weight: 900;
    }
    .main-skills{
        margin: auto;
        margin-top: 5%;
        max-width: 860px;
        width: 90%;
    }
    .other-skills{
        margin: auto;
        margin-top: 10%;
        max-width: 860px;
        width: 90%;
    }

    @media (max-width: 1024px) {
        .skills-container{
            padding: 8% 0%;;
        }
        .card {
            margin: 4% 1%;
            width: 120px;
            height: 100%;
        }
        .proj-title{
            color: red;
            font-size: 1rem !important;
            font-weight: 900;
            text-shadow: 
                -0.5px -0.5px 0 rgb(165, 164, 164),  
                0.5px -0.5px 0 rgb(165, 164, 164),
                -0.5px  0.5px 0 rgb(165, 164, 164),
                0.5px  0.5px 0 white;
        }
        .tech-stack{
            font-size: 1rem;
            font-weight: 900;
        }
         .main-skills{
            width: 70%;
        }
        .other-skills{
            width: 70%;
        }
    }
    @media (max-width: 1590px) {
         .card {
            margin: 4% 1%;
        }
    }
    @media (max-width: 425px) {
        .card {
            margin: 3% 1%;
            width: 50px;
            height: 50px;
        }
        .proj-title{
            color: red;
            font-size: 0.5rem !important;
            font-weight: 100;
            text-shadow: 
                -0.5px -0.5px 0 rgb(84, 83, 83),  
                0.5px -0.5px 0 rgb(84, 83, 83),
                -0.5px  0.5px 0 rgb(84, 83, 83),
                0.5px  0.5px 0 rgb(84, 83, 83);
        }
        .tech-stack{
            font-size: rem;
            font-weight: 900;
        }
        .card-content{
            padding: 5px;
            margin: 0px;
            border-radius: 10px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 40px;
        }

    }

</style>