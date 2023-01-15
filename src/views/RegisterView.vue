<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>VELKOMMEN TIL <span>FIT</span> BY JULIUS</h1>
      </div>
      <div class="row d-flex justify-content-center credentials-wrapper">
        <div class="col-12 col-md-8">
          <div class="card px-5 py-5 mb-5" id="form1">
            <div class="form-data">
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                  <label for="firstName">Fornavn</label>
                </div>
                <input
                  placeholder="Skriv dit fornavn"
                  name="fornavn"
                  v-model="firstName"
                  type="text"
                />
                <div v-if="errors && errors.firstName" class="error">{{errors.firstName}}</div>
              </div>
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                  <label for="lastName">Efternavn</label>
                </div>
                <input
                  placeholder="Skriv dit efternavn"
                  name="efternavn"
                  v-model="lastName"
                  type="text"
                />
                <div v-if="errors && errors.lastName" class="error">{{errors.lastName}}</div>
              </div>
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                  <label for="userName">Brugernavn</label>
                </div>
                <input
                    placeholder="Skriv dit brugernavn"
                    name="brugernavn"
                    v-model="userName"
                    type="text"
                />
                <div v-if="errors && errors.userName" class="error">{{errors.userName}}</div>
              </div>
              <div class="forms-inputs mb-4">
                <div class="icon-wrapper">
                  <label for="email">E-mail</label>
                </div>
                <input
                  placeholder="Skriv din E-mail"
                  name="email"
                  v-model="userEmail"
                  type="text"
                />
                <div v-if="errors && errors.userEmail" class="error">{{errors.userEmail}}</div>
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
                />
                <div v-if="errors && errors.userPassword" class="error">{{errors.userPassword}}</div>
              </div>
              <div v-show="error" class="error-general">
                {{ this.errorMsg }}
              </div>
              <div>
                <button @click.prevent="register" class="w-100">OPRET</button>
              </div>
              <div class="col-12 login-link mt-3">
                <RouterLink :to="{ name: 'login' }"
                  >Har du allerede en konto?</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/auth";
import {db, auth} from "../firebase/firebaseInit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "app",
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      userEmail: "",
      userPassword: "",
      errors: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      const errors = {};

      // First name Validation
      if(!this.firstName) {
        errors.firstName = 'Skriv venligst et navn';
      } else if (this.firstName.length < 2) {
        errors.firstName = 'Dit navn skal minium indeholde 2 tegn';
      }

      // Last name Validation
      if(!this.lastName) {
        errors.lastName = 'Skriv venligst et navn';
      } else if (this.lastName.length < 2) {
        errors.lastName = 'Dit navn skal minium indeholde 2 tegn';
      }

      // Username Validation
      if(!this.userName) {
        errors.userName = 'Skriv venligst et navn';
      } else if (this.userName.length < 2) {
        errors.userName = 'Dit navn skal minium indeholde 2 tegn';
      }

      // Email Validation
      if (!this.userEmail) {
        errors.userEmail = 'Skriv venligst en Email';
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.userEmail)) {
        errors.userEmail = 'Ugyldig Email';
      }

      // Password Validation
      if(!this.userPassword) {
        errors.userPassword = 'Skriv venligst et kodeord';
      } else if (this.userPassword.length < 2) {
        errors.userPassword = 'Dit kodeord skal mindst indeholde 6 tegn';
      }

      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        this.errors = null;
      }
      if (
          this.userEmail !== "" &&
          this.userPassword !== "" &&
          this.firstName !== "" &&
          this.lastName !== "" &&
          this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await auth;
        const createUser = createUserWithEmailAndPassword(firebaseAuth, this.userEmail, this.userPassword);
        const result = await createUser;
        await setDoc(doc(db, "users", result.user.uid), {
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          userEmail: this.userEmail,
          subscriber: false
        });
        this.$router.push({ name: 'home' });
        return;
      }
      this.error = true;
      this.errorMsg = "Udfyld venligst alle felter";
      return;
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  text-align: left;
  font-size: 0.9rem;
  font-family: "Roboto Condensed";
  margin-top: 4px;
}
</style>
