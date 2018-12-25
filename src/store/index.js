// lib
import Vue from "vue";
import Vuex from "vuex";

// plugin
Vue.use(Vuex);

import mutations from "@/store/mutations";
import state from "@/store/state";
import actions from "@/store/actions";

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions
});
