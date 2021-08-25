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
        <div class="darckness">
          <div class="registration-butten-position">
            <div class="registration_left_position">Log</div>
            <div class="up_btn_style">In</div>
          </div>
          <div class="g-tab__content">
            <div class="bottom-margin-input-lable">
              <div class="b-auth-email__input-label">E-mail</div>
              <div>
                <input
                  v-model.trim="$v.email.$model"
                  id="login_email"
                  class="g-input__input"
                  type="text"
                />
                <div class="error" v-if="$v.email.$error">
                  <div v-if="!$v.email.email">
                    Электронный адресс введен не корректно.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div class="b-auth-email__input-label">Пароль</div>
              <div>
                <input
                  v-model.trim="$v.password.$model"
                  id="login_password"
                  class="g-input__input"
                  type="password"
                />
                <div class="error" v-if="$v.password.$error">
                  <div v-if="!$v.password.goodPassword">
                    Пароль должен содержать латинские заглавные,строчные и
                    числовые символы.
                  </div>
                </div>
              </div>
            </div>
            <div class="registr-butten-style">
              <button
                :disabled="$v.$invalid"
                type="submit"
                value="Send"
                class="b-auth-email__registration-button"
                @click="
                  () => {
                    close();
                    loginUser();
                  }
                "
              >
                АВТОРИЗИРОВАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const { VUE_APP_SERVER_URL } = process.env
import axios from "axios";
import {
  required,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      goodPassword: (password) => {
        //a custom validator!
        return (
          password.length >= 8 &&
          /[a-z]/.test(password) &&
          /[A-Z]/.test(password) &&
          /[0-9]/.test(password)
        );
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    showModal() {
      this.isLoginModalVisible = true;
    },
    async loginUser() {
      await axios({
        url: VUE_APP_SERVER_URL + '/login',
        method: "post",
        data: {
          email: this.email,
          password: this.password,
        },
        body: JSON.stringify(this),
      });
    },
  },
  components: {
  },
};
</script>

<style>
</style>
