<template>
  <div class="cardnews_container_style">
    <div class="container-cards">
      <Cardnews
        v-for="post in $store.state.posts"
        :key="post._id"
        :card_news="post"
      ></Cardnews>
    </div>
  </div>
</template>

<script>
import Cardnews from "./Cardnews.vue";
import store from "./store";

export default {
  name: "Newsgallery",
  mounted() {
    store.dispatch("loadData");
  },
  components: {
    Cardnews,
  },
};
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
}

.cardnews_container_style {
  background-color: #f2f2f2;
}
</style>
