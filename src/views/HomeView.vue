<template>
  <main class="container pt-3">
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </main>
  <Footer>
  </Footer>
</template>
<script>
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default{
  components:{About,Skills,Portfolio, Contact,Footer}
}
</script>

