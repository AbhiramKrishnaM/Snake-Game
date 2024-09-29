<template>
  <h1
    class="w-screen h-screen bg-theme-main text-white-gradient-01 flex items-center justify-center"
  >
    <SnakeGame />

    <CodeSnippet />
  </h1>
</template>

<script setup>
import SnakeGame from "./component/snakegame.vue";
import CodeSnippet from "./component/code.vue";
</script>
