<template>
  <div>
    <div class="cards_size">
      <img class="size_pic" :src="require('@/components/' + card_news.img)" />
      <div class="block_card_style">
        <div class="content-title">{{ card_news.title }}</div>
        <div class="content-text">
          {{ card_news.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardnews",
  components: {},
  props: {
    card_news: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
};
</script>

<style scoped>
.size_pic {
  width: 280px;
  height: 220px;
}
.cards_size {
  width: 280px;
  margin: 15px;
  background-color: white;
}
.block_card_style {
  padding: 20px 25px 25px;
  width: 280;
  /* height: 200px; */
}
.content-title {
  color: rgb(236, 52, 94);
  font-weight: 600;
  font-size: 11px;
  margin-bottom: 7px;
  text-align: center;
}
.content-text {
  font-weight: 600;
  font-size: 21.5px;
  text-align: center;
  color: black;
  height: 150px;
}
</style>