import axios from "axios";

//timeout 5000 => 5s
const myRequest = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//antes de enviar
myRequest.interceptors.request.use((config) => {
  //IMPORTANTE: config tiene el 'header'
  return config;
});

//cuando llega la peticion
myRequest.interceptors.response.use(
  (res) => {
    return res.data;
  },
  () => {
    return Promise.reject(new Error("faile"));
  }
);
export default myRequest;
