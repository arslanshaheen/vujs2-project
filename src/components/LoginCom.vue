<template>
  <div>
    <!-- <button @click="addProductModal = !addProductModal">Click here</button> -->
    <div class="main">
      <h1>Products List</h1>
      <form @submit="submitData" class="form">
        <input
          type="text"
          name="title"
          v-model="post.productName"
          placeholder="title"
        /><br /><br />
        <input
          type="text"
          name="title"
          v-model="post.productCost"
          placeholder="author"
        />
        <br /><br />

        <button type="submit">Submit Data</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostApi",

  data() {
    return {
      post: {
        productName: "",
        productCost: "",
      },
      //   addProductModal: false,
    };
  },

  methods: {
    submitData(e) {
      axios.post(
        "https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/products",
        this.post
      );
      e.preventDefault();
      // Reset the form after successful submission
      this.post.productName = "";
      this.post.productCost = "";
    },
  },
};
</script>

<style scoped>
.main {
  width: 400px;
  margin: 0 auto;
  align-content: center;
  border: 1px solid #ccc;
  background-color: #151111;
  border-radius: 6px;
  top: 50%;
  left: 40%;
  position: absolute;
}

.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
input {
  padding: 10px;
  width: 70%;
  border-radius: 10px;
}
input[name] {
  font-size: 20px;
  border: 1px solid #ccc;
  font-weight: bold;
}
button {
  padding: 10px;
  width: 50%;
  border-radius: 10px;

  border: 1px solid #ccc;
  font-weight: bold;
  margin-bottom: 4px;
  cursor: pointer;
}
h1 {
  text-align: center;
}
h1:hover {
  text-decoration: underline;
}
button:hover {
  background: #151111;
  color: #fff;
}
</style>
