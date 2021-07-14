<template>
  <div class="cardnews_container_style">
    <div class="container-cards">
      <Cardnews
        v-for="news in $store.getters.cards"
        :key="news.id"
        :card_news="news"
      ></Cardnews>
      <Newcards />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cardnews from "./Cardnews.vue";
import Newcards from "./Newcards.vue";

export default {
  name: "Newsgallery",
  components: {
    Cardnews,
    Newcards,
  },
  props: {},
  computed: {
    ...mapGetters({
      cards: "cards",
    }),
  },
};
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  /* margin: 0% 7%; */
}

.cardnews_container_style {
  background-color: #f2f2f2;
}
</style>
