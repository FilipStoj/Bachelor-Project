<template>
  <Loading v-show="loading"/>
  <div class="base-container">
    <div class="container">
      <BlogCoverPreview v-show="this.$store.state.blogImagePreview" />
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogHeader" />
        <div class="upload-file">
          <label class="me-3" for="blog-photo">Upload Cover Photo</label>
          <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, ,jpeg" />
          <button @click="openPreview" class="preview" :class="{ 'button-inactive': !this.$store.state.blogImagePath }">
            Preview Photo
          </button>
          <span>File Chosen: {{ this.$store.state.blogImageName }}</span>
        </div>
      </div>
      <div>
        <QuillEditor></QuillEditor>
      </div>
      <div class="blog-actions mt-3">
        <button  @click="uploadBlog" class="me-3">Opret Blog</button>
        <RouterLink to="postPreview">Se blog</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Fiks require
import QuillEditor from '../components/QuillEditior.vue';
import BlogCoverPreview from "@/components/BlogCoverPreview.vue";
import { db } from '../firebase/firebaseInit.js';
import { doc, setDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loading from "@/components/Loading.vue";

export default {
  name: "app",
  components: {
    QuillEditor,
    BlogCoverPreview,
    Loading
  },
  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
    }
  },
  props: ["post"],
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("newFileName", fileName);
      this.$store.commit("setFileURL", URL.createObjectURL(this.file));
    },
    openPreview() {
      this.$store.commit("imagePreviewOpen");
    },
     async uploadBlog() {
      //TODO  cursor location
      if (this.$store.state.blogHeader.length !== 0 && this.$store.state.blogContent.length !== 0) {
        if (this.file) {
          this.loading = true;
          const storage = getStorage();
          const storageRef = ref(storage, `documents/blogCoverImage/${this.$store.state.blogImageName}`);
          (err) => {
            console.log(err);
            this.loading = false;
          },
            await uploadBytes(storageRef, this.file);
            const downloadURL = await getDownloadURL(storageRef);
            const timestamp = await Date.now();
            const collectionRef = collection(db, 'blogs');
            const docRef = doc(collectionRef);
            const docID = docRef.id;
            await setDoc(docRef, {
              blogID: docID,
              blogContent: this.$store.state.blogContent,
              blogCoverImage: downloadURL,
              blogCoverImageName: this.blogCoverImageName,
              blogHeader: this.blogHeader,
              profileID: this.userProfileId,
              date: timestamp
            });
            this.$store.dispatch('getBlogPost');
            this.loading = false;
            // TODO: ændre til dynamisk url this.$router.push({name: 'singleBlog', params: {blogid: docID }});
            this.$router.push({name: 'blog'});
            return;
        }
        this.error = true;
        this.errorMsg = "Venligst upload et cover billede!";
        setTimeout(() => {
          this.error = false;
        }, 5000);
        return;
      }
      this.error = true;
      this.errorMsg = "Venligst tilføj en titel samt brødtekst!";
      setTimeout(() => {
        this.error = false;
      }, 5000);
      return;
    },
  },
  computed: {
    userProfileId() {
      return this.$store.state.userProfileId;
    },
    blogCoverImageName() {
      return this.$store.state.blogImageName;
    },
    blogHeader: {
      get() {
        return this.$store.state.blogHeader;
      },
      set(payload) {
        this.$store.commit("updateBlogHeader", payload);
      },
    },
  },
}
</script>

<style lang="scss" >
@import "src/styles/global.scss";

.base-container {
  @include layout;
  margin-top: $top-margin;
}

.blog-info {
  display: flex;
  margin-bottom: 32px;
  input:nth-child(1) {
    min-width: 300px;
  }
  input {
    transition: 0.5s ease-in-out all;
    padding: 10px 4px;
    border: none;
    border-bottom: 1px solid #303030;
    &:focus {
      outline: none;
      box-shadow: 0 1px 0 0 #303030;
    }
  }
  .upload-file {
    flex: 1;
    margin-left: 16px;
    position: relative;
    display: flex;
    input {
      display: none;
    }
    .preview {
     @include primaryButton;
    }
    label{
      @include primaryButton;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    span {
      font-size: $bread-size;
      margin-left: 16px;
      align-self: center;
    }
  }
}
.button-inactive {
  background-color: grey;
  cursor: none;
  display: none;
}
.blog-actions{
  button{
    @include primaryButton;
  }
  a {
    @include primaryButton;
    text-decoration: none;
  }
}
.ql-editor {
  height: 60vh;
  overflow: scroll;
}
</style>
