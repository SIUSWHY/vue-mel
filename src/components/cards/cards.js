import Vue from "vue";
import axios from "axios";
// import { info } from "console";

new Vue({
  el: "#test",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
});
