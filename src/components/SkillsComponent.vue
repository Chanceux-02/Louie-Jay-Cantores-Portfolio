<template>

    <section class="skills-container" id="skills">

        <p class="title" data-aos="zoom-in-down">Skills</p>

        <section class="main-skills">
          
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

    </section>

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
        padding: 15% 0;
        height: auto;
        background-color: #101010;
        background-size: cover;
        background-position: center;
        margin: auto;
    }
    
    .card {
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
    }

    .card:hover{
        transform: scale(1.03);
    }

    .card img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .card-content{
        background-color: rgb(25, 25, 25, 0.8);
        padding: 20px 0;
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
        margin-top: 5%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .proj-title{
        color: red;
        font-size: 1.5rem;
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
        width: 85%;
    }

    @media (min-width: 768px) {
        .skills-container{
            padding: 15% 0;
        }
        .card-container{
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .main-skills{
            width: 90%;
            max-width: unset;
        }
        .card-content{
            height: 10rem;
        }
    }

    @media (min-width: 1280px) {
        .card-content{
            height: 14rem;
        }
        .card-content .proj-title{
            font-size: 2rem;
        }
    }

    @media (min-width: 1900px) {
        .card-container{
            gap: 5rem;
        }
        .card-content{
            height: 400px;
        }
        .card-content .proj-title{
            font-size: 3rem;
        }
        .title{
            font-size: 4rem;
        }
    }

</style>