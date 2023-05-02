<template>
  <li class="card" style="width: 18rem">
    <img
      class="card-img-top"
      src="@/assets/login_bg.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Nombre del producto</h5>
      <p class="card-text">Características - Fecha_ini/Fecha_fin</p>
      <span>Precio 100€</span>
      <router-link to="/details">Go to About</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: "List_item_comp",
};
</script>

<style></style>
