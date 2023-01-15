<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>Opskrifter</h1>
      </div>
      <div class="row card-section">
        <div class="card-recipes col-6 col-md-4 col-xl-3" v-for="(recipe, index) in recipes" :key="index">
          <div class="recipe-card-body">
            <figure>
              <div class="image-overlay">
                <img class="img-fluid" :src="recipe.url" :alt="recipe.alt" />
              </div>
              <figcaption>
                {{ recipe.title }}
                <RouterLink :to="recipe.route"
                  >LÆS MERE HER <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { RouterLink } from "vue-router";


export default {
  name: "app",
  components: {
    RouterLink: RouterLink,
  },
  data() {
    return {
      recipes: [
        { title:"KALORIELET LAKS", url: "/src/assets/images/recipes/img1.png",
          alt: "I love you nature", route:"/singleRecipe" },
        { title: "20 MINUTTERS RISRET", url: "/src/assets/images/recipes/img2.png",
          alt: "I love you nature", route:"/" },
        { title:"PROTEIN COOKIES", url: "/src/assets/images/recipes/img3.png",
          alt: "I love you nature", route:"/" },
        { title:"BULK BURGERS", url: "/src/assets/images/recipes/img4.png",
          alt: "I love you nature", route:"/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout;
}

.card-section {
  margin: 3rem 0 2.5rem 0;
  .card-recipes {
    padding-left: 0;
  }
}

.header {
  text-align: left;
  margin-top: $top-margin;
}

.recipe-card-body {
  position: relative;
  display: inline-block;
  .image-overlay {
    background-color: $footer-colour;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      opacity: 0.6;
    }
  }
  figure:after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  figcaption {
    @include sm {
      font-size: 1.1rem;
    }
    @include lg {
      font-size: 1.25rem;
    }
    font-family: $header-font;
    font-weight: 700;
    font-size: 1rem;
    position: absolute;
    width: 100%;
    color: #fff;
    left: 0;
    bottom: 0;
    margin: 1em;
    z-index: 2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    a {
      font-size: 0.8rem;
      display: block;
      margin: 0.4rem 0 0.6rem 0;
      //margin: 0.7rem 0 1rem 0;
      text-decoration: none;
      color: #fff;
      @include sm {
        font-size: 1rem;
      }
    }
  }
}
</style>
