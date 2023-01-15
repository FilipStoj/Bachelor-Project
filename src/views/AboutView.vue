<template>
  <div class="base-container">
  <div class="container">
    <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="about-section">
            <h2>Om</h2>
            <h1>Julius Strøbæk</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. <br><br>This book is a treatise on the
              theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.<br><br> Contrary to popular belief, Lorem Ipsum is not simply random text.
              roots in a piece of classical Latin literature from 45 BC, making it
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia
            </p>
          </div>
        </div>
      <div class="image-section col-xl-6 col-md-12">
        <img class="img-fluid" src="../assets/images/about/julius_om.jpg" />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="personalSection">
          <h1>Min personlige udvikling</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
            roots in a piece of classical Latin literature from 45 BC, making it
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur Contrary to popular belief, Lorem Ipsum is not simply random text.
            roots in a piece of classical Latin literature from 45 BC, making it
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur</p>
        </div>
      </div>
    </div>
    <div class="developImageSection">
        <div class="row">
          <div class="col-lg-12">
            <img v-for="(image, index) in images" :src="image.url" :key="index" :alt="image.alt" />
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
  components: {
  },
  data() {
    return {
      images: [
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
         { url: 'src/assets/images/about/testpicture.png', alt: 'I love you nature' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout
}

.about-section {
  margin-top: $top-margin;
}

.image-section {
  img {
    padding:0 10px 10px 0;
    background: linear-gradient(black 0 0) 100% 100% / 97% 97% no-repeat;
  }
  @include xs  {
    margin-top: 1rem;
    text-align: center;
  }

  @include lg  {
    margin-top: 13rem;
  }
}

.personalSection {
  margin-top: 5rem;
}

.developImageSection {
  text-align: center;
  margin-bottom: 2.5rem;
  img {
    padding: 1rem;
  }
}
</style>
