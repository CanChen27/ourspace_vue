//searchMock modulo

//state: datos del store
import { reqAjaxResourceList, reqMockResourceList } from "@/api";

const state = {
  userList: [],
};
//mutations una forma de modificar el state
const mutations = {
  GET_MOCK_USERS_DATA(state, userList) {
    // console.log(">>mutations::GET_MOCK_USERS_DATA", userList);
    state.userList = userList;
  },
};
//
const actions = {
  async getMockUsersData(context) {
    // console.log(">>actions::getMockUsersData");
    let result = await reqMockResourceList();
    // console.log(result);

    context.commit("GET_MOCK_USERS_DATA", result.data);
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
