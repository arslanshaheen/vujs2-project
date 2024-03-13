<template>
  <div id="app">
    <HomeCom />
    <div class="cardata"><CardsData /></div>

    <!-- <GetApi /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HomeCom from "./components/HomeCom.vue";
// import GetApi from "./components/GetApi";
import CardsData from "./components/CardsData";

export default {
  name: "App",
  components: {
    HomeCom,
    // GetApi,
    CardsData,
  },
};
</script>

<style scoped></style>
