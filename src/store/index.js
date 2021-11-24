import { createStore } from "vuex"
import axios from "axios"

console.log(process.env.VUE_APP_API_KEY)

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_KEY,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default createStore({
  state: {
    posts: [],
    username: "test",
    password: "test",
    user: {},
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },
    setPost(state, payload) {
      state.post = payload
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const res = await axiosInstance.get("/posts")
      commit("setPosts", res.data)
    },

    async login({ commit, state }) {
      await axiosInstance.post("/login", { username: state.username, password: state.password })
    }
  },
  modules: {},
})
