//listAjax modulo
//state: datos del store

import { reqNodeResourceList, reqNodeDefaultFilterList } from "@/api";

const state = {
  userListNode: [],
  dataList: 1,
};
//mutations una forma de modificar el state
const mutations = {
  GET_NODE_USERS_DATA(state, userListNode) {
    // console.log(">>mutations::GET_USERS_DATA", userList);
    console.log("Esto funcionax2");

    state.userListNode = userListNode;
  },
  FILTER_NODE_USERS_DATA(state, userListNode) {
    state.userListNode = userListNode;
  },
};
//
const actions = {
  async getNodeUsersData(context) {
    // console.log(">>actions::getUsersData");
    let result = await reqNodeResourceList();
    if(result.status == 200){
      console.log("Esto funciona", result);
      context.commit("GET_NODE_USERS_DATA", result.data);

    }
  },
  async filterNodeUsersData(context, keyWord) {
    console.log(">>actions::filterNodeUsersData");
    console.log(">>keyword::", keyWord);
    let result = await reqNodeDefaultFilterList(keyWord.keyWord);
    console.log(">>result::", result);  

    context.commit("FILTER_NODE_USERS_DATA", result.message.data);
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
