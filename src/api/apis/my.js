import axios from "axios";

import store from "@/store"

//timeout 5000 => 5s
const myReq = axios.create({
  baseURL: "/my",
  timeout: 5000,
});

//antes de enviar
myReq.interceptors.request.use((config) => {
  //adjuntar token
  console.log("token", store.state.userNodeData.token);
  if(store.state.userNodeData.token){ 
    config.headers['Authorization'] = store.state.userNodeData.token;
  }

  //IMPORTANTE: config tiene el 'header'
  return config;
});

//cuando llega la peticion
myReq.interceptors.response.use(
  (res) => {
    return res.data;
  },
  () => {
    return Promise.reject(new Error("Faile"));
  }
);
export default myReq;
