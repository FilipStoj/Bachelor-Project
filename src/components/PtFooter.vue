<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-col">
            <h4>Sider</h4>
            <ul class="list-unstyled">
              <li>
                <RouterLink to="/">Hjem</RouterLink>
              </li>
              <li>
                <RouterLink to="/blog">Blog</RouterLink>
              </li>
              <li>
                <RouterLink to="/recipes">Opskrifter</RouterLink>
              </li>
              <li>
                <RouterLink to="/about">Om mig</RouterLink>
              </li>
              <li>
                <RouterLink v-if="subscribed" to="/videos">Videoer</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ">
          <div class="footer-col">
            <h4>Information</h4>
            <ul class="list-unstyled">
              <li>
                <RouterLink to="/Faqs">Faqs</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Kontakt</RouterLink>
              </li>
              <li>
                <RouterLink to="/Booking">Booking</RouterLink>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Private Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-col">
            <h4>Tag med på rejsen</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=100003090383217" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/julius_strobak/" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="footer-col">
            <h4>Tilmeld nyhedsbrev</h4>
            <label>Tilmeld dig vores nyhedsbrev, for at holde dig opdateret</label>
            <input
              type="text"
              class="form-control"
              placeholder="Indtast din Email"
            />
            <button class="newsletterButton">Tilmeld</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <p>© Copyright 2023 All rights reserved | Powered by Filip Stojanovic & Victor Osborg</p>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

body {
  display: flex;
  flex-direction: column;
}

footer {
  background-color: $footer-colour;
  padding: 2.5rem;
  width: 100%;
  margin-top: auto;

  h4 {
    color: $header-colour;
    text-transform: uppercase;
    font-family: $header-font;
    font-size: 1.2rem;
    margin-bottom: 1.563rem;
  }

  ul {
    color: $footer-text;
  }

  label {
    margin-bottom: 1rem;
    color: $footer-text;
    font-family: $bread-font;
  }

  .form-control {
    border-radius: 0;
  }
}

.footer-col {
  margin-bottom: 3.125rem;

  ul li a {
    font-size: $bread-size;
    font-family: $bread-font;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 300;
    color: $footer-text;
    display: block;
    transition: all 0.3s ease;
    cursor: pointer;
  }

   li a:hover {
    padding-left: 0.5rem;
    color: $header-colour;
  }

  .social-links a {
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 0.625rem 0.625rem 0;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
    color: $header-colour;
    transition: all 0.5s ease;
  }

  .social-links a:hover {
    color: #24262b;
    background-color: $accent-colour;
    cursor: pointer;
  }

  ul li:not(:last-child) {
    margin-bottom: 0.625rem;
  }

  h4::before {
    content: '';
    position: absolute;
    margin-top: 1.875rem;
    background-color: #FFC0CB;
    height: 0.156rem;
    box-sizing: border-box;
    width: 1.875rem;
  }

  .newsletterButton {
    @include primaryButton;
    margin-top: 0.7rem;
  }
}

.copyright {
  background-color: $footer-colour;
  padding: 0.626rem;
  text-align: center;
  border-top: 0.5px solid white;
  font-size: 0.75rem;
  font-family: $bread-font;
  margin-top: auto;
  width: 100%;
  p {
    color: $footer-text;
    margin: 0;
  }
}
</style>
