<template>

<div class="exp-container" id="experience">

  <p class="title">Experience</p>

  <div class="exp-work"  v-for="exp in expData" :key="exp.id">

    <section class="company">
      <p class="company-name">{{exp.company}}</p>
      <p class="position"><span>Position:</span> {{exp.position}}</p>
      <div class="exp-info">
        <section class="Task">
          <p>Tasks and Activities</p>
          <li  v-for="task in exp.tasks" :key="task">{{task}}</li>
        </section>
        <section class="Tools">
          <p>Technologies and Tools</p>
           <li  v-for="tech in exp.tech" :key="tech">{{tech}}</li>
        </section>
      </div>
    </section>

    <section class="dash">
      <p>-</p>
    </section>

    <section class="month">
      <p>{{exp.date}}</p>
    </section>

  </div>

</div>

</template>

<script>

import ExpData from '../datas/cardsExpData';

export default {

    data() {
        return {
             expData: ExpData,
        };
    }

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
  justify-content: space-between;
  padding: 2% 7% 2% 7% ;
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
  width: 70%;
  max-width: 800px;
}
.position{
  font-size: 1.5rem;
}
.Task{
   margin-right: 3%;
   min-width: 300px;
   width: 50%;
}
.Task p{
  font-size: 1rem;
  padding-bottom: 2%;
  border-bottom: 1px solid #32121c;
}
.Tools p{
  font-size: 1rem;
  padding-bottom: 2%;
  border-bottom: 1px solid #32121c;
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

 @media (max-width: 1000px) {

    li{
      font-size: 0.8rem;
      color: white;
    }
    .dash p{
      width: 40px;
      margin-top: 40%;
    }
    .month{
      font-size: 0.8rem;
      margin-top: 1%;
    }
    .company{
      font-size: 1.5rem;
      text-align: start;
      width: 80%;
      max-width: 800px;
    }
    .position{
      font-size: 1rem;
    }
    .Task{
      margin-right: 3%;
      min-width: 200px;
      width: 30%;
    }
    .Task p{
      font-size: 0.8rem;
      padding-bottom: 2%;
      border-bottom: 1px solid #32121c;
    }
    .Tools p{
      font-size: 0.8rem;
      padding-bottom: 2%;
      border-bottom: 1px solid #32121c;
    }
 }

@media (max-width: 425px) {

  .month p{
    font-size: 0.5rem;
    margin-top: 12px;
  }
  .dash p{
    font-size: 0.5rem;
  }

  li{
    font-size: 0.5rem;
  }
  .company{
    font-size: 1rem;
  }
  .position{
    font-size: 0.8rem;
  }
  .Task{
    min-width: 150px;
  }
  .Task p{
    font-size: 0.5rem;
  }
  .Tools p{
    font-size: 0.5rem;
  }
  .Tools{
    min-width: 150px;
  }

}


</style>