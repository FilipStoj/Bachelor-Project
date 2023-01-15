<template>
  <div class="blog-card-body card">
    <img class="img-fluid card-img-top" :src="`${post.blogCoverImage}`"/>
    <div class="icons" v-show="editPost">
      <div class="icon" @click="editCurrentPost">
        <Edit class="edit"/>
      </div>
      <div class="icon">
        <Delete @click="deletePost" class="delete"/>
      </div>
    </div>
    <div class="card-body">
      <h5>{{ post.blogHeader }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Udgivet D: {{ new Date(post.blogDate).toLocaleDateString('da-DK', {dateStyle: "long"}) }}
      </h6>
      <RouterLink class="mt-3" :to="{ name: 'singleBlog', params: {blogid: this.post.blogID }}">LÆS MERE HER</RouterLink>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { RouterLink } from "vue-router";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/trash_regular.svg";

export default {
  name: "BlogCard",
  props: ["post"],
  components: {
    RouterLink,
    Edit,
    Delete,
  },
  computed:{
    editPost (){
      return this.$store.state.editPost;
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post.blogID);
    },
    editCurrentPost(){
      this.$router.push({name: 'editBlog', params:{blogid: this.post.blogID}})
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";

.card {
  padding: 0 !important;
  border-radius: 0 !important;
}

.blog-card-body {
  font-family: $bread-font;
  margin-right: 1rem;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  cursor: pointer;
    a {
    font-size: 0.8rem;
    display: block;
    margin: 0.4rem 0 0.6rem 0;
    //margin: 0.7rem 0 1rem 0;
    text-decoration: none;
    @include sm {
      font-size: 1rem;
    }
  }
  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    .icon {
      padding: 5px;
      display: flex;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fffafa;
      justify-content: center;
      transition: 0.5s ease all;
      &:hover{
        background-color: #303030;
        .delete, .edit{
          color:#fff;
        }
      }
      &:nth-child(1){
        margin-right: 8px;
      }
      Edit,
      Delete{
        pointer-events: none;
        height: 15px;
        width: auto;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .card-img-top {
    display: block;
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 0 !important;
    border-radius: 0;
  }
  h5 {
    font-weight: bold;
    color: $font-colour;
  }
}
</style>
