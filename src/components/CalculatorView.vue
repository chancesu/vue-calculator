<template>
  <div>
    <div class="calculator-view">{{$store.state.resultText}}</div>
    <div class="calculator-result">{{$store.state.resultNum}}</div>
  </div>
</template>

<script>
export default {
  name: "CalculatorView",
  components: {}
};
</script>

<style lang="scss">
.calculator-view {
  height: 24px;
  margin-bottom: 10px;
  padding: 10px;
  background: #aaa;
  border-bottom: 5px solid #bbb;
  border-radius: 14px;
  font-family: clockicons, sans-serif;
  font-size: 24px;
  text-align: right;
  line-height: 23px;
}
.calculator-result {
  margin-bottom: 20px;
  padding: 10px;
  background: #ddd;
  border-bottom: 5px solid #ccc;
  border-radius: 14px;
  font-family: clockicons, sans-serif;
  font-size: 34px;
  text-align: right;
  line-height: 33px;
}
</style>