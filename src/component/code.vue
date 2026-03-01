<template>
  <div class="relative rounded-lg text-white">
    <div class="absolute top-2 left-2 flex space-x-2">
      <button @click="setActiveSection('template')" :class="activeSection === 'template' ? activeClass : inactiveClass">
        Template
      </button>
      <button @click="setActiveSection('script')" :class="activeSection === 'script' ? activeClass : inactiveClass">
        Script
      </button>
      <button @click="setActiveSection('style')" s :class="activeSection === 'style' ? activeClass : inactiveClass">
        Style
      </button>
    </div>
    <pre class="h-56 overflow-y-scroll mt-12 p-4 rounded-md">
        <code ref="codeBlock" :class="languageClass"></code>
      </pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.css";

const templateCode = `
  &lt;template&gt;
    &lt;div id=&quot;snake-game&quot; class=&quot;relative p-3 min-w-[510px]&quot;&gt;
      &lt;div class=&quot;top-left-fill -z-10&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bottom-left-fill -z-10&quot;&gt;&lt;/div&gt;
      &lt;!-- Template content goes here --&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  `;

const scriptCode = `
  &lt;script setup&gt;
  // Vue.js setup code for the Snake game
  import { ref, onMounted, computed } from &quot;vue&quot;;
  // Game logic goes here
  &lt;/script&gt;
  `;

const styleCode = `
  &lt;style scoped&gt;
  #snake-game {
    width: 510px;
    height: 475px;
    border: 1px solid #0c1616;
    background: linear-gradient(150deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.09) 81.82%);
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset;
  }
  &lt;/style&gt;
  `;

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const activeSection = ref("template");
const codeBlock = ref(null);
const languageClass = ref("html");

const activeClass = "bg-blue-600 text-white py-2 px-4 rounded-lg";
const inactiveClass =
  "bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400";

function setActiveSection(section) {
  activeSection.value = section;

  if (section === "template") {
    codeBlock.value.innerHTML = templateCode;
    languageClass.value = "html";
  } else if (section === "script") {
    codeBlock.value.innerHTML = scriptCode;
    languageClass.value = "javascript";
  } else if (section === "style") {
    codeBlock.value.innerHTML = styleCode;
    languageClass.value = "css";
  }

  hljs.highlightElement(codeBlock.value);
}

onMounted(() => {
  setActiveSection("template");
});
</script>

<style scoped>
button {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
