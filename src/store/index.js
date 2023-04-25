import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import listAjaxData from "./listAjaxData";
import listMockData from "./listMockData";
import resourceListNodeData from "./resourceListNodeData";
import detailsNodeData from "./resourceDetailsNodeData";
export default new Vuex.Store({
  modules: {
    listAjaxData,
    listMockData,
    resourceListNodeData,
    detailsNodeData,
  },
});
