import axios from "axios";

export const API_DEFAULT_PARAMS = {
  type: -1
}

//timeout 5000 => 5s
const myNodeRequest = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//antes de enviar
myNodeRequest.interceptors.request.use((config) => {
  //IMPORTANTE: config tiene el 'header'
  return config;
});

//cuando llega la peticion
myNodeRequest.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res.data;
  },
  () => {
    return Promise.reject(new Error("faile"));
  }
);
export default myNodeRequest;
