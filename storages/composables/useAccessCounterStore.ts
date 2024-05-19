import { defineStore } from "pinia";

// ブラウザの各種ストレージを用いて永続化するカウンター。
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
  persist: {
    // storage: persistedState.localStorage,
    // storage: persistedState.sessionStorage,
    storage: persistedState.cookiesWithOptions({}),
  },
});
