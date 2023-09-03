import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Details from "@/pages/Details";
import Home from "@/pages/Home"; 


import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Admin from "@/pages/Admin";
import Root from "@/pages/Root";
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
      path: "/root",
      component: Root,
      meta: {
        showHeader: false,
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
