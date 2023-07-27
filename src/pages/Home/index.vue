<template>
  <div class="container">
    <!-- Content here -->
    <Filter_comp></Filter_comp>
    <List_comp></List_comp>
  </div>
</template>

<script>
import List_comp from "@/components/List_comp";
import Filter_comp from "@/components/Filter_comp";

import { reqNodePostImg } from "@/api";
export default {
  name: "App",
  components: { List_comp, Filter_comp },

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
  },
  async mounted(){
    await this.$store.dispatch('userInfo');
    await this.$store.dispatch('getNormas');
  }
};
</script>

<style>

</style>
