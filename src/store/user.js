//listAjax modulo
//state: datos del store 

// import { requserReg, requserLogin, requserInfo, requserLogout } from "@/api";
import { requserReg, requserLogin, requserInfo, reqmisProductos } from "@/api";

const state = {
  token: localStorage.getItem('TOKEN'),
  userData:{},
  misProductos:{}

};
//mutations una forma de modificar el state
const mutations = {
  USERLOGIN (state, token){
    state.token = token;
  },
  USERINFO (state, userData){
    state.userData = userData;
  },
  CLEARUSERDATA(state){
    state.token='';
    state.userData={};
    localStorage.removeItem('TOKEN');
  },
  MISPRODUCTOS (state, misProductos){
    state.misProductos = misProductos;
  },
};
//
const actions = {
 //registrar usuario
  async userReg(state, user){
    console.log(">>userReg",user);

    let result = await requserReg(user);
    console.log(">>userReg", result);
  },

  async userLog({commit}, user){
    console.log(">>userLog",user);

    let result = await requserLogin(user);
    console.log(">>userLog res",result); 

    //si se ha iniciado seción correctamente
    if(result.code == 200){
      //guardar token
      commit('USERLOGIN', result.data.token);

      //guardar datos de forma "permanente" 
      //para evitar perder los datos al refrescar
      localStorage.setItem("TOKEN", result.data.token);
      return "userLog exito";
    }else{
      return Promise.reject(new Error("userLog ha fallado"));
    }

  },

  async userInfo({commit}){
    let result = await requserInfo();
    console.log("userInfo store", result);
    commit('USERINFO', result.data);
  },

  async userLogout ({commit}){
    // let result = await requserLogout(); 

    commit("CLEARUSERDATA");
  },

  async buscarMisProductos({commit}){
    let result = await reqmisProductos();
    console.log("buscarMisProductos store", result);
    commit('MISPRODUCTOS', result.data);
  },
};
//getters:
const getters = { 
};

export default {
  state,
  mutations,
  actions,
  getters,
};
