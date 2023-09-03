import axios from "axios";
 

//timeout 5000 => 5s
const apiReq = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//antes de enviar
apiReq.interceptors.request.use((config) => {
  //IMPORTANTE: config tiene el 'header'
  return config;
});

//cuando llega la peticion
apiReq.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res.data;
  },
  () => {
    return Promise.reject(new Error("faile"));
  }
);
export default apiReq;
