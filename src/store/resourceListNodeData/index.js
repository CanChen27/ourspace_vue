//listAjax modulo
//state: datos del store

import { reqNodeResourceList, reqfilterTipoList, reqfilterPeriodoList, reqlistaCompartir } from "@/api";

const state = {
  userListNode: JSON.parse(localStorage.getItem('RESOURCELIST')),
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
  COMPARTIR_NODE_USERS_DATA(state, userListNode) {
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
      localStorage.setItem("RESOURCELIST", JSON.stringify(result.data));

    }
  },
  async filtroTipo(context, keyWord) {
    console.log(">>actions::filtroTipo"); 
    let result = await reqfilterTipoList(keyWord);
    console.log(">>result::", result);  

    context.commit("FILTER_NODE_USERS_DATA", result.message.data);
    
  },
  async filtroPeriodo(context, keyWord) {
    console.log(">>actions::filtroPeriodo"); 
    let result = await reqfilterPeriodoList(keyWord);
    console.log(">>result::", result);  

    context.commit("FILTER_NODE_USERS_DATA", result.message.data);
    
  },

  async listaCompartir(context) {
    console.log(">>actions::filtroPeriodo"); 
    let result = await reqlistaCompartir();
    console.log(">>result::", result);  

    context.commit("COMPARTIR_NODE_USERS_DATA", result.message.data);
    
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
