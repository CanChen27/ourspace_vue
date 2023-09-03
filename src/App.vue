<template>
  <!-- Content here -->
  <div>
    <Navbar_comp v-show="this.$route.meta.showHeader"></Navbar_comp>
    <div class="container">
      <router-view></router-view>
      
    </div>

  </div>


</template>

<script>
import Navbar_comp from "@/components/Navbar_comp";




export default {
  name: "App",
  components: { Navbar_comp },
  async mounted(){
    console.log("APP::", this.$route.meta);
    await this.$store.dispatch('userInfo');
  }

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
