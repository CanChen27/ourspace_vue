<template>
  <div class="container">
    <!-- Content here -->

    <List_comp></List_comp>
  </div>
</template>

<script>
import List_comp from "@/components/List_comp";

export default {
  name: "App",
  components: { List_comp },

  data: function () {
    return {
      name: "Home",
    };
  },
};
</script>

<style>

</style>
