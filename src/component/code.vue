<template>
  <!-- Code block to display Vue.js code based on active section -->
  <div class="p-5 rounded-lg">
    <pre class="h-40 overflow-y-scroll">
          <code ref="codeBlock" :class="languageClass"></code>
        </pre>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css"; // CSS theme

// Import raw code sections
import templateCodeRaw from "./snakegame.vue?raw&lang=html";
import scriptCodeRaw from "./snakegame.vue?raw&lang=js";
import styleCodeRaw from "./snakegame.vue?raw&lang=css";

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

const activeSection = ref("template");
const codeBlock = ref(null);
const languageClass = ref("html");

watch(activeSection, (newSection) => {
  if (newSection === "template") {
    codeBlock.value.textContent = templateCodeRaw;
    languageClass.value = "html";
  } else if (newSection === "script") {
    codeBlock.value.textContent = scriptCodeRaw;
    languageClass.value = "javascript";
  } else if (newSection === "style") {
    codeBlock.value.textContent = styleCodeRaw;
    languageClass.value = "css";
  }
  hljs.highlightBlock(codeBlock.value); // Apply syntax highlighting
});

onMounted(() => {
  codeBlock.value.textContent = templateCodeRaw; // Default content
  hljs.highlightBlock(codeBlock.value); // Apply syntax highlighting
});
</script>
