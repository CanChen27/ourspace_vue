<template>
  <div class="container">
    <!-- Content here -->

    <ul class="d-flex align-items-center justify-content-between flex-wrap">
      <li v-for="item in items" class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/login_bg.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Nombre del producto</h5>
          <p class="card-text">Características - Fecha_ini/Fecha_fin</p>
          <span>Precio {{ item.mensaje }}€</span
          ><a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </li>
      <List_item_comp></List_item_comp>
    </ul>
  </div>
</template>

<script>
import List_item_comp from "@/components/List_comp/List_item_comp";
export default {
  name: "List_comp",
  comments: { List_item_comp },
  data() {
    return { items: [{ mensaje: "Foo" }, { mensaje: "Bar" }] };
  },
};
</script>

<style></style>
