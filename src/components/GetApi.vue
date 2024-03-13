<template>
  <div class="main">
    <!-- <button @click="toggleTable">Total list of data</button> -->
    <div class="table">
      <table border="1px">
        <tr>
          <td>productName</td>
          <td>productCost</td>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.productName }}</td>
          <td>{{ item.productCost }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetApi",
  data() {
    return {
      //   tableVisible: false,
      list: undefined,
    };
  },
  //   methods: {
  //     toggleTable() {
  //       this.tableVisible = !this.tableVisible;
  //     },
  //   },
  mounted() {
    axios
      .get("https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/products")
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style>
/* Modal styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal content */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* Close button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.main {
  top: 50%;
  left: 40%;
  position: absolute;
}
.table {
  width: 100%;
  height: 100%;
  background-color: #70777d;

  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
