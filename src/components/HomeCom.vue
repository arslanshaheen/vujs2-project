<template>
  <div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <!-- <li><router-link to="/login">LOGIN</router-link></li> -->
        <!-- <li><router-link to="/signup">SINGNUP</router-link></li> -->

        <li><button @click="toggleAddProductModal">Add products</button></li>
        <li class="login"><LoginCom v-if="addProductModal" /></li>
        <li>
          <button @click="toggleTable">Total list of data</button>
        </li>
        <li><GetApi v-if="tableVisible" /></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import LoginCom from "./LoginCom.vue";
import GetApi from "./GetApi.vue";
export default {
  name: "HomeCom",
  components: {
    LoginCom,
    GetApi,
  },
  data() {
    return {
      addProductModal: false,
      tableVisible: false,
    };
  },
  methods: {
    toggleAddProductModal() {
      this.addProductModal = !this.addProductModal;
    },
    toggleTable() {
      this.tableVisible = !this.tableVisible;
    },
  },
};
</script>

<style scoped>
.nav ul {
  width: 95%;

  height: 70px;
  background-color: rgb(242, 242, 242);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1x solid rgba(168, 168, 168);
  border-bottom: 2px solid rgba(168, 168, 168);
  list-style: none;
  margin: 1px 1px;
  margin-bottom: 10px;
}

.nav ul li a {
  background: rgb(56, 54, 52);
  color: #c4c4c4;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
}
.nav ul li a:hover {
  background: black;
  color: aliceblue;
  font-size: 20px;
}
.nav ul li button {
  background: rgb(56, 54, 52);
  color: #c4c4c4;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
}
.nav ul li button:hover {
  background: black;
  color: aliceblue;
  cursor: pointer;
  font-size: 20px;
}
.toggle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60%;
}
.login {
  z-index: 1;
}
</style>
