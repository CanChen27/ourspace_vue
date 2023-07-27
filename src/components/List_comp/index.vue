<template>
  <div class="container">
    <!-- Content here -->
    <!-- {{ $store.state.resourceListNodeData.userListNode }} -->
    <ul class="d-flex align-items-center justify-content-between flex-wrap">
      <li
        v-for="(item, idx) in this.$store.state.resourceListNodeData.userListNode"
        :key="item.id"
      > 
        <b-card
          :title="item.nombre"
          :img-src="`http://localhost:8889/${JSON.parse(item.img)[0]}`"
        
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem"
          class="mb-2"
        >
          <b-card-text> {{ item.descripcion }} </b-card-text>
          <b-card-text> {{ item.precio }}€- hora </b-card-text>

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
    return { list: [1] };
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

<style></style>
