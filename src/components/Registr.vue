
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        @submit.prevent="sendData"
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="registration-butten-position">Регистрация</div>
        <div class="g-tab__content">
          <div class="bottom-margin-input-lable">
            <div class="b-auth-email__input-label">Имя пользователя</div>
            <div>
              <input
                v-model="username"
                id="username"
                class="g-input__input"
                type="text"
              />
            </div>
          </div>
          <div class="bottom-margin-input-lable">
            <div class="b-auth-email__input-label">Имя</div>
            <div>
              <input
                v-model="name"
                id="name"
                class="g-input__input"
                type="text"
              />
            </div>
          </div>
          <div class="bottom-margin-input-lable">
            <div class="b-auth-email__input-label">E-mail</div>
            <div>
              <input
                v-model="email"
                id="email"
                class="g-input__input"
                type="text"
              />
            </div>
          </div>
          <div class="bottom-margin-input-lable">
            <div class="b-auth-email__input-label">Пароль</div>
            <div>
              <input
                v-model="password"
                id="passwoed"
                class="g-input__input"
                type="password"
              />
            </div>
          </div>
          <div class="registr-butten-style">
            <button
              type="submit"
              value="Send"
              class="b-auth-email__registration-button"
              @click="close"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "registr",
  data: function () {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    // sendData() {
    //   console.log(this.username, this.name, this.email, this.password);
    // },
    close() {
      console.log(this.username, this.name, this.email, this.password);
      this.$emit("close");
    },
  },
};
// export default {
//   name: "Registr",
//   methods: {
//     close() {
//       this.$emit("close");
//     },
//   },
//   components: {},
// };
</script>

<style scoped>
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: black;
  padding: 15px;
}
.registration-butten-position {
  display: flex;
  justify-content: center;
  font-weight: 600;
  border-bottom: 1px solid #1c1c1c32;
  height: 25px;
}
.b-auth-email__registration-button {
  height: 45px;
  cursor: default;
  color: #47b3ac;
  border-color: #47b3ac;
  background-color: inherit;
  border: 3px solid;
  font-weight: 600;
  cursor: pointer;
}
.registr-butten-style {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.b-auth-email__input-label {
  position: relative;
  top: -4px;
  left: 1px;
  text-align: left;
  line-height: 25px;
  height: 30px;
  margin-bottom: -10px;
}
.g-tab__content {
  font: 15px PTSerif, serif;
  margin-top: 30px;
}
.g-input__input {
  height: 25px;
  width: 227px;
}
.bottom-margin-input-lable {
  margin-bottom: 10px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
</style>

