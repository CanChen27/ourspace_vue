import Vue from "vue";

import App from "./App.vue";
import store from "./store";

import { BootstrapVue } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { 
  faCalendarDays,
  faCalendarDay,
  faTableTennisPaddleBall,
   faFutbol,
   faBasketball,
   faFootball,
   faPersonSwimming,
   faBuilding,
   faStore,
   faHeart,
   faFlag,
    faPeopleRoof 

} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add( faCalendarDays, faCalendarDay, faTableTennisPaddleBall, faFutbol, faBasketball, faFootball, faPersonSwimming, faBuilding, faStore, faHeart, faFlag, faPeopleRoof);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

import router from "@/router"
Vue.use(router);

// Importar jQuery
import $ from 'jquery';

// Agregar jQuery al prototipo de Vue para que esté disponible en todos los componentes
Vue.prototype.$ = $;

new Vue({
  router,
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
