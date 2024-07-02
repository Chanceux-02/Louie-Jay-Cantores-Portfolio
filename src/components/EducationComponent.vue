<template>

<div class="education-container" id="education">

  <p class="title" data-aos="zoom-in-down">Education</p>

  <div class="education-level" data-aos="fade-up">
      <section>
        <p class="educ-title">College</p>
        <p class="school">ILOILO SCIENCE AND TECHNOLOGY UNIVERSITY</p>
        <p class="crs">Bachelor of Science in Information Systems</p>
      </section>
      <section class="date">
        <p>2019 - 2023</p>
      </section>
  </div>

  <div class="education-level" data-aos="fade-up">
      <section>
        <p class="educ-title">Senior High School</p>
        <p class="school">STI COLLEGE ILOILO</p>
        <p class="crs">Information and Communications Technology (ICT)</p>
      </section>
      <section class="date">
        <p>2017 - 2019</p>
      </section>
  </div>

  <section></section>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.education-container{
    padding: 8% 8% 2% 8%;
    height: 90vh;
    max-height: 750px;
    background-color: #191919;
    background-size: cover;
    background-position: center;
}
.education-level{
  display: flex;
  justify-content: space-between;
  text-align: start;
  width: 80%;
  margin: auto;
  margin-top: 5%;
  color: white;
  border-bottom: 1px solid black;
}
.educ-title{
  font-size: 2rem;
  font-weight: 900;
}
.school{
  font-size: 1rem;
  font-weight: 700;
}
.educ-title{
  color: #F9004D;
}

 @media (max-width: 1000px) {
  .education-container{
    height: 60vh;
  }
  .educ-title{
    font-size: 1.5rem;
    font-weight: 900;
  }
  .school{
    font-size: 0.8rem;
    font-weight: 700;
  }
  .crs{
    font-size: 0.8rem;
  }
  .date{
    font-size: 0.8rem;
    margin-top: 4%;
  }

 }

 @media (max-width: 425px) {
  .education-container{
      height: 50vh;
      max-height: 450px;
  }
  .date{
    font-size: 0.5rem;
    width: 60px;
    margin-top: 25px;
  }
  .education-level{
    width: 100%;
  }
  .educ-title{
    font-size: 1rem;
    font-weight: 900;
  }
  .school{
    font-size: 0.7rem;
    font-weight: 700;
  }
  .crs{
    font-size: 0.7rem;
  }
  .date{
    font-size: 0.5rem;
    margin-top: 4%;
  }

 }
 


</style>