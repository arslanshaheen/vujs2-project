<template>
  <div>
    <!-- <button @click="toggleTable">Total list of data</button> -->
    <div>
      <!-- <button @click="showModal">Show Modal</button> -->
      <div v-if="modalShow" class="modal">
        <div class="modal-content">
          <span @click="hideModal" class="close">&times;</span>
          <p>This is a modal.</p>
        </div>
      </div>
      <div class="card-container">
        <div class="card" v-for="item in list" :key="item.id">
          <!-- <img :src="item.imageUrl" alt="Product Image" /> -->
          <img
            src="https://media.istockphoto.com/id/861188910/photo/different-types-of-food-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=_3QH87_AYm5YgcpC9L4JVmTKm49QydKDr9sJq7IvUu4="
            alt=""
          />
          <div class="card-details">
            <p>{{ item.productName }}</p>
            <p>{{ item.productCost }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetApi",
  data() {
    return {
      modalShow: false,
      // tableVisible: false,
      list: [],
    };
  },
  methods: {
    showModal() {
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    },
    //toggleTable() {
    //   this.tableVisible = !this.tableVisible;
    // },
  },
  mounted() {
    axios
      .get("https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/products")
      .then((response) => {
        this.list = response.data.map((item) => ({
          ...item,
          imageUrl: "https://example.com/image.jpg", // Replace with actual image URL
        }));
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

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(33.33% - 20px);
}

.card img {
  width: 100%;
  height: auto;
}

.card-details {
  text-align: center;
}
</style>
