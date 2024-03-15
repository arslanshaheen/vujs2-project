<template>
  <div class="createuser">
    <button @click="toggleForm">
      {{ formVisible ? "Hide Form" : "Show Form" }}
    </button>
    <h2 v-if="formVisible">Create New User</h2>
    <form v-if="formVisible" @submit.prevent="handleUser">
      <input type="text" v-model="name" placeholder="Enter your name" />
      <input type="email" v-model="email" placeholder="Enter your email" />
      <input type="submit" value="Add User" />
    </form>
    <!-- {{ formVisible }} -->
    <div v-if="submitted">
      <h2>Submitted User:</h2>
      <p>Name: {{ submittedUser.name }}</p>
      <p>Email: {{ submittedUser.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  data() {
    return {
      formVisible: false,
      submitted: false,
      name: "",
      email: "",
      submittedUser: {},
    };
  },
  methods: {
    toggleForm() {
      this.formVisible = !this.formVisible;
    },
    handleUser() {
      const user = {
        name: this.name,
        email: this.email,
      };

      fetch("https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          this.formVisible = false;
          this.name = "";
          if (data.acknowledged > 0) {
            this.submitted = true;
            this.submittedUser = { ...user };
            this.name = "";
            this.email = "";
            // setTimeout(() => {
            //   this.submitted = false;
            // }, 5000);
            this.fetchUsers();
          }
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here if needed */
</style>
