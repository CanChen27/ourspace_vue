import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Details from "@/pages/Details";
import Home from "@/pages/Home";
import Error from "@/pages/Error";


// import List from "@/pages/List";
// import Login from "@/pages/Login";
// import Map from "@/pages/Map";
// import ResourceInfo from "@/pages/ResourceInfo";
// import Register from "@/pages/Register";

export default new VueRouter({
  routes: [
    {
      path: "/details",
      component: Details,
      name: "detailsName",
      // meta: {
      //   showFooter: false,
      // },
    },
    {
      path: "/home",
      component: Home,
      // meta: {
      //   showFooter: false,
      // },
    },
    {
      path: "/error",
      component: Error,
      alias: "404"
    },
    // {
    //   path: "/list",
    //   component: List,
    //   meta: {
    //     showFooter: false,
    //   },
    // },
    // {
    //   path: "/login",
    //   component: Login,
    //   meta: {
    //     showFooter: true,
    //   },
    // },
    // {
    //   path: "/register",
    //   component: Register,
    //   meta: {
    //     showFooter: true,
    //   },
    // },
    // {
    //   path: "/map",
    //   component: Map,
    //   meta: {
    //     showFooter: false,
    //   },
    // },
    // {
    //   path: "/resource",
    //   component: ResourceInfo,
    //   meta: {
    //     showFooter: true,
    //   },
    //   name: "resource_info",
    // },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
