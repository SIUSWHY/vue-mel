import vue from 'vue'
import vuex from 'vuex'
import cards from "@/components/cardata";

vue.use(vuex);
const store = new vuex.Store({
    state: cards, // spread
    mutation: {},
    actions: {},
    getters: {
        cards: (state) => state
    }
});
console.log(store.state);


export default store;