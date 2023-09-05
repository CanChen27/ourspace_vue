<template>
  <b-container class="my-3">
    <!-- Content here -->
    <i class="bi bi-heart"></i>
    <ul class="d-flex align-item-center justify-content-around">
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroPeriodo(0)" >
          <font-awesome-icon icon="fa-solid fa-calendar-day" />
          <label>Corto Plazo</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroPeriodo(1)">
          <font-awesome-icon icon="fa-solid fa-calendar-days" />
          <label for="">Largo Plazo</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="listaCompartir">
          <font-awesome-icon icon="fa-solid fa-people-roof" />
          <label>Compartir</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(1)">
          <font-awesome-icon icon="fa-solid fa-table-tennis-paddle-ball" />
          <label>Tenis</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(2)">
          <font-awesome-icon icon="fa-solid fa-futbol" />
          <label>Fútbol</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(3)">
          <font-awesome-icon icon="fa-solid fa-basketball" />
          <label>Baloncesto</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(4)">
          <font-awesome-icon icon="fa-solid fa-football" />
          <label>Rugby</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(5)">
          <font-awesome-icon icon="fa-solid fa-person-swimming" />
          <label>Piscinas Olímpicas</label>
        </div>
      </li>      
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(6)">
          <font-awesome-icon icon="fa-solid fa-building" />
          <label>Apartamentos</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filtroTipo(7)">
          <font-awesome-icon icon="fa-solid fa-store" />
          <label>Almacenes</label>
        </div>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: "Filter_comp", 
  methods: {
    filtroTipo(tipo) { 
      console.log("filtroTipo", tipo)
      this.$store.dispatch("filtroTipo", tipo);

    },
    filtroPeriodo(tipo){
      console.log("filtroPeriodo", tipo)
      this.$store.dispatch("filtroPeriodo", tipo);
      
    },
    listaCompartir(){
      this.$store.dispatch("listaCompartir");

    }
  }
};
</script>

<style>
.filterBtn:hover {
  border-bottom: 2px solid #bbb;
}
</style>
