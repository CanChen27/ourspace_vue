<template>
  <div>
    <!-- Content here -->
    <!-- {{ $store.state.resourceListNodeData.userListNode }} -->
    <ul class="d-flex align-items-center justify-content-between flex-wrap">
      <li
        v-for="(item, idx) in this.$store.state.resourceListNodeData.userListNode"
        :key="idx" :id="`oferta${item.idOfertas}`"
        @click="goDetails(item.idOfertas, idx)" class=" mb-4  "
        @mouseenter="toggleHoverEnter(item.idOfertas)"
        @mouseleave="toggleHoverLeave(item.idOfertas)" 
      >  
        <div class="image-container">
          <b-card-img
            :src="`http://localhost:8889/${JSON.parse(item.img)[0]}`" 
            class="img-fluid fixed-size-image"
          
          ></b-card-img> 
        </div>
          <b-card-text class="fs-2"> {{ item.nombre }} </b-card-text>

          <b-card-text class="text-secondary"> {{ item.organizacion }} </b-card-text>
          <b-card-text class="text-secondary" v-if="item.plazoOferta== 0"> {{ item.precio * item.nArrendatarios }} monedas/hora </b-card-text>
          <b-card-text class="text-secondary"  v-else> {{ item.precio * item.nArrendatarios }} monedas/día </b-card-text> 


          <!-- <b-button variant="primary" @click="goDetails(item.id)">Más información</b-button> -->
          <!-- <router-link class="btn btn-primary col-12" :to="`/details?id=${item.idOfertas}&idx=${idx}`">  Saber más</router-link> -->
 
      </li>

      <!-- <List_item_comp></List_item_comp> -->
    </ul>
  </div>
</template>

<script> 
export default {
  name: "List_comp", 
  data() {
    return { 
      list: this.$store.state.resourceListNodeData.userListNode,
    };
  },
  mounted() {
    console.log(">>", this);
    this.$store.dispatch("getNodeUsersData");
  },
  methods: {
    goDetails(id,idx) { 
      console.log(">>list_comp", id, idx);
      this.$router.push({
        name: "detailsName",
        query: {
          idx: idx,
          id :id,
        }
      });
    },
    toggleHoverEnter(id){
      console.log("toggleHoverEnter");
      this.$("#oferta"+id).css({
        "transition": "all 0.3s ease",
        "transform": "scale(1.05)" 
      }).addClass("shadow bg-white rounded");
    },
    toggleHoverLeave(id){
      console.log("toggleHoverLeave") 
      this.$("#oferta"+id).css({
        "transition": "all 0.3s ease",
        "transform": "scale(1)" 
      }).removeClass("shadow bg-white rounded")  

    } 

  }
};
</script>

<style>
/* Estilos para asegurar que las imágenes mantengan su relación de aspecto */
.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

/* Asegurar que la imagen ocupe todo el espacio disponible sin perder la relación de aspecto */
.fixed-size-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
