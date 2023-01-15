<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>Tilføj admin</h1>
      </div>
      <Modal
          v-if="modalActive"
          :modal-msg="modalMsg"
          v-on:modal-close="modalClose"/>
      <div class=" row">
        <div class="adminInfo">
          <div class="col-12 input">
            <label for="email">E-mail</label>
            <input placeholder="Indtast bruger E-mail" type="text"  id="addAdmins" v-model="adminEmail">
          </div>
          <span>{{ this.functionMSG }}</span>
          <button @click="addNewAdmin" class="button">OPRET ADMIN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/functions";
import { getFunctions, httpsCallable } from "firebase/functions";

export default {
    name: "app",
    data(){
      return {
        adminEmail: "",
        functionMSG: null,
      }
    },
  methods: {
      async addNewAdmin() {
        const functions = getFunctions();
        const addNewAdmin = await httpsCallable(functions, 'addNewAdminRole');
        const result = await addNewAdmin({email: this.adminEmail})
        this.functionMSG = result.data.message;
      }
  }
};
</script>

<style lang="scss" >
@import "src/styles/global.scss";


.adminInfo {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;

  .input {
    margin: 16px 0;

    label {
      font-size: 14px;
      display: block;
      padding-bottom: 6px;
    }

    input {
      width: 100%;
      border: none;
      background-color: #f2f7f6;
      padding: 8px;
      height: 50px;
      @media (min-width: 900px) {
      }
      border: rgba(0, 0, 0, 0.5) solid 1px;

      &:focus {
        outline: none;
      }
    }
  }
}
button{
  @include primaryButton;
  align-self: center;
}


.header {
  text-align: center;
  margin-top: $top-margin;
  margin-bottom: 2rem;
  @include xs {
    margin-top: 10%;
  }
}
.base-container {
  @include layout;
}


</style>