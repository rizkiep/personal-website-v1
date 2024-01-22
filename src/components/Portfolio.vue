<template>
    <div class="row pt-5 mb-4 text-center d-flex justify-content-center" id="portfolio">
        <h2 class="col-12 pt-4 title-section" data-aos="slide-up">Portfolio</h2>
        <div class="col-12 col-md-11" data-aos="slide-right">
            <div class="glide portfolio-carousel">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides slider__slides row">
                        <li class="glide__slide col-12 col-lg-6 col-xl-4 my-3" v-for="portfolio in portfolios">
                            <div class="card text-bg-dark ">
                                <img :src="portfolio.img" class="card-img-top" :alt="'image'+portfolio.name">
                                <div class="card-body">
                                    <h5 class="card-title">{{ portfolio.name }}</h5>
                                    <h6 class="card-subtitle mb-2">{{ portfolio.project }}</h6>
                                    <p class="card-text">{{ portfolio.tag }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

const glide=new Glide('.portfolio-carousel',{
    type:'carousel',
    autoplay: 2000,
    perView: 1.8,
    hoverpause: true,
    focusAt: 'center',
    animationDuration: 900,
    breakpoints: {
    992: {
      perView: 1.35,
    },
    768: {
      perView: 1.12,
      gap:-10,
      autoplay: 2500,
    }
  }
})

onMounted(() => {
    glide.mount()
})

const portfolios=[
    {
        name:'Web Travel',
        img:'/img/travel.png',
        project:'Personal Project',
        tag:'PHP, Laravel, My SQL'
    },
    {
        name:'Sipil Utama',
        img:'/img/sipilUtama.png',
        project:'Web Developer',
        tag:'PHP, Laravel, My SQL'
    },
    {
        name:'Digital Library',
        img:'/img/perpus.png',
        project:'Web Developer',
        tag:'PHP, Laravel, My SQL'
    },
];

</script>
<style scoped>

.card{
    background-color: #1E1E2F;
}
.glide__arrow--left{
  left: -60px;
}
.glide__arrow--right{
  right: -60px;
}
.glide__bullets{
    bottom: -10px;
}
</style>