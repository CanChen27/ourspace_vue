//module que se encarga de la gestión de todas
//las peticiones del proyecto

import myRequest from "./apis/ajax";
import myMockRequest from "./apis/mockAjax";
import myNodeRequest, {API_DEFAULT_PARAMS} from "./apis/node";

export const reqNodeResourceList = () => {
  return myNodeRequest({ url: "/resources", method: "get" });
};

export const reqNodePostImg = (formData) => {

  console.log(">>cchen /api/index--formData", formData);
  return myNodeRequest({ 
    url: "/resources/img", 
    method: "post",
    data:formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  // myNodeRequest.post('/resources/img', formData)
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

};

export const reqNodeSearchList = (keyWord) => {
  return myNodeRequest({
    url: "/resources/search",
    method: "get",
        params: { keyWord },

  });
};

export const reqNodeDefaultFilterList = (keyWord) => {
  // return myNodeRequest({
  //   url: "/resources/filter?keyWord=?",
  //   method: "get",
  //   params: { keyWord },
  // });
//   return myNodeRequest.get('/resources/filter', {
//     params: {
//         maxResults: keyWord
//     }
// });
  console.log(keyWord)
    return myNodeRequest.get('/resources/filter', {
      params: {
        // spread the default params
        ...API_DEFAULT_PARAMS,
        // add your own parameters here
        type: 1,
      }
    });
};

export const reqNodeResourceDetails = (keyWord) => {
  return myNodeRequest({
    url: "/resources/details/info",
    method: "get",
    params: { keyWord },
  });
};

export const reqNodeResourceInfo = (keyWord) => {
  return myNodeRequest({
    url: "/resources/details/info",
    method: "get",
    params: { keyWord },
  });
};

export const reqNodeResourceFacilities = (keyWord) => {
  console.log("reqNodeResourceFacilities:::", keyWord);
  return myNodeRequest({
    url: "/resources/details/facilities",
    method: "get",
    params: { keyWord },
  });
};

export const reqNodeResourcePolitics = (keyWord) => {
  return myNodeRequest({
    url: "/resources/details/politics",
    method: "get",
    params: { keyWord },
  });
};
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

export const reqAjaxResourceList = () => {
  //axios devuelve un Promise
  return myRequest({ url: '/search/users?q="test"', method: "get" });
};

export const reqMockResourceList = () => {
  //axios devuelve un Promise
  return myMockRequest({ url: "/resources", method: "get" });
};
export const reqMockSearchData = () => {
  //axios devuelve un Promise
  return myMockRequest({ url: "/search_data", method: "get" });
};
