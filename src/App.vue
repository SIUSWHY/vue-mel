<template>
  <div id="app">
    <Header />
    <Newsgallery />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Newsgallery from "./components/Newsgallery.vue";
import store from "@/components/store/index";

export default {
  name: "App",
  components: {
    Header,
    Newsgallery,
  },
  store,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: -webkit-center;
  /* margin-top: 60px; */
}
</style>
