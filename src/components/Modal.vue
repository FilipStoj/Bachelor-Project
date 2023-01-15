<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMsg }}</p>
      <button class="button-modal" @click="modalClose">Luk</button>
    </div>
  </div>
</template>

<script>
export default {
  props:["modalMsg"],
  methods:{
    modalClose(){
      this.$emit("modal-close");
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/global.scss";
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 30px 40px;
    background-color: #FFFAFA;

  p {
    text-align: center;
  }

    .button-modal {
      @include primaryButton();
      align-self: center;
    }
  }
}
</style>