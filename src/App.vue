<template>
  <div class="container">
    <!-- Content here -->
    <Navbar_comp></Navbar_comp>

    


    <!-- <div>
      <form>
        <label>Inserta imagen</label>
        <input type="file" alt="Submit" ref="file" name="ccc" v-on:change="handleFileUpload()"> 
        <button type="submit" :on-click="sendImg()">enviar</button>
      </form>

    </div> -->
    <!-- router -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar_comp from "@/components/Navbar_comp";




export default {
  name: "App",
  components: { Navbar_comp },

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
