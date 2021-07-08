<template>
  <div class="back-g_headr_menu">
    <div class="r-nav-b_position">
      <div class="r-nav-b_position">
        <div>Logo</div>
        <nav>
          <ul class="menu_list">
            <li class="active">Тексты</li>
            <li>Рассылки</li>
          </ul>
        </nav>
      </div>
      <div class="l-nav-b_position">
        <div>
          <input
            class="search-b"
            type="text"
            placeholder="  Ищите статью?"
            id=""
          />
          <!-- <font-awesome-icon icon="times-circle" size="2x" /> -->
          <!-- <font-awesome-icon icon="user-secret" /> -->
        </div>
        <a class="type-list-right-menu" href="">НАПИСАТЬ В БЛОГ</a>
        <button class="si-up_b-style" type="submit">Sing Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.si-up_b-style {
  /* font-size: 13px; */
  font-weight: 600;
  background-color: #47b3ac;
  border-radius: 50px;
  padding: 10px;
  /* text-decoration: none; */
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
  margin: 20px 10px 0px 0px;
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
  /* margin: 0 auto; */
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
