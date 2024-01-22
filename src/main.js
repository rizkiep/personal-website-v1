import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/style.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'sweetalert2/src/sweetalert2.scss'



AOS.init({duration: 900, offset: 30});
const app = createApp(App)
library.add(faCircleArrowLeft,faCircleArrowRight,faArrowRight,faInstagram,faLinkedin,faGithub)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
