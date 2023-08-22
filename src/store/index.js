import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import listAjaxData from "./listAjaxData"; 
import resourceListNodeData from "./resourceListNodeData"; 
import userNodeData from "./user";
export default new Vuex.Store({
  modules: {
    listAjaxData, 
    resourceListNodeData, 
    userNodeData
  },
});
