//listAjax modulo
//state: datos del store

import { reqNodeResourceDetails } from "@/api";

const state = {
  titleInfo: [],
  carousel: [],
  features: [],
  about: [],
  comments: [],
  id: "",
};
//mutations una forma de modificar el state
const mutations = {
  GET_NODE_TITLEINFO(state, titleInfo) {
    console.log(">>mutations::GET_NODE_titleInfo", titleInfo);
    state.titleInfo = titleInfo;
  },
  SET_RESOURCE_ID(state, id) {
    state.id = id;
  },
};
//
const actions = {
  async getNodeTitleInfo(context, keyWord) {
    console.log(">>actions::getNodetitleInfo::keyword: ", keyWord);
    let result = await reqNodeResourceDetails(keyWord);
    context.commit("GET_NODE_TITLEINFO", result.data);
  },
  setResourceId(context, keyWord) {
    context.commit("SET_RESOURCE_ID", keyWord);
  },
};
//getters:
const getters = {
  getResourceId(state) {
    return state.id;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
