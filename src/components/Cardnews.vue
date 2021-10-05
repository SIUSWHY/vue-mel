<template>
  <div id="cards_data">
    <div class="cards_size">
      <div style="height: 220px">
        <img
          class="size_pic"
          src="http://192.168.88.101:3000/images/8aec02cbf63d3bae2dc893a67d359ba9.png"
        />
      </div>
      <div class="block_card_style">
        <div class="content-title">{{ card_news.title }}</div>
        <div class="content-text">
          {{ card_news.text }}
        </div>
        <div class="counts_position">
          <!-- <div class="date_style">{{ card_news.newDate }}</div> -->
          <div>
            <div class="view_count_style">
              <font-awesome-icon icon="heart" /> {{ card_news.viewCount }}
            </div>
            <div class="comment_count_style">
              <font-awesome-icon icon="comment" /> {{ card_news.commentCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardnews",
  props: ["card_news"],

  updated() {
    // console.log(this.card_news);
  },

  computed: {},
};
</script>

<style scoped>
.comment_count_style {
  display: inline-block;
  margin: 0px 10px;
}
.view_count_style {
  margin: 0px 10px;
  display: inline-block;
}
.counts_potion {
  display: flex;
}
.date_style {
  font: 13px Arial;
  margin: 0px 0px 10px 170px;
}
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
