<script setup lang="ts">
const counterStore = useCounterStore();
const { increment } = counterStore;

const accessCounterStore = useAccessCounterStore();
accessCounterStore.increment();
</script>

<template>
  <div>
    <p>このページに{{ accessCounterStore.count }}回アクセスしました</p>
  </div>
  <div>
    <p>ボタンを{{ counterStore.count }}回押しました</p>
    <button @click="increment">+1する</button>
  </div>
</template>
