<template>
    <div class="row pt-5 my-0" id="about">
        <div class="col-12 col-md-6 col-xl-8 pt-md-5" data-aos="fade-right">
            <h2 class="mb-0 pb-0" style="font-weight:400;">Hello! My name is </h2>
            <h1 class="mt-0 pt-0"><span id="typed"></span></h1>
            <h3 class="mt-2" style="font-weight:400;">Web Developer</h3>
            <div class="d-flex d-md-none justify-content-center pt-2">
                <img class="profile" src="../assets/img/profile.JPG" alt="profile">
            </div>
            <p class="mt-4">As a web developer, I’ve had the opportunity to work on some exciting projects. Feel free to browse through my portfolio section to see my work. I’m currently open to full-time, part-time, and freelance job opportunities. If you need a web developer whose skills and experience match mine, please don’t hesitate to contact me.</p>
            <a href="#contact">Contact me <font-awesome-icon icon="fa-solid fa-arrow-right"/></a>
        </div>
        <div class="col-12 col-md-6 col-xl-4 d-md-flex d-none justify-content-center justify-content-md-end pt-5" data-aos="fade-left">
            <img class="profile" src="../assets/img/profile.JPG" alt="profile">
        </div>
    </div>
</template>
<script setup>
import Typed from 'typed.js';
import { onMounted } from 'vue';
import { ref } from 'vue'; 
const typed=ref(null)

onMounted(()=>{
    typed.value=new Typed('#typed',{
        strings: ['Rizki Edyana Putra'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 500,
        loop: true
    })
})

</script>
<style scoped>

a{
    text-decoration: none;
    color: #F8E7A1;
}
p{
    line-height: 36px;
    max-width: 600px;
    text-align: justify;
}
</style>