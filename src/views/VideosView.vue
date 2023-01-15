<template>
  <div class="base-container mb-5">
    <div class="container">
      <div class="header">
        <h1>Træningsvideoer</h1>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage. The
            standard chunk of Lorem Ipsum used since the 1500s is repro. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage.
          </p>
        </div>
      </div>
      <div class="row mt-3 buttons">
        <div class="col-12 mb-2 col-lg-2">
          <button
            :class="{ active: activeCategory === null }"
            @click="selectAll"
          >
            ALLE
          </button>
        </div>
        <div class="col-6 col-lg-2 mb-2" @click="torsoClicked">
          <button @click="selectedCategory('button1', $event)">OVERKROP</button>
        </div>
        <div class="col-6 mb-2 col-lg-2" @click="legClicked">
          <button @click="selectedCategory('button2)', $event)">BEN</button>
        </div>
        <div class="col-6 mb-2 col-lg-2" @click="cardioClicked">
          <button @click="selectedCategory('button3)', $event)">CARDIO</button>
        </div>
        <div class="col-6 mb-2 col-lg-2" @click="stomachClicked">
          <button @click="selectedCategory('button4)', $event)">MAVE</button>
        </div>
      </div>
      <div class="row videos">
        <div v-if="torsoCat">
          <div
            class="col-12 mb-4"
            v-for="(video, index) in torsoVideos"
            :key="index"
          >
            <div>
            <h2>{{ video.title }}</h2>
            <p>{{ video.text }}</p>
            </div>
            <video controls>
              <source :src="video.url" type="video/mp4" />
            </video>
          </div>
        </div>
        <div v-if="legCat">
          <div
            class="col-12 mb-4"
            v-for="(video, index) in legVideos"
            :key="index"
          >
            <h2>{{ video.title }}</h2>
            <p>{{ video.text }}</p>
            <video controls>
              <source :src="video.url" type="video/mp4" />
            </video>
          </div>
        </div>
        <div v-if="cardioCat">
          <div
            class="col-12 mb-4"
            v-for="(video, index) in cardioVideos"
            :key="index"
          >
            <h2>{{ video.title }}</h2>
            <p>{{ video.text }}</p>
            <video controls>
              <source :src="video.url" type="video/mp4" />
            </video>
          </div>
        </div>
        <div v-if="stomachCat">
          <div
            class="col-12 mb-4"
            v-for="(video, index) in stomachVideos"
            :key="index"
          >
            <h2>{{ video.title }}</h2>
            <p>{{ video.text }}</p>
            <video controls>
              <source :src="video.url" type="video/mp4" />
            </video>
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
    return {
      torsoCat: true,
      legCat: true,
      cardioCat: true,
      stomachCat: true,
      activeCategory: null,
      torsoVideos: [
        {
          url: "src/assets/video/home/test.mp4",
          title: "OVERKROP",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
        {
          url: "src/assets/video/home/test.mp4",
          title: "OVERKROP 2",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
      ],
      legVideos: [
        {
          url: "src/assets/video/home/test.mp4",
          title: "BEN",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            " Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
        {
          url: "src/assets/video/home/test.mp4",
          title: "SQUATS",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
      ],
      cardioVideos: [
        {
          url: "src/assets/video/home/test.mp4",
          title: "ELITE FORM",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
        {
          url: "src/assets/video/home/test.mp4",
          title: "FIND FORMEN",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
      ],
      stomachVideos: [
        {
          url: "src/assets/video/home/test.mp4",
          title: "AB KILLER",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
        {
          url: "src/assets/video/home/test.mp4",
          title: "KILLER ABS",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old." +
            "Contrary to popular belief, Lorem Ipsum is not simply random textroots in a piece of classical Latin literature from 45 BC, making it it over 2000 years old.",
        },
      ],
    };
  },
  methods: {
    selectedCategory(component, event) {
      if (this.activeCategory) {
        this.activeCategory.classList.remove("active");
      }
      this.activeCategory = event.target;
      this.activeCategory.classList.add("active");

      this.selectedCat = component;
    },
    selectAll() {
      this.activeCategory.classList.remove("active");
      this.activeCategory = null;
      this.torsoCat = true;
      this.legCat = true;
      this.cardioCat = true;
      this.stomachCat = true;
    },
    torsoClicked() {
      this.torsoCat = true;
      this.legCat = false;
      this.cardioCat = false;
      this.stomachCat = false;
    },
    legClicked() {
      this.torsoCat = false;
      this.legCat = true;
      this.cardioCat = false;
      this.stomachCat = false;
    },
    cardioClicked() {
      this.torsoCat = false;
      this.legCat = false;
      this.cardioCat = true;
      this.stomachCat = false;
    },
    stomachClicked() {
      this.torsoCat = false;
      this.legCat = false;
      this.cardioCat = false;
      this.stomachCat = true;
    },
  },

  watch: {},
};
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.base-container {
  @include layout;
}

.buttons {
  .col-lg-2 {
    width: 20% !important;
    button {
      padding: 0.5rem 0;
    }
  }
}
h2 {
  font-weight: 700;
  font-size: 1.6875rem;
}

.header {
  text-align: left;
  margin-top: $top-margin;
}

button {
  @include primaryButton;
  width: 100%;
}
.active {
  background-color: #445d8e;
}
video {
  max-width: 100%;
  height: auto;
  padding: 0 10px 10px 0;
  background: linear-gradient(#232323 0 0) 100% 100% / 97% 97% no-repeat;
}

</style>
