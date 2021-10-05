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
                id="img"
                ref="img"
                name="img"
                v-on:change="handleFileUpload()"
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
                  handleFileUpload();
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
import { mapMutations, mapState } from 'vuex';
import { sendCard } from "../API/sendcard"
// import store from './store';
// store

export default {
  name: "createModalCard",
  data() {
    return {
      title: "ВОПРОС-ОТВЕТ",
      text: "Как организовать раздельный сбор мусора в школе?",
      img: ''
    };
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_NEW_NEWSCARD'
    ]),
    handleFileUpload() {
      this.img = this.$refs.img.files[0];
      // eslint-disable-next-line no-unused-vars
      const filytype = this.$refs.img.files[0].name.split(".").pop()
      // console.log(this.$refs.img.files[0])
      // console.log(filytype)
    },
    async postNews() {
      const formData = new FormData();
      formData.append('img', this.img,);
      formData.append('title', this.title);
      formData.append('text', this.text);

      const response = await sendCard(formData)

      this.ADD_NEW_NEWSCARD(response.data)

      console.log(response)
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
