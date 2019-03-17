<template>
  <div class="calculator-button">
    <button type="button" value="7" @click="enterHit">7</button>
    <button type="button" value="8" @click="enterHit">8</button>
    <button type="button" value="9" @click="enterHit">9</button>
    <button type="button" value="/" @click="enterHit">/</button>
    <button type="button" value="4" @click="enterHit">4</button>
    <button type="button" value="5" @click="enterHit">5</button>
    <button type="button" value="6" @click="enterHit">6</button>
    <button type="button" value="*" @click="enterHit">*</button>
    <button type="button" value="1" @click="enterHit">1</button>
    <button type="button" value="2" @click="enterHit">2</button>
    <button type="button" value="3" @click="enterHit">3</button>
    <button type="button" value="-" @click="enterHit">-</button>
    <button type="button" value="0" @click="enterHit">0</button>
    <button type="button" value="." @click="enterHit">.</button>
    <button type="button" value="+" @click="enterHit">+</button>
    <button type="button" class="btn-result" value="=" @click="enterHit">=</button>
  </div>
</template>

<script>
export default {
  name: "CalculatorInput",
  components: {},
  methods: {
    enterHit(e) {
      if (e.target.value == "=") {
        this.$store.commit("compute");
      } else if (isNaN(e.target.value)) {
        if (e.target.value == 0) {
          this.$store.commit("addText", e.target.value);
        } else {
          this.$store.commit("middleCompute", e.target.value);
        }
      } else {
        this.$store.commit("addText", e.target.value);
      }
    }
  }
};
</script>

<style lang="scss">
.calculator-button {
  height: 290px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  button {
    width: 60px;
    height: 60px;
    padding: 10px;
    border: 0;
    border-bottom: 5px solid #e5e6e7;
    border-radius: 10px;
    background: #fff;
    font-size: 30px;
    font-weight: bold;
    word-break: keep-all;
    &:active {
      border-width: 0 0 1px;
    }
    &.btn-result {
      background: #f89734;
      border-color: #e68937;
    }
  }
}
</style>