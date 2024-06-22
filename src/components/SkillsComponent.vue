<template>

    <div class="skills-container">

        <p class="title">Skills</p>

        <section class="main-skills">
          
          <p class="tech-stack">Main Tech Stack</p>

          <div class="card-container">

              <!-- looping throug datas -->

              <CardComponent v-for="skill in skills" :key="skill.id" :backgroundImage="skill.image">
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

              <CardComponent v-for="tech in techStacks" :key="tech.id" :backgroundImage="tech.image">
                  <div class="card-content">
                      <section>
                          <p class="proj-title">{{tech.skill}}</p>
                          <p>test</p>
                      </section>
                  </div>
              </CardComponent>

          </div>
        </section>

    </div>

</template>

<script>

import CardComponent from './child/CardComponent.vue';
import {skills, techStack} from '../cardsSkillsData';


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
            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s);
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
            width: 200px;
            max-width: 800px;
            height: 150px;
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

        /* Text labels */
        .card p {
            font-size: 14px;
        }

        .card-content{
            background-color: rgb(25, 25, 25, 1);
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
        .tech-stack{
            font-size: 1.5rem !important;
            font-weight: 900;
        }
        .main-skills{
            margin-top: 5%;
        }
        .other-skills{
            margin-top: 10%;
        }

</style>