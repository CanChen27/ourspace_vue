//listAjax modulo
//state: datos del store 

// import { requserReg, requserLogin, requserInfo, requserLogout } from "@/api";
import { requserReg, requserLogin, requserInfo, reqmisProductos, reqmisReservas, reqgetNormas } from "@/api";

const state = {
  token: localStorage.getItem('TOKEN'),
  userData: JSON.parse(localStorage.getItem('USERINFO')) ,
  misProductos:JSON.parse(localStorage.getItem('MISPRODUCTOS')),
  misReservas:JSON.parse(localStorage.getItem('MISRESERVAS')),
  normas:JSON.parse(localStorage.getItem('GETNORMAS')),

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
    state.misProductos={};
    state.misReservas={};
    state.normas=[];
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERINFO');
    localStorage.removeItem('MISPRODUCTOS');
    localStorage.removeItem('MISRESERVAS');
    localStorage.removeItem('GETNORMAS');
  },
  MISPRODUCTOS (state, misProductos){
    state.misProductos = misProductos;
  },
  MISRESERVAS(state, misReservas){
    state.misReservas = misReservas;
  },
  GETNORMAS(state, normas){
    state.normas = normas;
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
      return {
        code : 200,
        text : ''
      };
    }else if(result.code == 300){
      return {
        code : 300,
        text : 'Usuario contraseña incorrecto'
      };
    }
    else{
      return Promise.reject(new Error("userLog ha fallado"));
    }

  },

  async userInfo({commit}){
    let result = await requserInfo();
    console.log("userInfo store", result);
    if(result.code == 200){ 

      commit('USERINFO', result.data);
      localStorage.setItem("USERINFO", JSON.stringify(result.data));

    }
  },

  async userLogout ({commit}){
    // let result = await requserLogout(); 

    commit("CLEARUSERDATA");
  },

  async buscarMisProductos({commit}){
    let result = await reqmisProductos();
    console.log("buscarMisProductos store", result);
    if(result.code == 200){
      commit('MISPRODUCTOS', result.data);
      localStorage.setItem("MISPRODUCTOS", JSON.stringify(result.data));

    }

  },

  async buscarMisReservas({commit}){
    let result = await reqmisReservas();
    console.log("buscarMisReservas store", result);
    if(result.code == 200){
      commit('MISRESERVAS', result.data); 
      localStorage.setItem("MISRESERVAS", JSON.stringify(result.data));

    }
  },

  async getNormas({commit}){
    let result = await reqgetNormas();
    console.log("getNormas store", result);
    if(result.code == 200){
      commit('GETNORMAS', result.data); 
      localStorage.setItem("GETNORMAS", JSON.stringify(result.data));

    }
  }
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
