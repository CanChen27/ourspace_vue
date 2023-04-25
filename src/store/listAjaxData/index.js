//listAjax modulo
//state: datos del store

import { reqAjaxResourceList } from "@/api";

const state = {
  userList: [],
};
//mutations una forma de modificar el state
const mutations = {
  GET_USERS_DATA(state, userList) {
    console.log(">>mutations::GET_USERS_DATA", userList);
    state.userList = userList;
  },
};
//
const actions = {
  async getUsersData() {
    console.log(">>actions::getUsersData");
    let result = await reqAjaxResourceList();
    console.log(result);
    // context.commit("GET_USERS_DATA", result.items);
  },
};
//getters:
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
