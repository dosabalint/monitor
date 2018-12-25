import { ADD_SERVICE } from "@/store/mutation-types";

export default {
  addService({ commit }, service) {
    commit(ADD_SERVICE, service);
  }
};
