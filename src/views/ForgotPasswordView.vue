<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>GLEMT KODEORD</h1>
        <h2>Indtast din E-mail for at nulstille adgangskode</h2>
      </div>
      <div class="row d-flex justify-content-center credentials-wrapper">
        <div class="col-12 col-md-8">
          <div class="card px-5 py-5 mb-5" id="form1">
            <div class="reset-password">
              <Modal
                  v-if="modalActive"
                  :modal-msg="modalMsg"
                  v-on:modal-close="modalClose"/>
            <div class="form-data">
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                  <label for="email">E-MAIL</label>
                </div>
                <input
                    placeholder="Skriv din E-mail"
                    name="email"
                    v-model="userEmail"
                    type="text">
              </div>
              <!--TODO tjek om det virker med email recovery -->
              <button @click.prevent="passwordReset">Nulstil adgangskode</button>
              <div class="col-12 login-link mt-3">
                <RouterLink class="cta-create" :to="{name: 'register'}">Har du ingen konto?</RouterLink>
              </div>
              <div class="col-12 login-link mt-3">
                <RouterLink :to="{name: 'login'}">Tilbage til login</RouterLink>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import { RouterLink } from "vue-router";
import { auth } from '../firebase/firebaseInit.js';
import { sendPasswordResetEmail } from "firebase/auth";



export default {
  name: 'app',
  data (){
    return{
      userEmail: null,
      modalActive: false,
      modalMsg: '',
      loading: null,
    }
  },
  components:{
    RouterLink,
    Modal
  },
  methods:{
    passwordReset(){
      this.loading = true;
      sendPasswordResetEmail(auth, this.userEmail)
          .then(() =>{
            this.modalActive = true;
            this.modalMsg = 'Hvis der findes en bruger med din email, vil du modtage en mail.';
            this.loading = false;
          }).catch(err =>{
            this.modalMsg = 'Der er ikke registreret en bruger under denne email. '
                console.log(err.message);
            this.loading = false;
            this.modalActive = true;
      })

    },
    modalClose(){
      this.modalActive = !this.modalActive;
      this.userEmail = '';
    }
  }
}

</script>

<style lang="scss" scoped>
.reset-password{
  position: relative;
}

// TODO button skal styles
button{
  width:100%;
}

</style>