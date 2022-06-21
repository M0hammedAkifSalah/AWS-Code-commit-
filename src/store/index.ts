import { defineStore } from "pinia";

export const globalState = defineStore("globalState", {
  state: () => ({
    role: "",
  }),
  getters: {
    double: (state) => state.role,
  },
  actions: {},
});
