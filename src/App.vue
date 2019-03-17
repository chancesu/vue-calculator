<template>
  <div id="app">
    <CalculatorLayout/>
  </div>
</template>

<script>
import CalculatorLayout from "./components/CalculatorLayout.vue";

export default {
  name: "app",
  components: {
    CalculatorLayout
  }
};
</script>

<style>
html,
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: clockicons;
  src: url(../src/assets/clockicons.eot#iefix) format("embedded-opentype"),
    url(../src/assets/clockicons.woff2) format("woff2"),
    url(../src/assets/clockicons.woff) format("woff"),
    url(../src/assets/clockicons.ttf) format("truetype"),
    url(../src/assets/clockicons.svg) format("svg");
  font-weight: 400;
  font-style: normal;
}
font-style: normal;
font-weight: 400;
font-variant: normal;
text-transform: none;
line-height: 1;
</style>
