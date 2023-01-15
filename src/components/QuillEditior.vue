<template>
  <div>
    <div class="editorQuill" ref="editor"></div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import Quill from "quill";

export default {
  name: "app",
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {
    let quill = new Quill(this.$refs.editor, {
      modules: {
        toolbar: {
          container: [
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['direction', { 'align': [] }],
            [{ 'image': 'Choose Image' }],
          ],
          handlers: {
            'image': function() {
              let fileInput = this.container.querySelector('input.ql-image[type=file]');
              if (fileInput == null) {
                fileInput = document.createElement('input');
                fileInput.setAttribute('type', 'file');
                fileInput.setAttribute('accept', 'image/*');
                fileInput.classList.add('ql-image');
                fileInput.addEventListener('change', async () => {
                  let file = fileInput.files[0];
                  const storage = getStorage();
                  const storageRef = ref(storage, `documents/blogPostPhotos/${file.name}`);
                  await uploadBytes(storageRef, file);
                  const downloadURL = await getDownloadURL(storageRef);
                  quill.insertEmbed(0, 'image', downloadURL);
                  fileInput.value = "";
                });
                this.container.appendChild(fileInput);
              }
              fileInput.click();
            },
          },
        },
      },
      theme: 'snow'
    });
    quill.root.innerHTML = this.blogContent;
    quill.on('text-change', () => {
      this.blogContent = quill.root.innerHTML;
    });
  },
  computed: {
    blogContent: {
      get() {
        return this.$store.state.blogContent;
      },
      set(payload) {
        this.$store.commit("newBlog", payload);
      },
    },
  }
}
</script>
