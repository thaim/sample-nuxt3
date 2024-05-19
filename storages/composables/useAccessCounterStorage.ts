import { defineStore } from "pinia";

export const useAccessCounterStore = defineStore("accessCounter", {
  state: () => {
    const count = ref(0);
    return {
      count,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: true,
});
