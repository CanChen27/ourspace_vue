<template>
  <div class="container">
    <!-- Content here -->
    <Navbar_comp></Navbar_comp>

    
    <Filter_comp></Filter_comp>

    <div>
      <form>
        <label>Inserta imagen</label>
        <input type="file" alt="Submit" ref="file" name="ccc" v-on:change="handleFileUpload()"> 
        <button type="submit" :on-click="sendImg()">enviar</button>
      </form>

    </div>
    <!-- router -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar_comp from "@/components/Navbar_comp";
import Filter_comp from "@/components/Filter_comp";

import { reqNodePostImg } from "@/api";


export default {
  name: "App",
  components: { Navbar_comp, Filter_comp },

  data: function () {
    return {
      name: "cchen",
      file:"aaa"
    };
  },
  methods:{
    async sendImg(){
      let formData = new FormData();
      console.log(">>cchen vue file", this.file);
      formData.append('img', this.file);
      console.log(">>cchen vue formData", this.file);

      let result = await reqNodePostImg(formData);
      console.log(">>cchen result", result);

    },
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
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
