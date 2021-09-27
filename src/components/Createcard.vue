<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="float_text">
            <div action="/news" method="post" enctype="multipart/form-data">
              <div>Выберите изображение</div>
              <input
                accept="image/*"
                type="file"
                id="files"
                ref="files"
                multiple
                v-on:change="handleFileUploads()"
              />
            </div>
            <div>
              <div>Категория статьи</div>
              <input type="text" v-model="title" />
            </div>
            <div>
              <div>Текст статьи</div>
              <input type="text" v-model="text" />
            </div>
          </div>

          <div class="modal-footer">
            <button
              class="modal-default-button"
              @click="
                () => {
                  close();
                  postNews();
                }
              "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { sendCard } from "../API/sendcard"

export default {
  name: "createModalCard",
  data() {
    return {
      title: "ВОПРОС-ОТВЕТ",
      text: "Как организовать раздельный сбор мусора в школе?",
      files: '',
    };
  },
  methods: {
    postNews() {
      const response = sendCard({
        title: this.title,
        text: this.text,
        img: this.img,
      })
      console.log(response)
    },
    handleFilesUpload() {
      this.file = this.$refs.file.files[0];
    },
    close() {
      this.$emit("close");
    },
  }

}
</script>

<style scoped>
.float_text div {
  /* display: flex; */
  float: left;
  margin: 8px 0px;
}
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  min-height: 300px;
  width: min-content;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: black;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
