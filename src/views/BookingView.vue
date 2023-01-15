<template>
  <div class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="about-section">
            <h1>Book en samtale</h1>
            <p>Her får du 3 gode grunde til hvorfor du skal booke en samtale med os.
              Det kan selvfølgelig være nervepirrende at skulle snakke med en fremmed om noget så personligt som sin sundhed,
              men vi lover dig for at den samtale er meget mere uhyggelig i dit hovede end den bliver, så vi anbefaler at du springer ud i det.<br><br>
              Samtalen er uforpligtende - så hvorfor ikke?<br><br>
              Vi hjælper dig med at finde et mål som både er realistisk og som du er tilfreds med.<br><br>
              Vi vil allerede under samtalen give vores bedste råd til dig uanset om du vælger at købe et forløb hos os.
            </p>
            <button class="book-button"><a href="https://fitbyjulius.setmore.com" target="_blank">Book nu</a></button>
          </div>
        </div>
        <div class="image-section col-xl-6 col-md-12 d-none d-lg-block">
          <img class="img-fluid" src="../assets/images/about/julius_om.jpg"/>
        </div>
      </div>
    </div>
  </div>

  <div class="service-section container-fluid">
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <h3><i class="fa fa-check-circle fa-1x"></i>Nem online booking</h3>
      </div>
      <div class="col-xl-3 col-sm-6">
        <h3><i class="fa fa-check-circle fa-1x"></i>Over 7 års erfaring</h3>
      </div>
      <div class="col-xl-3 col-sm-6">
        <h3><i class="fa fa-check-circle fa-1x"></i>Kostplan til dig</h3>
      </div>
      <div class="col-xl-3 col-sm-6">
        <h3><i class="fa fa-check-circle fa-1x"></i>Træningsprogram</h3>
      </div>
    </div>
  </div>

  <div class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="why-julius-section">
            <h2>Kom i gang</h2>
            <h1>Hvorfor vælge Fit By Julius</h1>
            <span></span>
          </div>
        </div>
        <div class="reason-section">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h4>Kostplan</h4>
            <h5>Efter dine behov</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          <div class="col-lg-4">
            <h4>Trænings</h4>
            <h5>Program</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          <div class="col-lg-4">
            <h4>Vægttab</h4>
            <h5>Nemme opskrifter</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          <div class="col-lg-4">
            <h4>Lean Gains</h4>
            <h5>Sixpack</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          <div class="col-lg-4">
            <h4>Personlige</h4>
            <h5>Råd</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          <div class="col-lg-4">
            <h4>Client</h4>
            <h5>Erfaring</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia,</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "app",
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout;
}

.service-section {
  background-color: #F9F1F1;
  width: 100%;
  margin-top: 2rem;

  i {
    margin-right: 0.5rem;
  }

  .row {
    text-align: left;
    padding: 1rem;

  @include md {
    margin-left: 2rem;
  }
  @include lg {
    text-align: center;
  }
  }
}

.about-section {
  margin-top: $top-margin;

  .book-button {
    @include primaryButton;

    a {
      text-decoration: none;
      color: $header-colour;
    }
  }
}

.image-section {
  img {
    padding: 0 10px 10px 0;
    background: linear-gradient(black 0 0) 100% 100% / 97% 97% no-repeat;
  }

  @include xs {
    margin-top: 1rem;
    text-align: center;
  }

  @include lg {
    margin-top: 10.5rem;
  }
}

.why-julius-section {
  margin-top: 4rem;
  margin-bottom: 4rem;

  h1 {
    background-image: none;
  }

  h2 {
    color: rgb(102, 136, 204, 0.9);
    font-weight: 600;
    font-size: 1.5rem;
  }

  span {
    width: 20%;
    display: block;
    height: 1.5px;
    background: $font-colour;
    margin-top: 0.5rem;
  }
}

.reason-section {
  margin-bottom: 3.5rem;

  h4 {
    font-family: $header-font;
    color: $brand-colour;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.4rem;
    position: absolute;
  }

  h5 {
    position: relative;
    margin-top: 1.9rem;
    margin-left: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: $header-font;
    color: rgb(33, 33, 33, 0.9)
  }
}
</style>