<script>
// @ is an alias to /src
import Dashboard from "@/views/Dashboard.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "Home",
  computed: {
    ...mapState(["posts"]),
  },
  async created() {
    await this.fetchPosts()
  },
  methods: {
    ...mapActions(["fetchPosts", "login"]),
  },
  components: {
    Dashboard,
  },
}
</script>

<template>
  <div class="home">
    <button @click="login">Login</button>
    <!-- <form action="https://blog-api-cihat.herokuapp.com" method="POST">
      <label for="username">Username</label>
      <input name="username" placeholder="username" type="text" />
      <br />
      <label for="password">Password</label>
      <input name="password" type="password" /><button>Log In</button>
    </form> -->
    <Dashboard />
  </div>
</template>
