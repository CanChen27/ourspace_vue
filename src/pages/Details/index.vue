<template>
  <div class="container">
    <!-- Content here --> 

    <h5>Detalles del producto: {{ $route.query.id }}</h5>
  </div>
</template>

<script> 
// import Filter_comp from "@/components/Filter_comp";
// import List_comp from "@/components/List_comp";

export default {
  name: "App",
  // components: { Navbar_comp, Filter_comp, List_comp },

  data: function () {
    return {
      name: "Details",
    };
  },
};
</script>

<style>

</style>
