import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/index.js';
import Vue3Editor from 'vue3-editor';
import { auth } from './firebase/firebaseInit.js';
import { onAuthStateChanged } from "firebase/auth";


import "/src/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


let app;

onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App).use(store).use(router).use(Vue3Editor).mount('#app')
    }
    if (user) {
        //store.dispatch('fetchUserProfile', user)
    }
})







