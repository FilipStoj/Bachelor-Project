<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>Profil oplysninger</h1>
      </div>
      <Modal
          v-if="modalActive"
          :modal-msg="modalMsg"
          v-on:modal-close="modalClose"/>
      <div class="row">
        <div class="profile-info">
        <div class="initials">
          {{ $store.state.userInitials }} </div>
          <div class="col-12 input">
            <label for="firstName">Fornavn</label>
            <input type="text"  id="firstName" v-model="firstName">
          </div>
          <div class="col-12 input">
            <label for="lastName">Efternavn</label>
            <input type="text"  id="firstName" v-model="lastName">
          </div>
          <div class="col-12 input">
            <label for="username">Brugernavn</label>
            <input type="text"  id="username" v-model="username">
          </div>
          <div class="col-12 input">
            <label for="email">E-Mail</label>
            <input disabled type="text"  id="email" v-model="email">
          </div>
          <button class="save-change" @click="updateProfile">Gem Ændringerne</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: 'app',
  data (){
    return{
      modalActive: false,
      modalMsg: 'Ændringerne er blevet gemt!',
    }
  },
  components:{
    Modal
  },
  methods: {
    modalClose(){
      this.modalActive = !this.modalActive;
    },
    updateProfile(){
      this.$store.dispatch("userUpdateSettings");
      this.modalActive = ! this.modalActive;
    }
  },
  computed: {
    firstName: {
      get(){
        return this.$store.state.userFirstName
      },
      set(payload){
        this.$store.commit("changeUserFirstName", payload)
      },
    },
    lastName: {
      get(){
        return this.$store.state.userLastName
      },
      set(payload){
        this.$store.commit("changeUserLastName", payload)
      },
    },
    username: {
      get(){
        return this.$store.state.userUsername
      },
      set(payload){
        this.$store.commit("changeUserUsername", payload)
      },
    },
    email() {
      return this.$store.state.userEmail
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/global.scss";

// TODO kan den evt ikke lægges ind i global.scss
.base-container {
  @include layout;
}

.header {
  text-align: center;
  margin-top: $top-margin;
  @include xs {
    margin-top: 10%;
  }
}

.profile-info {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;

  .initials {
    position: initial;
    width: 80px;
    height: 80px;
    font-size: 32px;
    background-color: $brand-colour;
    color: #fff;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .adminBadge {
    display: flex;
    align-self: center;
    color: #fff;
    font-size: 14px;
    padding: 8px 24px;
    border-radius: 8px;
    background-color: #303030;
    margin: 16px 0;
    text-align: center;
    text-transform: capitalize;

    .icon {
      width: 14px;
      height: auto;
      margin-right: 8px;
    }
  }

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
.save-change{
  @include primaryButton;
  align-self: center;
}

</style>