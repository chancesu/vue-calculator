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
font-style: normal;
font-weight: 400;
font-variant: normal;
text-transform: none;
line-height: 1;
</style>
