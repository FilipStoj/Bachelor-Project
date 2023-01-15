<template>
  <div class="base-container">
    <div class="container">
      <div class="row">
        <!--TODO fiks rød bar ved overskrift-->
      <h1 class="mb-4">{{this.blogHeader}}</h1>
      <img class="blog-cover-image" :src="blogCoverImage" alt="" />
      <div class="postContent" v-html="blogContent">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    blogHeader() {
      return this.$store.state.blogHeader;
    },
    blogContent() {
      return this.$store.state.blogContent;
    },
    blogCoverImage() {
      return this.$store.state.blogImagePath;
    },
  },
}
</script>
<style lang="scss" >
@import "src/styles/global.scss";
.base-container {
  min-height: 100%;
  @include layout;
  .container {
    .row {
      .blog-cover-image{
        width: 100%;
        max-height: 25rem;
        object-fit: cover;
        padding: 0;
      }
      .h1 {
        margin-top: $top-margin;
        @include xs {
          margin-top: 10%;
        }
      }
        img{
          width: 100%;
          margin-bottom: 2rem;
          display: block;
        }
    }
  }
}
</style>
