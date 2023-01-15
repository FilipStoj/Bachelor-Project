<template>
  <div class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="faq-section">
            <h1>Faqs</h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <!--TODO lav alt det her om til en v-for-->
              <!-- Faqs 1-->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne">
                      HVAD ER VORES PRISER?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">200 kr for et træningsprogram.</div>
                </div>
              </div>

              <!-- Faqs 2-->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                      HVAD KAN JEG FORVENTE AF MIN PERSONLIGE TRÆNER?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Altid tilgængelig, hjælpsom.</div>
                </div>
              </div>

              <!-- Faqs 3-->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree">
                      KAN JEG TRÆNE HJEMMEFRA?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Alle vores programmer muliggør hjemmetræning.</div>
                </div>
              </div>

              <!-- Faqs 4-->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour">
                      HVOR OFTE KAN JEG SPØRGER OM HJÆLP?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Der er altid tid til spørgsmål hos mig.</div>
                </div>
              </div>

              <!-- Faqs 5-->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive">
                      ER DER TILFREDSGARANTI?
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Hvis du følger programmet og du ingen resultater får, så ja.</div>
                </div>
              </div>

              <!-- Faqs 6 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                      class="accordion-button collapsed"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix">
                      HVOR OFTE SKAL JEG TRÆNE?
                  </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Det kommer helt an på hvilket program du får tildelt.</div>
                </div>
              </div>
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
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout;
}

.faq-section {
  margin-top: $top-margin;
  margin-bottom: 3rem;

  .accordion {
    margin-top: 1rem;
  }

  button {
    font-size: 1.4rem;
  }

  .accordion-body {
    font-family: $bread-font;
  }

  .accordion-button {
    padding: 1.5rem 0 1.5rem 0;
  }
  .accordion-button[data-v-9ecb77e5]:not(.collapsed) {
    color: $font-colour;
    background-color: transparent;
    box-shadow: none;
    background-color: #FFFAFA;
  }

  .accordion-button[data-v-9ecb77e5]:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
  }

  .accordion-body {
    background-color: #FFFAFA;
    padding-top: 0;
    padding-bottom: 1rem;
  }

  .accordion-button.collapsed {
    background-color: #FFFAFA;
  }
}



</style>
