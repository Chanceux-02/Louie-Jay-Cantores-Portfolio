<template>

<div class="exp-container">

  <p class="title">Experience</p>

  <div class="exp-work">

    <section class="company">
      <p class="company-name">Forty Degrees Celcius Inc.</p>
      <p class="position"><span>Position:</span> Web Developer</p>
      <div class="exp-info">
        <section>
          <p class="Task">Tasks and Activities</p>
          <li>Feature development</li>
          <li>Bug fixing</li>
          <li>Specification integration</li>
          <li>API creation</li>
          <li>Supporting app development</li>
          <li>Website maintenance</li>
        </section>
        <section>
          <p class="Task">Technologies and Tools</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/jQuery</li>
          <li>PHP/CakePHP</li>
          <li>Xampp</li>
          <li>Docker</li>
          <li>github</li>
          <li>Jira</li>
        </section>
      </div>
    </section>

    <section class="dash">
      <p>----</p>
    </section>

    <section class="month">
      <p>August - February</p>
    </section>

  </div>


  <div class="exp-work">

    <section class="company">
      <p class="company-name">College: Capstone Project</p>
      <p class="position"> <span>Position:</span> Web Developer, Team Leader</p>
      <div class="exp-info">
        <section>
          <p class="Task">Tasks and Activities</p>
          <li>Developed a web-based booking system <br> for motorcycle taxi
              transportaion as part of a team project
          </li>
       
        </section>
        <section>
          <p class="Task">Technologies and Tools</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/jQuery</li>
          <li>PHP/Laravel</li>
          <li>Xampp</li>
          <li>github</li>
        </section>
      </div>
    </section>

    <section class="dash">
      <p>----</p>
    </section>

    <section class="month">
      <p>2023</p>
    </section>

  </div>


  <div class="exp-work">

    <section class="company">
      <p class="company-name">Senior High Scool: School Project and Science Fair</p>
      <p class="position"><span>Position:</span> Developer, Team Leader</p>
      <div class="exp-info">
        <section>
          <p class="Task">Tasks and Activities</p>
          <li>Developed a blind assistant tool using arduino</li>
          <li>Developed a static websites.</li>
       
        </section>
        <section>
          <p class="Task">Technologies and Tools</p>
          <li>Arduino</li>
          <li>C++.</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </section>
      </div>
    </section>

    <section class="dash">
      <p>----</p>
    </section>

    <section class="month">
      <p>2018</p>
    </section>

  </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.exp-container{
    padding: 8% 8% 2% 8%;
    height: auto;
    min-height: 50vh;
    background-color: #101010;
    background-size: cover;
    background-position: center;
}

.exp-work{
  display: flex;
  justify-content: space-around;
  padding: 2% 0 2% 0 ;
  border-bottom: 1px solid black;

}

p{
  color: white;
}
li{
  font-size: 1rem;
  color: white;
}

.company{
  font-size: 2rem;
  text-align: start;
  width: 40%;
}
.position{
  font-size: 1.5rem;
}
.Task{
  font-size: 1rem;

}
.month, .dash{
  padding-top: 2%;
}
.exp-info{
  display: flex;
  justify-content: space-between;
}
.company-name, span{
  color: #F9004D;
}


</style>