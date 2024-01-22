<template>
  <div class="row mt-3 pt-md-5" id="contact">
    <div class="col-12 text-center mt-5" data-aos="slide-up">
      <h2 class="col-12 title-section">Contact Me</h2>
      <p class="col-12 text-center">You can contact me by <a class="linkedin-link" href="https://www.linkedin.com/in/rizki-edyana-putra/" target="_blank">LinkedIn</a> or this form</p>
    </div>
    <form name="submit-to-google-sheet" @submit="sendForm">
      <div class="mb-3" data-aos="slide-right">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
      </div>
      <div class="mb-3" data-aos="slide-right">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="example@gmail.com" name="email" required>
      </div>
      <div class="mb-3" data-aos="slide-right">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" placeholder="Leave your message here" id="message" style="height: 200px" name="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary" data-aos="slide-up">Submit</button>
    </form>
  </div>
  <div class="overlay remove-loader" id="loader">
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import Swal from 'sweetalert2'

const scriptURL = '<SCRIPT URL>'
const form = ref(null)
const loader=ref(null)

const sendForm = (e) => {
  e.preventDefault();
    loader.value.classList.toggle('remove-loader')
    fetch(scriptURL, { method: 'POST', body: new FormData(form.value) })
      .then(response =>{
        loader.value.classList.toggle('remove-loader')
        Swal.fire({
          title: "Success",
          text: "Your form has been sent!",
          icon: "success"
        })
        }
      )
      .catch(error => {
        loader.value.classList.toggle('remove-loader')
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
        }
      )
}

onMounted(() => {
  form.value = document.forms['submit-to-google-sheet']
  loader.value=document.getElementById('loader')
})

</script>
<style scoped>
.linkedin-link{
  text-decoration: none;
  color: #F8E7A1;;
}
svg {
 width: 4.25em;
 transform-origin: center;
 animation: rotate4 1.5s linear infinite;
}

circle {
 fill: none;
 stroke: #2C2C4F;
 stroke-width: 3;
 stroke-dasharray: 1, 500;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 147, 147, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.remove-loader{
  display: none;
}

</style>