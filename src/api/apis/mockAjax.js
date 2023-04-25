import axios from "axios";

//timeout 5000 => 5s
const myMockRequest = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

//antes de enviar
myMockRequest.interceptors.request.use((config) => {
  //IMPORTANTE: config tiene el 'header'
  return config;
});

//cuando llega la peticion
myMockRequest.interceptors.response.use(
  (res) => {
    return res.data;
  },
  () => {
    return Promise.reject(new Error("faile"));
  }
);
export default myMockRequest;
