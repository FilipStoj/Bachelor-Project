<template>
  <div class="base-container">
    <h1>Kontakt mig</h1>
    <form @submit.prevent="handleSubmit">
      <label>Navn<span class="text-danger">*</span></label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Dit Navn"
      >
      <div v-if="errors && errors.name" class="error">{{errors.name}}</div>
      <label>Email<span class="text-danger">*</span></label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Din Email"
      >
      <div v-if="errors && errors.email" class="error">{{errors.email}}</div>
      <label>Ønske<span class="text-danger">*</span></label>
      <input
          type="text"
          v-model="wish"
          name="wish"
          placeholder="Dit ønske Fx: 'vægttab'"
      >
      <div v-if="errors && errors.wish" class="error">{{errors.wish}}</div>
      <label>Alder<span class="text-danger">*</span></label>
      <input
          type="number"
          v-model="age"
          name="age"
          placeholder="Din Alder"
      >
      <div v-if="errors && errors.age" class="error">{{errors.age}}</div>
      <label>Vægt<span class="text-danger">*</span></label>
      <input
          type="number"
          v-model="weight"
          name="weight"
          placeholder="Din Vægt"
      >
      <div v-if="errors && errors.weight" class="error">{{errors.weight}}</div>
      <label>Message<span class="text-danger">*</span></label>
      <textarea
          type="text"
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Besked">
      </textarea>
      <div v-if="errors && errors.message" class="error">{{errors.message}}</div>

      <button type="submit" value="Send">Send Besked</button>
    </form>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export default {
  name: 'app',
  data() {
    return {
      name: '',
      email: '',
      wish: '',
      age: '',
      weight: '',
      message: '',
      errors: null,
    }
  },
  methods: {
    sendEmail() {
      // ENV FILE CREDENTIALS
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_API_KEY;
      try {
        emailjs.sendForm(serviceID, templateID, 'form', publicKey, {
          name: this.name,
          email: this.email,
          wish: this.wish,
          age: this.age,
          weight: this.weight,
          message: this.message
        })
      } catch (error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.wish = ''
      this.age = ''
      this.weight = ''
      this.message = ''
    },
    handleSubmit() {
      const errors = {};
      // Name Validation
      if(!this.name) {
        errors.name = 'Skriv venligst et navn';
      } else if (this.name.length < 2) {
        errors.name = 'Dit navn skal minium indeholde 2 tegn';
      }

      // Email Validation
      if (!this.email) {
        errors.email = 'Skriv venligst en Email';
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
        errors.email = 'Ugyldig Email';
      }

      // Wish Validation
      if(!this.wish) {
        errors.wish = 'Indtast venligst din alder';
      } else if (this.wish.length < 5) {
        errors.wish = 'Din ønske skal minium indeholde 5 tegn';
      }

      // Age Validation
      if(!this.age) {
        errors.age = 'Indtast venligst din alder';
      } else if (this.age.length < 2) {
        errors.age = 'Din alder skal minium indeholde 2 tegn';
      }

      // Weight Validation
      if(!this.weight) {
        errors.weight = 'Indtast venligst din vægt';
      } else if (this.weight.length < 2) {
        errors.weight = 'Din vægt skal minium indeholde 2 tegn';
      }

      // Message Validation
      if(!this.message) {
        errors.message = 'Skriv venligst en besked, så vi kan hjælpe dig';
      } else if (this.message.length < 5) {
        errors.message = 'Din besked skal minium indehold et ord';
      }

      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        this.errors = null;
        return this.sendEmail() & this.showAlert();
      }
    },
    showAlert() {
      Swal.fire({
        icon: 'success',
        title: 'Email sendt',
        text: 'Jeg vender tilbage hurtigst muligt',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  text-align: center;
  margin: 6.6875rem auto 4rem auto;
  width: 50%;
}

label {
  font-family: "Roboto Condensed";
  font-weight: bold;
  color: $font-colour;
  float: left;
  margin-top: 15px;
  margin-bottom: 0.2rem;
}

input[type=text], [type=email], [type=number], textarea {
  width: 100%;
  padding: 12px 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: vertical;
  font-family: "Roboto Condensed";
  font-size: 0.9rem;

}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.error {
  color: #DC3545;
  font-size: 0.8rem;
  text-align: left;
  font-weight: bold;
  font-family: "Roboto Condensed";
  margin-top: 0.15rem;
}

button {
  @include primaryButton;
}
</style>