//module que se encarga de la gestión de todas
//las peticiones del proyecto

import myReq from "./apis/my";
import myMockRequest from "./apis/mockAjax";
import apiReq from "./apis/api";

export const reqNodeResourceList = () => {
  console.log("Aqui");
  return apiReq({ url: "/resources", method: "get" });
};

export const reqNodePostImg = (formData) => {

  console.log(">>cchen /api/index--formData", formData);
  return apiReq({ 
    url: "/resources/img", 
    method: "post",
    data:formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  // apiReq.post('/resources/img', formData)
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

};

export const reqNodeSearchList = (keyWord) => {
  return apiReq({
    url: "/resources/search",
    method: "get",
        params: { keyWord },

  });
};
 

export const reqfilterTipoList = (tipo) =>{
  let str = `/resources/filterTipo?tipo=${tipo}`;
  console.log("reqfilterTipoList url", str)
  return apiReq({url: str, method: 'get'});
}

export const reqfilterPeriodoList = (tipo) =>{
  let str = `/resources/filterPeriodo?tipo=${tipo}`;
  console.log("reqfilterPeriodoList url", str)
  return apiReq({url: str, method: 'get'});
}

export const reqlistaCompartir = () =>{
  let str = `/resources/listaCompartir`;
  console.log("reqlistaCompartir url");
  return apiReq({url: str, method: 'get'});
}

export const reqNodeResourceDetails = (keyWord) => {
  return apiReq({
    url: "/resources/details/info",
    method: "get",
    params: { keyWord },
  });
};

// export const reqNodeResourceInfo = (keyWord) => {
//   return apiReq({
//     url: "/resources/details/info",
//     method: "get",
//     params: { keyWord },
//   });
// };

export const reqNodeResourceComments = (idOferta) => {
  return apiReq({
    url: "/resources/comentarios",
    method: "get",
    params: { idOferta },
  });
};

export const reqNodeResourceFacilities = (keyWord) => {
  console.log("reqNodeResourceFacilities:::", keyWord);
  return apiReq({
    url: "/resources/details/facilities",
    method: "get",
    params: { keyWord },
  });
};

// export const reqNodeResourcePolitics = (keyWord) => {
//   return apiReq({
//     url: "/resources/details/politics",
//     method: "get",
//     params: { keyWord },
//   });
// };
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

export const reqAjaxResourceList = () => {
  //axios devuelve un Promise
  return myReq({ url: '/search/users?q="test"', method: "get" });
};

export const reqMockResourceList = () => {
  //axios devuelve un Promise
  return myMockRequest({ url: "/resources", method: "get" });
};
export const reqMockSearchData = () => {
  //axios devuelve un Promise
  return myMockRequest({ url: "/search_data", method: "get" });
};

//registro
export const requserReg = (data) =>{
  return apiReq({url: '/reguser', data, method: 'post'});
}

//iniciar sesión
export const requserLogin = (data) =>{
  return apiReq({url: '/login', data, method: 'post'});
}



///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////


export const requserInfo = () =>{
  return myReq({url:'/userInfo', method: 'get'});
}

export const requserLogout = () =>{
  return myReq({url:'/logout', method: 'get'});
}




export const reqrootUsuarios = () =>{
  return myReq({url:'/root', method: 'get'});
}


export const reqeliminarUsuario = (id) =>{
  return myReq({url:'/root/eliminarUsuario',data: id, method: 'post'});
}


export const reqaniadirRol = (data) =>{
  return myReq({url:'/root/aniadirRol',data: data, method: 'post'});
}

export const reqquitarRol = (data) =>{
  return myReq({url:'/root/quitarRol',data: data, method: 'post'});
}

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

export const reqmisProductos = () =>{
  return myReq({url:'/admin/misProductos', method: 'get'});
}

export const reqcrearProducto = (data) =>{
  return myReq({url:'/admin/crearProducto',data, method: 'post', headers: { 'Content-Type': 'multipart/form-data' }});
}

export const reqeliminarProducto = (data) =>{
  return myReq({url:'/admin/eliminarProducto',data, method: 'post'});
}

export const reqmodificarProducto = (data) =>{ 
  return myReq({url:'/admin/modificarProducto',data, method: 'post'});
}

export const reqgetNormas = () =>{ 
  return myReq({url:'/admin/getNormas'});
}
 

export const reqpublicarComentario = (data) =>{ 
  return myReq({url:'/admin/publicarComentario', method:'post', data});
}



///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
export const reqNuevaReserva = (data) =>{ 
  return myReq({url:'/reservas/newReserva',data, method: 'post'});
}

export const reqmisReservas = () =>{ 
  return myReq({url:'/reservas/misReservas'});
}

export const reqmodificarReserva = (data) =>{ 
  return myReq({url:'/reservas/modificarReserva', data, method:'post'});
}

export const reqcancelarReserva = (data) =>{ 
  return myReq({url:'/reservas/cancelarReserva', data, method:'post'});
}

export const reqaniadirFavorito = (data) =>{ 
  return myReq({url:'/favoritos/aniadirFavorito', data, method:'post'});
}

export const reqquitarFavorito = (data) =>{ 
  return myReq({url:'/favoritos/quitarFavorito', data, method:'post'});
}

export const reqconsultarFavorito = (idOferta) =>{ 
  return myReq({url:'/favoritos/consultarFavorito', params: { idOferta }, method:'get'});
}

export const reqlistaFavoritos = () =>{ 
  return myReq({url:'/favoritos/listaFavoritos', method:'get'});
}



export const reqmisNotificaciones = () =>{ 
  return myReq({url:'/notificaciones/misNotificaciones', method:'get'});
}