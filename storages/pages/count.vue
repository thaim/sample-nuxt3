<script setup lang="ts">
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="increment">+1する</button>
        <nuxt-link to="/">戻る</nuxt-link>
    </div>
</template>
