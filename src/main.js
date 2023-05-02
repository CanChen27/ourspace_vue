import Vue from "vue";

import App from "./App.vue";
import store from "./store";

import { BootstrapVue } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHatWizard,
  faHouse,
  faLock,
  faWifi,
  faTree,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHatWizard, faHouse, faLock, faWifi, faTree, faGlobe);
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

new Vue({
  router,
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
