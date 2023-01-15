<template>
  <Navbar v-if="!disableNavigation"></Navbar>
  <RouterView/>
  <PtFooter v-if="!disableNavigation"></PtFooter>
</template>

<script setup>
import PtFooter from "./components/PtFooter.vue";
import Navbar from "@/components/PtNavbar.vue";
import { RouterView } from "vue-router";



</script>
<script>
import { auth } from './firebase/firebaseInit.js';
import { onAuthStateChanged } from "firebase/auth";
export default {
  name: 'app',
  data (){
    return {
      disableNavigation: null,
    };
  },
  created(){
    onAuthStateChanged(auth, (user) =>{
      this.$store.commit("userUpdate", user);
      if(user){
        this.$store.dispatch('getCurrentUser', user);
      }
    })
    this.checkRoute();
    this.$store.dispatch("getBlogPost");
    },
  methods:{
    checkRoute(){
      if (this.$route.name  === "login" ||
          this.$route.name === "forgotPassword"||
          this.$route.name === "register"){
        this.disableNavigation = true;
        return;
      }
      this.disableNavigation = false;
    }
  },
  watch:{
    $route(){
      this.checkRoute();
    }
  }
}
</script>

<style>
</style>
