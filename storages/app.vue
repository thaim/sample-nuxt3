<script setup lang="ts">
const counterStore = useCounterStore();
const { increment } = counterStore;
</script>

<template>
  <div>
    <p>ボタンを{{ counterStore.count }}回押しました</p>
    <button @click="increment">+1する</button>
  </div>
</template>
