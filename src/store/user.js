//listAjax modulo
//state: datos del store 

// import { requserReg, requserLogin, requserInfo, requserLogout } from "@/api";
import { requserReg, requserLogin, requserInfo, reqmisProductos, reqmisReservas, reqgetNormas, reqlistaFavoritos, reqmisNotificaciones, reqrootUsuarios } from "@/api";

const state = {
  token: localStorage.getItem('TOKEN'),
  userData: JSON.parse(localStorage.getItem('USERINFO')) ,
  misProductos:JSON.parse(localStorage.getItem('MISPRODUCTOS')),
  misReservas:JSON.parse(localStorage.getItem('MISRESERVAS')),
  normas:JSON.parse(localStorage.getItem('GETNORMAS')),
  favoritos: JSON.parse(localStorage.getItem('FAVORITOS')),
  notificaciones: JSON.parse(localStorage.getItem('NOTIFICACIONES')),
  listaUsuarios: JSON.parse(localStorage.getItem('LISTAUSUARIOS'))

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
    state.favoritos={};
    state.notificaciones={};
    state.listaUsuarios={};
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERINFO');
    localStorage.removeItem('MISPRODUCTOS');
    localStorage.removeItem('MISRESERVAS');
    localStorage.removeItem('GETNORMAS');
    localStorage.removeItem('FAVORITOS');
    localStorage.removeItem('NOTIFICACIONES');
    localStorage.removeItem('LISTAUSUARIOS');
    localStorage.removeItem('RESOURCELIST');
    this.$store.state.userNodeData.userListNode = {};
  },
  MISPRODUCTOS (state, misProductos){
    state.misProductos = misProductos;
  },
  MISRESERVAS(state, misReservas){
    state.misReservas = misReservas;
  },
  FAVORITOS(state, favoritos){
    state.favoritos = favoritos;
  },
  NOTIFICACIONES(state, notificaciones){
    state.notificaciones = notificaciones
  },
  LISTAUSUARIOS(state, listaUsuarios){
    state.listaUsuarios = listaUsuarios
  },
  GETNORMAS(state, normas){
    state.normas = normas;
  },
};
//
const actions = {
 //registrar usuario
  async userReg(state, user){ 

    let result = await requserReg(user);
    console.log("userReg store", result);
    if(result.status == 200){ 
      return {
        status : 200,
        text : 'Felicidades te has registrado de forma correcta'
      };
    } 
    else{
      return {
        status : 1, 
        text: "Hubo un error en el registro intentelo de nuevo. Error::" + result.message
      }
    }
  },

  async userLog({commit}, user){
    console.log(">>userLog",user);

    let result = await requserLogin(user);
    console.log(">>userLog res",result); 

    //si se ha iniciado seción correctamente
    if(result.status == 200){
      //guardar token
      commit('USERLOGIN', result.data.token);

      //guardar datos de forma "permanente" 
      //para evitar perder los datos al refrescar
      localStorage.setItem("TOKEN", result.data.token);
      return {
        status : 200,
        text : ''
      };
    }else if(result.status == 300){
      return {
        status : 300,
        text : 'Usuario/contraseña incorrecto'
      };
    }
    else{
      return {
        status : 1, 
        text: "Usuario/contraseña incorrecto"
      }
    }

  },

  async userInfo({commit}){
    let result = await requserInfo();
    console.log("userInfo store", result);
    if(result.status == 200){ 

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
    if(result.status == 200){
      commit('MISPRODUCTOS', result.data);
      localStorage.setItem("MISPRODUCTOS", JSON.stringify(result.data));

    }

  },

  async buscarMisReservas({commit}){
    let result = await reqmisReservas();
    console.log("buscarMisReservas store", result);
    if(result.status == 200){
      commit('MISRESERVAS', result.data); 
      localStorage.setItem("MISRESERVAS", JSON.stringify(result.data));

    }
  },

  async buscarFavoritos({commit}){
    let result = await reqlistaFavoritos();
    console.log("buscarFavitos store", result);
    if(result.status == 200){
      commit('FAVORITOS', result.data); 
      localStorage.setItem("FAVORITOS", JSON.stringify(result.data));

    }
  },

  async buscarNotificaciones({commit}){
    let result = await reqmisNotificaciones();
    console.log("buscarNotificaciones store", result);
    if(result.status == 200){
      commit('NOTIFICACIONES', result.data); 
      localStorage.setItem("NOTIFICACIONES", JSON.stringify(result.data));

    }
  },

  async buscarListaUsuarios({commit}){
    let result = await reqrootUsuarios();
    console.log("buscarListaUsuarios store", result);
    if(result.status == 200){
      commit('LISTAUSUARIOS', result.data); 
      localStorage.setItem("LISTAUSUARIOS", JSON.stringify(result.data));

    }
  },

  async getNormas({commit}){
    let result = await reqgetNormas();
    console.log("getNormas store", result);
    if(result.status == 200){
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
