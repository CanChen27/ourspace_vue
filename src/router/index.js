import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Details from "@/pages/Details";
import Home from "@/pages/Home";
import Error from "@/pages/Error";


import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Admin from "@/pages/Admin";
// import List from "@/pages/List";
// import Map from "@/pages/Map";
// import ResourceInfo from "@/pages/ResourceInfo";

export default new VueRouter({
  routes: [
    {
      path: "/details",
      component: Details,
      name: "detailsName",
      meta: {
        showHeader: true,
        showFilter: false
      },
    },
    {
      path: "/home",
      component: Home,
      meta: {
        showHeader: true,
        showFilter: true
      },
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
    {
      path: "/login",
      component: Login,
      meta: {
        showFooter: false,
        showHeader: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        showFooter: false,
        showHeader: false,
      },
    },
    {
      path: "/admin",
      component: Admin,
      meta: {
        showHeader: true,
        showFooter: false,
      },
    },
    {
      path: '*',
      redirect: '/login'
    }
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

  ],
});
