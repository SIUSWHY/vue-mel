import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { getCards } from "../cards/cards";
// import cards from "@/components/cardata";
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
