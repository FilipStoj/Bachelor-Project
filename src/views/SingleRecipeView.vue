<template>
  <div class="base-container">
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-4">
          <img class="img-fluid recipe-img" :src="imgSrc" />
        </div>
        <div class="d-none d-md-flex col-8">
          <p>{{ recipeDesc }}</p>
        </div>
        <div
            class="recipe-header d-flex justify-content-center col-12 mt-2 mb-2"
        >
          <img src="../assets/images/recipes/time.svg" alt="" /> {{ time }}
        </div>
        <div class="offset-1 offset-sm-0 col-5 col-sm-3 mb-1 nutrient-info">
          <div>
            <span>
              <img src="../assets/images/recipes/fat.svg" alt="" />
              FEDT <span>14g pr. portion</span></span
            >
          </div>
        </div>
        <div class="offset-1 offset-sm-0 col-4 col-sm-3 nutrient-info mb-1">
          <div>
            <span>
              <img src="../assets/images/recipes/carbonhydrates.svg" alt="" />
              KULHYDRATER <span>25g pr. portion</span></span
            >
          </div>
        </div>
        <div
          class="offset-1 offset-sm-0 col-5 col-sm-3 justify-content-sm-end nutrient-info"
        >
          <div>
            <span>
              <img src="../assets/images/recipes/protein.svg" alt="" />
              PROTEIN <span>18g pr. portion</span></span
            >
          </div>
        </div>
        <div
          class="offset-1 offset-sm-0 col-4 col-sm-3 justify-content-sm-end nutrient-info"
        >
          <div>
            <span>
              <img src="../assets/images/recipes/calories.svg" alt="" />
              KALORIER <span>38g pr. portion</span></span
            >
          </div>
        </div>
        <div class="col-12 mt-2">
          <p class="d-md-none">
            {{ recipeDesc }}
          </p>
        </div>
      </div>
      <div class="row ingredients">
        <div class="col-sm-6">
          <div class="col-12 d-flex ingredients-header">
            <img src="../assets/images/recipes/ingredients.svg" alt="" />
            <h2>ingredienser</h2>
          </div>
          <div class="col-12">
            <ul>
              <li class="mt-2" v-for="(i, index) in ingredients" :key="index">
                {{ i }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="col-12 d-flex method-header">
            <img src="../assets/images/recipes/cooking.svg" />
            <h2>fremgangsmetode</h2>
          </div>
          <div class="col-12 mt-3">
            <ol type="1">
              <li class="mt-1" v-for="(s, index) in steps" :key="index">
                {{ s }}
              </li>
            </ol>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center mb-4">
          <RouterLink class="back-to-recipes" to="/recipes">TILBAGE TIL OPSKRIFTER</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "app",
  components: {
    RouterLink: RouterLink,
  },
  data() {
    return {
      title: "KALORIELET LAKS",
      imgSrc: "src/assets/images/recipes/img1.png",
      time: "15min",
      recipeDesc:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. " +
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." +
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, " +
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." +
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.from a Lorem Ipsum passage The standard chunk.",
      ingredients: [
        "250g peanutbutter",
        "2 store æg",
        "225g kokosolie",
        "200g kokossukker",
        "75g chokoladeknapper",
        "100g mel",
        "150g proteinpulver",
      ],
      steps: [
        "Først skal du komme peanut butter i en skål og sætte det i køleskabet, så det sætter sig og bliver fast.",
        "Bland derefter kokosolie og sukker i en stor skål indtil glat konsistens og tilsæt derefter æggene.",
        "Bland mel og proteinpulver sammen i en separat skål. Derefter tilsættes gradvist denne tørre blanding til den første skål med våde ingredienser. Rør for at blande grundigt",
        "Når det er godt blandet, så rør i chokoladeknapperne. Dæk skålen med film og nedkøl i 30 minutter. Mens dejen køler, forvarmes ovnen til 190° C.",
        "Fjern kagedejen og peanut butter fra køleskabet. Brug hænderne til at rulle kugler af dejen (De bør have størrelse som golfbolde). Kom dem på en bageplade og flad dem ud omkring 1-1,5 cm tykke.",
        "Tilsæt en teskefuld af peanut butter til midten af ​​hver flad kugle og fold derefter dejen henover, så den helt tildækker peanut butter fyldet.",
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

.header {
  text-align: left;
  margin-top: $top-margin;
  margin-bottom: 2rem;
  @include xs {
    margin-top: 10%;
  }
}

.recipe-header {
  align-items: center;
  h2 {
    display: inline-block;
    text-transform: capitalize;
    font-family: $header-font;
    color: $font-colour;
    font-weight: 700;
    font-size: 2rem;
    margin-right: 1rem;
  }
}

.recipe-img {
  background: linear-gradient(black 0 0) 100% 100% / 97% 97% no-repeat;
  padding: 0 10px 10px 0;
}
h2 {
  color: #4d4c4c;
  display: inline-block;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: $header-font;
  margin-left: 2rem;
  @include sm {
    margin-left: 0.2rem;
  }
}
.nutrient-info {
  img {
    display: inline-block;
  }
  span {
    font-family: $bread-font;
    display: block;
    font-weight: 700;
    font-size: 0.75rem;
  }
  @include sm {
    display: flex;
  }
}

.ingredients {
  @include sm {
    display: flex;
    justify-content: center;
  }
  .ingredients-header,
  .method-header {
    align-items: center;
  }
  img {
    display: inline-block;
  }

  li {
    font-family: $bread-font;
    font-size: $bread-size;
  }
  .method-header h2 {
    @include sm {
      margin-top: 1rem;
    }
  }
}

.back-to-recipes {
  @include primaryButton;
  text-decoration: none;
}
</style>
