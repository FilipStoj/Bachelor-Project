<template>
  <div class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header-section">
            <h1>Blog</h1>
            <div class="toggleEdit mb-3" v-if="admin">
              <span>Rediger post</span>
              <input type="checkbox" v-model="editPost">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 col-xl-4" v-for="(post, index) in allBlogPostsCards" :key="index">
          <BlogCard :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BlogCard from "../components/BlogCard.vue";
import store from "../store/index.js";

export default {
  name: "app",
  store: store,
  components: {
    BlogCard: BlogCard,
  },
  computed: {
    allBlogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user () {
      return this.$store.state.user;
    },
    admin () {
      return this.$store.state.isUserAdmin;

    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("editPostToggle", payload);
      },

      },
    },
  beforeUnmount() {
    this.$store.commit("editPostToggle", false)
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";
.base-container {
  @include layout;
}

.header-section {
  margin-top: $top-margin;
}

.toggleEdit {
  display: flex;
  justify-content: right;
  span {
    margin-right: 16px;
  }
  }
input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: $brand-colour;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input:checked[type="checkbox"]:before {
  background: #fff;
  left: 52px;
}
</style>