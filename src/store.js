import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    resultText: '',
    resultComplete: '',
    resultNum: 0,
    reset: false,
    middleBool: false
  },
  mutations: {
    addText: (state, text) => {
      if (!state.reset) {
        state.resultText += text;
      } else {
        state.reset = false;
        state.resultText = text;
        state.resultNum = 0;
        state.resultComplete = '';
      }
    },
    middleCompute: (state, text) => {
      if (!state.middleBool) {
        state.middleBool = true;
      } else {
        if (state.resultComplete == '') {
          state.resultComplete = state.resultText;
          state.resultNum = eval(state.resultText).toFixed(2);
        } else {
          state.resultNum = eval(state.resultNum + state.resultText.split(state.resultComplete).pop()).toFixed(2);
          state.resultComplete = state.resultText;
        }
      }
      state.resultText += text;
    },
    compute: (state) => {
      state.resultNum = eval(state.resultText).toFixed(2);
      state.reset = true;
      state.middleBool = false;
    }
  }
});