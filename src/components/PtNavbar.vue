<template>
  <nav class="navbar navbar-expand-lg" style="position: sticky; top: 0;">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img :src="image" />
      </RouterLink>
      <button
          id="toggler1"
          @click="hideOnOpen"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          aria-controls="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <button
          class="navbar-toggler d-none"
          type="button"
          id="toggler2"
          @click="close">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <RouterLink to="/blog">BLOG</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/recipes">OPSKRIFTER</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="subscribed" to="/videos">VIDEOER</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about">OM MIG</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Booking">BOOKING</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact">KONTAKT</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink v-if="admin" to="/createPost">OPRET BLOG</RouterLink>
          </li>
        </ul>
        <RouterLink v-show="!user" to="/login">
          <button class="loginButton">Login</button>
        </RouterLink>
        <div @click="profileMenuToggle" v-if="user" ref="profile" class="profile">
          <span >{{ this.$store.state.userInitials }}</span>
          <div class="profileMenu" v-show="profileMenu">
            <div class="info mt-2 mb-2">
              <p class="initials">
                {{ this.$store.state.userInitials }}
              </p>
              <div class="right">
                <p >{{ this.$store.state.userFirstName }} {{ this.$store.state.userLastName }}</p>
                <p>{{ this.$store.state.userUsername }}</p>
                <p >{{ this.$store.state.userEmail }}</p>
              </div>
            </div>

              <div class="options">
                <div class="option">
                  <RouterLink class="option" :to="{name: 'userProfile'}">
                  <UserIcon class="icon"/>
                    <p>Profile</p>
                  </RouterLink>
                </div>
                <div v-if="admin" class="option">
                  <RouterLink class="option" :to="{name: 'admin'}">
                  <AdminIcon class="icon"/>
                    <p>Admin</p>
                  </RouterLink>
                </div>
                  <div class="option">
                    <div @click="signOutUser" class="option" >
                      <SignOutIcon class="icon"/>
                      <p>Log Ud</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Logo from "../assets/images/tempLogo.png";
import SignOutIcon from "../assets/icons/sign_out.svg";
import UserIcon from "../assets/icons/user.svg";
import AdminIcon from "../assets/icons/admin.svg";
import { RouterLink } from "vue-router";
import { getAuth ,signOut } from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../firebase/firebaseInit.js";


export default {
  name: "app",
  components: {
    RouterLink,
    SignOutIcon,
    UserIcon,
    AdminIcon
  },

  data: function () {
    return {
      image: Logo,
      profileMenu: false,
    };
  },
  watch: {
    $route() {
      document.getElementById("collapse").classList.remove("show");
    },

  },
  computed: {
    // TODO find ud af hvilket content der skal vises når man er logget ind
    user () {
      return this.$store.state.user;
    },
    admin () {
      return this.$store.state.isUserAdmin;
    },
  },
  methods: {
    profileMenuToggle (e){
      if(e.target === this.$refs.profile){
        this.profileMenu = !this.profileMenu;
      }
    },
    signOutUser () {
      const auth = getAuth();
      signOut(auth).then(() =>{
        window.location.reload();
      }).catch((error) =>{
        console.log(error)
      })
    },
    async subscribed(){
      const myDocRef = doc(db, 'users', auth.currentUser.uid);
      const myDoc = await getDoc(myDocRef);
      console.log(myDoc.data().subscriber)
      return myDoc.data().subscriber
    },
    close() {
      document.getElementById("collapse").classList.remove("show");
      document.getElementById("toggler1").classList.remove("d-none");
      document.getElementById("toggler2").classList.add("d-none");
    },
    hideOnOpen() {
      document.getElementById("toggler1").classList.add("d-none")
      document.getElementById("toggler2").classList.remove("d-none")
    },
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";

body {
  display: initial;
}

.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: $header-colour;
  background-color: $brand-colour;
  span {
    pointer-events: none;
  }
  .profileMenu {
    position: absolute;
    background-color: $footer-colour;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    width: 15rem;
    top: 3rem;
    left: 2.5rem;

    @include lg {
      left: -15rem;
      top: 3.75rem;
    }

    .info {
      p {
        margin: 0 !important;
      }
      display: flex;
      align-items: center;
      padding: 0 0.9375rem 0 0.9375rem;
      border-bottom: 1px solid #fff;
      .initials {
        position: initial;
        width: 2.5rem;
        height: 2.5rem;
        background-color: $brand-colour;
        color: $header-colour;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .right {
        flex: 1;
        margin-left: 1.5rem;
        p:nth-child(1) {
          font-size: 0.875rem;
        }
        p:nth-child(2),
        p:nth-child(3) {
          font-size: 0.75rem;
        }
      }
    }
    .options {
      padding: 0 0.9375rem 0 0.9375rem;
      .option {
        text-decoration: none;
        color: $header-colour;
        display: flex;
        align-items: center;
        .icon {
          width: 18px;
          height: auto;
        }
        p {
          font-size: 0.875rem;
          margin-left: 0.75rem;
        }
        &:last-child {
          margin-bottom: 0rem;
        }
      }
    }
  }
}

.navbar {
  background: $nav-colour;
  padding: 0 1.26rem 0 1.25rem !important;
  z-index: 999;

  .collapse {
    background-color: $nav-colour;
  }

  .navbar-brand {
    margin: 0.5rem !important;
    @include lg {
      margin-right: 1rem !important;
    }
  }

  .navbar-nav {
    width: 100%;
    justify-content: center;
  }

  .nav-item {
    margin-top: 1.5rem !important;
    position: relative;
    @include lg {
      margin: 0 2rem 0 0 !important;
    }

    a {
      color: $font-colour;
      font-family: $header-font;
      font-weight: $nav-weight;
      font-size: 1.2rem;
      text-decoration: none;
      padding: 1rem 0;
    }

    &:hover {
      color: $accent-colour;
    }

    &:after {
      display: block;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #000000;
      width: 0%;
      content: "";
      height: 4px;
      transition: all 0.5s;
    }

    &:hover:after {
      width: 100%;
    }
  }
  .loginButton {
    @include primaryButton;
    @include xs {
      display: none;
    }
    @include lg {
      display: block;
    }
  }

  .show {
    .loginButton {
      display: block;
      margin: 3.125rem 0 3.125rem 0 !important;
    }
  }
}
</style>
