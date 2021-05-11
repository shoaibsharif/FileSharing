import axios from "axios";

export default {
  namespace: true,
  state: {
    authenticated: false,
    user: null,
  },
  actions: {
    async login({ dispatch }, credentials) {
      await axios.get("/sanctum/csrf-cookie");
    },
  },
};
