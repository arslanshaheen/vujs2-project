<template>
  <div>
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
      <div v-if="submitted">
        <h2>Submitted User:</h2>
        <p>Name: {{ submittedUser.name }}</p>
        <p>Email: {{ submittedUser.email }}</p>
      </div>
    </div>

    <h1>All users: {{ loadedUser.length }}</h1>
    <div class="user_cards">
      <div v-for="user in loadedUser" :key="user._id" class="cards">
        <img :src="user.photoURL" alt="" />
        <h5>{{ user.name }}</h5>
        <p>{{ user.email }}</p>
        <div class="btn">
          <button @click="handleDelete(user._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CombinedComponent",
  data() {
    return {
      formVisible: false,
      submitted: false,
      name: "",
      email: "",
      submittedUser: {},
      loadedUser: [],
    };
  },
  methods: {
    toggleForm() {
      this.formVisible = !this.formVisible;
    },
    async handleUser() {
      const user = {
        name: this.name,
        email: this.email,
      };

      try {
        const response = await fetch(
          "https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const data = await response.json();
        this.formVisible = false;
        this.name = "";
        this.email = "";
        await this.fetchUsers();
        if (response.ok && data.acknowledged > 0) {
          this.fetchUsers(); // Fetch updated user list
          this.formVisible = false;
          this.name = "";
          this.email = "";
          this.submitted = true;
          this.submittedUser = { ...user };
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    },
    async handleDelete(_id) {
      try {
        const response = await fetch(
          `https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user/${_id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          this.loadedUser = this.loadedUser.filter((user) => user._id !== _id);
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch(
          "https://65f02b9fda8c6584131afcde.mockapi.io/ap/v1/user"
        );
        const data = await response.json();
        this.loadedUser = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers(); // Fetch users when component mounts
  },
};
</script>

<style scoped>
/* Container styles */
.createuser {
  margin-bottom: 20px;
}

/* Form styles */
.createuser button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.createuser h2 {
  margin-top: 20px;
  font-size: 1.5rem;
}

.createuser form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.createuser form input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.createuser form input[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

/* Submitted user styles */
.createuser .submitted {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.createuser .submitted h2 {
  font-size: 1.2rem;
}

.createuser .submitted p {
  margin-bottom: 5px;
}

/* User cards styles */
.user_cards {
  display: flex;
  flex-wrap: wrap;
}

.cards {
  flex: 0 1 calc(25% - 20px);
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.cards img {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.cards h5 {
  margin-top: 10px;
  font-size: 1.2rem;
}

.cards p {
  margin-bottom: 10px;
  color: #666;
}

.cards .btn {
  margin-top: 10px;
}

.cards .btn button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

/* Responsive styles */
@media (max-width: 768px) {
  .cards {
    flex: 0 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .cards {
    flex: 0 1 calc(100% - 20px);
  }
}
</style>
