<script setup lang="ts">
const counter = useCounterStore();
</script>

<template>
    <div>
        <nuxt-link to="/count">countページ</nuxt-link>
        <p>ボタンを{{ counter.count }}回押しました</p>
    </div>
</template>
