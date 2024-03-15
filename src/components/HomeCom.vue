<template>
  <div>
    <h1>All users: {{ loadedUser.length }}</h1>
    <div class="user_cards">
      <div v-for="user in loadedUser" :key="user._id" class="cards">
        <img :src="user.photoURL" alt="" />
        <h5>{{ user.name }}</h5>
        <p>{{ user.email }}</p>
        <div class="btn">
          <button @click="handleDelete(user._id)">Delete</button>
          <router-link :to="'/update-user/' + user._id">Update</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedUser: [],
    };
  },
  methods: {
    async handleDelete(_id) {
      console.log(_id);
      try {
        const response = await fetch(
          `https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user/${_id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log(data);
        this.loadedUser = this.loadedUser.filter((user) => user._id !== _id);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch(
          "https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user"
        ); // Adjust the URL based on your server
        const data = await response.json();
        this.loadedUser = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Add your CSS styles here if needed */
</style>
