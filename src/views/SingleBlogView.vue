<template>
  <div class="base-container" v-if="currentBlog && currentBlog.length > 0" >
    <div class="container">
      <div class="row">
        <!--TODO fiks rød bar ved overskrift-->
        <h2 class="header">{{this.currentBlog[0].blogHeader}}</h2>
        <h4>Udgivet d. {{ new Date(this.currentBlog[0].blogDate).toLocaleString('da-DK', {dateStyle: 'long'}) }}</h4>
          <img class="blog-Cover-Photo" :src="this.currentBlog[0].blogCoverImage" alt="" />
        <div class="postContent ql-editor" v-html="this.currentBlog[0].blogContent">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      currentBlog: null,
    };
  },
   async mounted() {
    this.currentBlog = this.$store.state.allBlogPosts.filter((post) => {
      return post.blogID === this.$route.params.blogid;
    })
  },
}
</script>
<style lang="scss">
@import "src/styles/global.scss";


.base-container {
  min-height: 100%;
  @include layout;
  .container {
    .row {
      .blog-Cover-Photo{
        width: 100%;
        max-height: 25rem;
        object-fit: cover;
        padding: 0;
      }
      .header {
        margin-top: $top-margin;
        font-family: $header-font;
        font-weight: 500;
        font-weight: bold;
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

h4{
  font-width: 400;
  font-size: 0.9rem;
  margin-bottom: 24px;
}
.blogCPhoto {

}

</style>