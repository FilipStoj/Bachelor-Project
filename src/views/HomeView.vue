<template>
  <div class="banner">
    <video autoplay muted loop>
      <source src="/src/assets/video/home/test.mp4" type="video/mp4"/>
    </video>
    <div class="content">
      <h1>VELKOMMEN TIL <span style="color: #6688CC">FIT</span> BY JULIUS</h1>
    </div>
  </div>

  <div class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <h1>Video om forløbet</h1>
          <p>Det kan skrives meget simpelt, køber et forløb hos os kan du forvente resultater.
            Dit resultat er selvfølgelig et produkt af det arbejde du ligger i forløbet.
            Du vil modtage et skræddersyet træningsprogram, kostplan der passer til dig og et hav af videoer der kan hjælpe dig på din rejse.
            Vi tager højde for de skader, allergier og præferencer du har.
            Vi bestræber os på at lave et program der er let og overskueligt at gå i gang med.
            Vi sørger samtidig for at din træning er optimeret, varieret og at du undgår at lave de samme fejl som vi lavede på vores rejse.</p>
          <button class="contact-button mb-3">Kontakt mig nu</button>
        </div>
        <div class="intro-section col-xl-6">
          <video controls>
            <source src="/src/assets/video/home/testTwo.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="journey-section">
            <h1>Min egen rejse</h1>
          </div>
          <div class="image-section">
            <img class="img-fluid" src="/src/assets/images/about/testpicture.png" alt="stormand"/>
            <img class="img-fluid" src="/src/assets/images/about/testpicture.png" alt="stormand"/>
          </div>
        </div>
        <div class="journey-info col-xl-6 col-md-12">
          <h2>Det sværeste skridt på en lang <span style="color: #6688CC">rejse</span> er altid det første</h2>
          <p>
            Jeg startede min træningsrejse for knap 8 år siden og som mange andre nybegyndere havde jeg ingen ide om hvor jeg skulle starte.
            Jeg kan huske min første træning i et fitnesscenter hvor jeg egentlig bare gik rundt mellem vægt maskinerne og så direkte over til løbebåndet som jeg kendte.
            Der har været mange træninger siden den og jeg er nu et sted hvor jeg gerne vil dele ud af alle de erfaringer jeg har fået.
            Jeg har hjulpet familie, venner og bekendt med deres træning og at hjælpe andre i mål med deres drømme, at se deres selvværd og velvær vokse med min hjælp
            er en følelse som for mig er ubeskrivelig.
          </p>
          <button class="contact-button mb-3">Læs mere her</button>
        </div>
      </div>
    </div>
  </div>

  <div class="hero">
    <div class="container">
      <h4>BLIV DEN BEDSTE <span style="color: #6688CC">VERSION</span> AF DIG SELV</h4>
    </div>
  </div>


    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="why-julius-section">
            <h1>Hvorfor Fit By Julius</h1>
          </div>
        </div>
        <div class="reason-section">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <h4>1</h4>
              <h5>Efter dine behov</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                roots in a piece of classical Latin literature from 45 BC, making it
                it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia,</p>
            </div>
            <div class="col-lg-4">
              <h4>2</h4>
              <h5>Program</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                roots in a piece of classical Latin literature from 45 BC, making it
                it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia,</p>
            </div>
            <div class="col-lg-4">
              <h4>3</h4>
              <h5>Nemme opskrifter</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                roots in a piece of classical Latin literature from 45 BC, making it
                it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia,</p>
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
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout;
}

.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1000;
  }

  content {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 4.5rem;
    color: #FFFFFF;
    background-image: none;
    @include xs {
      font-size: 1.5rem;
    }
    @include md {
      font-size: 3.2rem;
    }
  }
}

.intro-section {
  video {
    width: 100%;
  }
}

.contact-button {
  @include primaryButton;
}

.journey-section {
  margin: 4.1rem 0 2rem 0;
}

.journey-info {
  @include xs  {
    margin-top: 1rem;
  }

  @include lg  {
    margin-top: 8.5rem;
  }

  h2 {
    font-weight: bold;
  }
}

.image-section img{
  padding-right: 2rem;

  @include xs  {
    margin-bottom: 1rem;
  }
}

.hero {
  background-color: red;
  background-image: url("../assets/images/home/temp_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding-top: 200px;
  padding-bottom: 200px;
  margin-bottom: 6.25rem;

  h4 {
    text-align: center;
    font-family: $header-font;
    font-weight: bold;
    text-transform: uppercase;
    color: $header-colour;
    font-size: 3rem;
  }

  container {
    width: 100%;
  }
}

.why-julius-section {
  margin-bottom: 4rem;
}

.reason-section {
  margin-bottom: 3.5rem;

  h4 {
    font-family: $header-font;
    color: $brand-colour;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 5rem;
    position: absolute;
    margin-left: 1.5rem;
  }

  h5 {
    position: relative;
    margin-top: 4.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: $header-font;
    color: rgb(33, 33, 33, 0.9)
  }
}
</style>