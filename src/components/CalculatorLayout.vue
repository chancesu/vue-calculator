<template>
  <div class="calculator-warp">
    <CalculatorView/>
    <CalculatorInput/>
  </div>
</template>

<script>
import CalculatorInput from "@/components/CalculatorInput.vue";
import CalculatorView from "@/components/CalculatorView.vue";
export default {
  name: "CalculatorWarp",
  components: {
    CalculatorInput,
    CalculatorView
  }
};
</script>

<style lang="scss">
.calculator-warp {
  width: 280px;
  margin: 60px auto;
  padding: 40px;
  border-radius: 20px;
  background: #626262;
}
</style>