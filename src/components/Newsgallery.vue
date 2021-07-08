<template>
  <div class="cardnews_container_style">
    <!-- <Cardnews /> -->
    <div class="container-cards">
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
      <div class="cards_size">
        <img src="./img/1.png" alt="pic" />
        <div class="block_card_style">
          <div class="content-title">ЭМОЦИИ</div>
          <div class="content-text">
            «За одной и той же истерикой могут стоять разные причины». Как
            научиться управлять эмоциями
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Cardnews from "./components/Cardnews.vue";

export default {
  name: "Newsgallery",
  //   props: {
  //     msg: String,
  //   },
  components: {
    // Cardnews,
  },
};
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  margin: 0px auto;
}
.content-text {
  font-weight: 600;
  font-size: 21.5px;
  text-align: center;
  color: black;
}
.content-title {
  color: rgb(236, 52, 94);
  font-weight: 600;
  font-size: 11px;
  margin-bottom: 7px;
  text-align: center;
}
.cards_size {
  width: 280px;
  margin: 15px;
  background-color: white;
}
.block_card_style {
  padding: 20px 25px 25px;
}
.cardnews_container_style {
  background-color: #f2f2f2;
}
</style>