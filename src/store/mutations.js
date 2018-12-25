import { ADD_SERVICE } from "@/store/mutation-types";

export default {
  [ADD_SERVICE]({ serviceList }, service) {
    serviceList.push(Object.assign({}, service));
  }
};
