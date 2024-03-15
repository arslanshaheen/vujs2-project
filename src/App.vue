<template>
  <div id="app">
    <nav>
      <ul>
        <li><HelloWorld /></li>
        <!-- <li><CreateUser /></li> -->
        <!-- <li><router-view to="/creater-user"></router-view></li> -->
      </ul>
    </nav>
    <!-- <HomeCom /> -->
    <!-- <div class="cardata"><CardsData /></div> -->
  </div>
</template>

<script>
// import CreateUser from "./components/CreateUser.vue";
// import GetApi from "./components/GetApi";
// import CardsData from "./components/CardsData";
// import HomeCom from "./components/HomeCom.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // CreateUser,
    // // GetApi,
    // CardsData,
    // HomeCom,
    HelloWorld,
  },
};
</script>

<style scoped></style>
