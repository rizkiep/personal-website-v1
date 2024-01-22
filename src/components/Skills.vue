<template class="mb-4">
    <div class="row mt-2 pt-md-5 mt-md-3" id="skill">
      <h2 class="mt-5 mb-4 text-center title-section" data-aos="fade-up">My Skill</h2>
    </div>
    <div class="row" data-aos="fade-right">
        <div class="col-lg-3 mb-4 d-none d-lg-flex justify-content-center" v-for="skill in skills">
          <div class="card text-center">
            <h3 class="text-uppercase">{{ skill }}</h3>
            <img class="my-3" :src="'/img/icon/' + skill + '.svg'" :alt="'icon '+skill">
          </div>
        </div>
    </div>
    <!-- Carousel -->
    <div class="row m-0 p-0 d-flex d-lg-none justify-content-center" data-aos="fade-right">
      <div class="col-12 col-md-11">
        <div class="glide skill-carousel ms-auto">
          <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide_slide" v-for="(skill, index) in skills.slice(0,4)">
                  <div class="card text-center mb-4 mx-auto">
                    <h3 class="text-uppercase">{{ skill }}</h3>
                    <img class="my-3" :src="'/img/icon/' + skill + '.svg'" :alt="'icon '+skill">
                  </div>
                  <div class="card text-center mx-auto">
                    <h3 class="text-uppercase">{{ newSkills[index] }}</h3>
                    <img class="my-3" :src="'/img/icon/' + newSkills[index] + '.svg'" :alt="'icon '+newSkills[index]">
                  </div>
                </li>
              </ul>
          </div>
          <div class="glide__arrows d-none d-md-flex" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left arrow-slider" data-glide-dir="<">
                <font-awesome-icon class="icon-arrow" icon="fa-solid fa-circle-arrow-left icon-arrow"/>
            </button>
            <button class="glide__arrow glide__arrow--right arrow-slider" data-glide-dir=">">
                <font-awesome-icon class="icon-arrow" icon="fa-solid fa-circle-arrow-right"/>
            </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
              <button class="glide__bullet" data-glide-dir="=0"></button>
              <button class="glide__bullet" data-glide-dir="=1"></button>
              <button class="glide__bullet" data-glide-dir="=2"></button>
              <button class="glide__bullet" data-glide-dir="=3"></button>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

const skills=['html','css','javascript','php','mysql','bootstrap','vuejs','laravel'];
const newSkills=skills.slice(4,8)
const glide=new Glide('.skill-carousel',{
    type:'carousel',
    autoplay: 2100,
    perView: 2,
    hoverpause: true,
    animationDuration: 900,
    gap:170,
    breakpoints: {
    768: {
      perView: 2,
      gap:30,
    }
  }
})
onMounted(() => {
    glide.mount()
})
</script>
<style scoped>
img{
    height: 120px;
    z-index: 1;
}
.card {
  width: 190px;
  height: 254px;
  background: #2C2C4F;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h3 {
  z-index: 1;
  color: white;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, #0B39FC, #F542D5);
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}
.glide__arrow--left{
  left: -60px;
}
.glide__arrow--right{
  right: -60px;
}
.glide__bullets{
  bottom:-20px;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}
@media (max-width:576px) {
    img{
        height: 80px;
    }
    .card {
        width: 150px;
        height: 201px;
    }
    h3{
        font-size: 20px;
    }
}
</style>