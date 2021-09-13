<template>
  <div class="back-g_headr_menu">
    <div class="r-nav-b_position">
      <div class="r-nav-b_position">
        <nav>
          <ul class="menu_list">
            <li class="active">Тексты</li>
            <li>Рассылки</li>
            <div class="podcast-btn">Подкасты</div>
          </ul>
        </nav>
      </div>
      <div class="l-nav-b_position">
        <div>
          <input class="search-b" type="text" placeholder="  Ищите статью?" />
          <font-awesome-icon icon="search" />
        </div>
        <a class="type-list-right-menu" @click="showCreateCardModal"
          >НАПИСАТЬ В БЛОГ
          <font-awesome-icon icon="pencil-alt" />
        </a>
        <createCardModal
          v-show="isCreateCardVisible"
          @close="closeCreateCardModal"
        />
        <button class="si-up_b-style" type="button" @click="showModal">
          Sing Up
        </button>
        <modal
          v-show="isModalVisible"
          @close="closeModal"
          @showLoginModal="showLoginModal"
        />
        <login v-show="isLoginModalVisible" @close="closeLoginModal" />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Registre.vue";
import Login from "@/components/Login.vue";
import CreateCardModal from "@/components/Createcard.vue"
export default {
  name: "Header",
  components: {
    Modal,
    Login,
    CreateCardModal,
  },
  data() {
    return {
      isModalVisible: false,
      isLoginModalVisible: false,
      isCreateCardVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },
    showCreateCardModal() {
      this.isCreateCardVisible = true;
    },
    closeCreateCardModal() {
      this.isCreateCardVisible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.podcast-btn {
  width: 100px;
  background-image: url("/img/trash/menu-podcast-link.svg");
}
.si-up_b-style {
  font-weight: 600;
  background-color: #47b3ac;
  border-radius: 50px;
  padding: 10px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  height: 35px;
}
.l-nav-b_position {
  display: flex;
}
.type-list-right-menu {
  cursor: pointer;
  text-align: center;
  margin: 23px 10px;
  height: auto;
  display: block;
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
  font-size: 13px;
}
.search-b {
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 20px;
  height: 20px;
  color: #a1a3a3;
  margin: 20px 3px 0px 0px;
}
.back-g_headr_menu {
  background-color: #212121;
  color: white;
  height: 62px;
}
.r-nav-b_position {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 15px;
  max-width: 1280px;
}
.menu_list {
  list-style-type: none;
  margin: 0px;
  padding: 0;
  display: flex;
  padding-top: 22px;
  font-weight: 600;
}
.menu_list li {
  min-width: 96px;
  min-height: 36px;
}
</style>

<style>
.active {
  border-bottom: 4px solid #47b3ac;
}
</style>
