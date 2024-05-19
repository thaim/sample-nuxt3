import { defineStore } from "pinia";

// データ永続化しないカウンター。ページをリロードするとクリアされる。
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  return {
    count,
    increment,
  };
});
