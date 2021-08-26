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
            <div class="registration_left_position">Sign</div>
            <div class="up_btn_style">Up</div>
          </div>
          <div class="g-tab__content">
            <div class="bottom-margin-input-lable">
              <!-- <div class="b-auth-email__input-label">Имя пользователя</div> -->
              <div>
                <input
                  v-model.trim="$v.username.$model"
                  id="username"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя пользователя"
                />
                <div class="error">
                  <div v-if="!$v.username.minLength">
                    Имя пользователя должно содержать более
                    {{ $v.username.$params.minLength.min }} символов.
                  </div>
                  <div v-else-if="!$v.username.maxLength">
                    Имя пользователя должно содержать не более
                    {{ $v.username.$params.maxLength.max }} символов.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <!-- <div class="b-auth-email__input-label">Имя</div> -->
              <div>
                <input
                  v-model.trim="$v.name.$model"
                  id="name"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя"
                />
                <div class="error" v-if="$v.name.$error">
                  <div v-if="!$v.name.minLength">
                    Имя должно содержать более
                    {{ $v.name.$params.minLength.min }} символов.
                  </div>
                  <div v-else-if="!$v.name.alpha">
                    Имя должно содержать только символы кириллицы.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <!-- <div class="b-auth-email__input-label">E-mail</div> -->
              <div>
                <input
                  v-model.trim="$v.email.$model"
                  id="email"
                  class="g-input__input"
                  type="text"
                  placeholder="E-mail"
                />
                <div class="error" v-if="$v.email.$error">
                  <div v-if="!$v.email.email">
                    Электронный адресс введен не корректно.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <!-- <div class="b-auth-email__input-label">Пароль</div> -->
              <div>
                <input
                  v-model.trim="$v.password.$model"
                  id="password"
                  class="g-input__input"
                  type="password"
                  placeholder="Пароль"
                />
                <div class="error" v-if="$v.password.$error">
                  <div v-if="!$v.password.goodPassword">
                    Пароль должен содержать латинские заглавные,строчные и
                    числовые символы.
                  </div>
                </div>
              </div>
            </div>
            <div
              type="button"
              @click="
                () => {
                  showLoginModal();
                  close();
                }
              "
            >
              Уже есть аккаунт!? Авторизируйтесь.
            </div>
            <div class="registr-butten-style">
              <button
                :disabled="$v.$invalid"
                type="submit"
                value="Send"
                class="b-auth-email__registration-button"
                @click="
                  () => {
                    postUser();
                    close();
                  }
                "
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { registerUser } from "../API/register"
// import axiosInstance from "../API/index"
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "registre",
  data() {
    return {
      username: "SIUSWHY",
      name: "Даниил",
      email: "ventsodaniil@yandex.ru",
      password: "123qweQWE",
      // isLoginModalVisible: false,

    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(12),
    },
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10),
      alpha: (val) => /^[а-яё]*$/i.test(val),
    },
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
    async postUser() {
      const response = await registerUser({
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
      })
      console.log(response)

      console.log(this.username, this.name, this.email, this.password);
      // axiosInstance.post('register', data);
      // await axios({
      //   url: VUE_APP_SERVER_URL + '/register',
      //   method: "post",
      //   data: {
      //     username: this.username,
      //     name: this.name,
      //     email: this.email,
      //     password: this.password,
      //   },
      // });
    },
    close() {
      this.$emit("close");
    },
    showLoginModal() {
      this.$emit('showLoginModal');
    },

  },
  components: {
  },
};
</script>

<style >
.login-btn_decor {
  color: #8453d2;
  text-decoration: underline;
  margin-top: 30px;
}
.darckness {
  background: rgba(62, 69, 81, 0.7);
  width: 100%;
  height: 100%;
}
.modal {
  box-shadow: black 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  /* color: black; */
  /* padding: 15px; */
  border-radius: 3px;
  background-image: url("~@/assets/img/modalBackgraund.jpg");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 550px;
}
.up_btn_style {
  color: #4caf50;
}
.registration-butten-position {
  display: flex;
  /* justify-content: space-between; */
  font-size: 25px;
  width: 100px;
  font-weight: 600;
  /* border-bottom: 1px solid #1c1c1c32; */
  height: 25px;
  padding: 20px 0px;
}
.registration_left_position {
  margin-right: 10px;
}
.b-auth-email__registration-button {
  /* height: 45px;
  cursor: default;
  color: #47b3ac;
  border-color: #47b3ac;
  background-color: inherit;
  border: 3px solid;
  cursor: pointer; */
  font-weight: 600;
  background-color: #4caf50;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px;
  height: 40px;
}
.registr-butten-style {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.b-auth-email__input-label {
  /* position: absolute; */
  margin-right: 250px;
}
.g-tab__content {
  font: 15px PTSerif, serif;
  margin-top: 30px;
}
.g-input__input {
  height: 25px;
  width: 300px;
  background-color: transparent;
  border-color: transparent;
  border-style: none;
  border-width: 0px;
  color: white;
  border-bottom: 1px solid #ced4da;
  /* margin: 0px 0px -20px -110px; */
}
.g-input__input::placeholder {
  color: white;
}
.bottom-margin-input-lable {
  margin-bottom: 35px;
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
.error {
  max-width: 300px;
  /* color: #ff253a; */
}
</style>
