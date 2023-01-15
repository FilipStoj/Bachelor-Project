<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>VELKOMMEN TIL <span>FIT</span> BY JULIUS</h1>
      </div>
      <div class="row d-flex justify-content-center credentials-wrapper">
        <div class="col-12 col-md-8">
          <div class="card px-5 py-5 mb-5" id="form1">
            <div class="form-data" v-if="!submitted">
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                <label for="email">E-mail</label>
                </div>
                <input
                    placeholder="Skriv din E-mail"
                    name="email"
                    v-model="userEmail"
                    type="text">
              </div>
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                <label for="password">Kodeord</label>
                </div>
                <input
                    name="password"
                    placeholder="Skriv dit kodeord"
                    autocomplete="off"
                    type="password"
                    v-model="userPassword"
                    >
              </div>
              <div v-show="error" class="error">
                {{ this.errorMsg }}
              </div>
              <div >
                <button @click.prevent="signIn" class="w-100">LOGIN</button>
              </div>
              <div class="col-12 login-link mt-3">
                <RouterLink :to="{name: 'forgotPassword'}">Har du glemt dit kodeord?</RouterLink>
              </div>
              <div class="col-12 login-link mt-3">
                <RouterLink class="cta-create" :to="{name: 'register'}">Opret konto her!</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import "firebase/auth";
import { auth } from '../firebase/firebaseInit.js';
import {  signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "app",
  components: {
    RouterLink: RouterLink,
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    signIn(){
      signInWithEmailAndPassword(auth, this.userEmail, this.userPassword)
          .then(() => {
            //signed in
            this.$router.push({ name: 'home' });
            this.error = false;
            this.errorMsg = "";
            console.log(auth.currentUser.uid)
          })
          .catch((error) => {
            this.error = true;
            this.errorMsg = "Udfyld venligst alle felter " + error.message;
          })
    }
  }
};
</script>

<style lang="scss" >
@import "src/styles/global.scss";

.credentials-wrapper{
  @include credentialsWrapper;
}
.base-container {
  @include layout;
}

.header {
  text-align: center;
  margin-top: $top-margin;
  margin-bottom: 2rem;
  @include xs {
    margin-top: 10%;
  }
  h1{
    background-image: none;
    span{
      color: $brand-colour;
    }
  }
}
.error-general {
  text-align: center;
  color: red;
  margin-bottom: 1rem;
}

.login-link {
  font-family: "Roboto Condensed";
  font-weight: 300;
}
.cta-create {
  font-weight: 400;
}
</style>
