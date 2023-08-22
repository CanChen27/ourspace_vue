<template>
  <div class="container">
    <!-- Content here -->
    <!-- {{ $store.state.resourceListNodeData.userListNode }} -->
    <ul class="d-flex align-items-center justify-content-between flex-wrap">
      <li
        v-for="(item, idx) in this.$store.state.resourceListNodeData.userListNode"
        :key="item.id"
      > 
        <b-card >
        <div class="image-container">
          <b-card-img
            :src="`http://localhost:8889/${JSON.parse(item.img)[0]}`" 
            class="img-fluid fixed-size-image"
          
          ></b-card-img> 
        </div>
        <b-card-title> {{ item.nombre }} </b-card-title>

          <b-card-text> {{ item.descripcion }} </b-card-text>
          <b-card-text> {{ item.precio }} monedas/hora </b-card-text>

          <!-- <b-button variant="primary" @click="goDetails(item.id)">Más información</b-button> -->
          <router-link class="btn btn-primary" :to="`/details?id=${item.idOfertas}&idx=${idx}`">  Más información link</router-link>
        </b-card>
      </li>

      <!-- <List_item_comp></List_item_comp> -->
    </ul>
  </div>
</template>

<script>
import List_item_comp from "@/components/List_comp/List_item_comp";
export default {
  name: "List_comp",
  comments: { List_item_comp },
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
    goDetails(_id) {
      console.log(">>list_comp", _id);
      // e.preventDefault();
      this.$router.push({
        name: "detailsName",
        query: {
          id :_id
        }
      });
    }
  }
};
</script>

<style>
/* Estilos para asegurar que las imágenes mantengan su relación de aspecto */
.image-container {
  width: 300px;
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
