import Vue from "vue";
import Vuex from "vuex";
import { getCards } from "@/API/cards";
Vue.use(Vuex);

//VueX store
const store = new Vuex.Store({
  state: {
    posts: [],
  },
  actions: {
    async loadData({ commit }) {
      const { data: cards } = await getCards();
        commit("getPosts", cards);
    },
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts;
    },
  },
});

export default store;
