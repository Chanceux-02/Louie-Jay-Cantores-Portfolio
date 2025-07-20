<template>

    <section class="skills-container-main" id="skills">

        <h2 class="title" data-aos="zoom-in-down">Skills</h2>

        <div class="skills-container">
            <div class="skill-card" v-for="skill in skills" :key="skill.id" data-aos="flip-up">
                <section class="skill-content">
                    <div class="skill-overlay"></div>
                    <img class="skill-image" :src="skill.image" :alt="skill.skill" />
                    <h3 class="skill-title">{{skill.skill}}</h3>
                    <p class="skill-description">{{skill.description}}</p>
                </section>
            </div>
        </div>

    </section>

</template>

<script>

// import CardComponent from './child/CardComponent.vue';
import {skills, techStack} from '../datas/cardsSkillsData';


export default {

    components: {
        // CardComponent,
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

    .overlay::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(25, 25, 25, 0.6);
        z-index: 1;
    }

    .skills-container-main{
        padding: 40px 0;
        background-color: #202020;
    }

    .skills-container{
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        margin-top: 10%;
    }

    .skill-card{
        display: flex;
        flex-direction: column;
        border: 1px solid #3a1316;
        border-radius: 10px;
        padding: 20px 10px 10px 10px;
        background-color: #282937;
    }

    .skill-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .skill-image{
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }

    .skill-title{
        color: #F9004D;
        font-weight: 800;
        font-size: 1rem;
    }

    .skill-description{
       color: white;
       font-size: 0.8rem;
    }

    @media (min-width: 768px) {
        .skills-container{
            grid-template-columns: repeat(3, 1fr);
        }

        .skills-container-main{
            padding: 50px 0;
        }
    }

    @media (min-width: 1024px) {
        .skills-container{
            max-width: 2000px;
            grid-template-columns: repeat(5, 1fr);
            margin-top: 5%;
        }
        .skill-card{
            padding-bottom: 0;
            padding-left: 5px;
            padding-right: 5px;
        }

        .skills-container-main{
            padding: 80px 0;
        }
    }

    @media (min-width: 1280px) {

        .skills-container{
            gap: 40px;
            grid-template-columns: repeat(5, 1fr);
        }
        .skill-card{
            padding: 20px;
            padding-bottom: 0;
        }
        .skill-content{
            align-items: start;
        }

        .skill-title{
            font-size: 1.5rem;
            text-align: start;
            margin-top: 40px;
            margin-bottom: 0px;
        }

        .skill-description{
            font-size: 1rem;
            text-align: start;
            margin-top: 10px;
        }
    }

    @media (min-width: 1440px) {
        .skill-card{
            padding: 20px 30px;
        }
    }

    @media (min-width: 1700px) {
        .skill-card{
            padding: 30px;
        }
    }

</style>