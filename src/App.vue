<template>
  <div class="container">
    <!-- Content here -->
    <Navbar_comp></Navbar_comp>

    <Filter_comp></Filter_comp>

    <List_comp></List_comp>
  </div>
</template>

<script>
import Navbar_comp from "@/components/Navbar_comp";
import Filter_comp from "@/components/Filter_comp";
import List_comp from "@/components/List_comp";

export default {
  name: "App",
  components: { Navbar_comp, Filter_comp, List_comp },

  data: function () {
    return {
      name: "cchen",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
