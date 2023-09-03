<template>
  <div>
    <h3 class="my-3">Centro de administración</h3>
    <div class=" shadow-sm p-3 my-4 bg-white rounded"> 
      <div class="row">
        <label class="col-2 text-primary" for="">Nombre usuario</label>
        <div class="col"> 
          {{ userData.username }}</div>

          <label class="col-2 text-primary" for="">Monedas:</label>
        <div class="col"> 
          {{ userData.monedas }}
        </div>

      </div> 
        <div class="row">
          <label class="col-2 text-primary" for="">Correo: </label>
          <div class="col">
            {{ userData.email }}
          </div>
          <label class="col-2 text-primary" for="">Número teléfono: </label>
          <div class="col">
            {{ userData.phone }}</div>
        </div> 
    </div>
    <div class="row stiky-top">
  
      <div class="col-3 "> 
          <b-list-group class="stiky-element">
          <b-list-group-item :active="activeItem==1" button @click="toggleActive(1)">{{route.VER_RESERVAS}}</b-list-group-item>
          <b-list-group-item :active="activeItem==2" button @click="toggleActive(2)">{{route.PRODUCTOS_GUARDADOS}}</b-list-group-item>
          <b-list-group-item :active="activeItem==3" v-show="userData.arrendador" button @click="toggleActive(3)">{{route.MIS_PRODUCTOS}}</b-list-group-item>
          <b-list-group-item :active="activeItem==4" button @click="toggleActive(4)">{{route.NOTIFICACIONES}}</b-list-group-item>
          
        </b-list-group> 
      </div>
  
      <div class="col-9"> 
        <Reservas_comp v-if="activeItem==1"></Reservas_comp>
        <Favoritos_comp v-if="activeItem==2"></Favoritos_comp>
        <Admin_comp v-show="userData.arrendador" v-if="activeItem==3"></Admin_comp> 
        <Notificaciones_comp v-if="activeItem==4"></Notificaciones_comp> 
  
      </div>
    </div>

  </div>

</template>

<script> 
import Admin_comp from "@/components/Admin_comp"; 
import Reservas_comp from "@/components/Reservas_comp"; 
import Favoritos_comp from "@/components/Favoritos_comp"; 
import Notificaciones_comp from "@/components/Notificaciones_comp"; 

export default {
  name: "Admin_page",
  data () {
    return {
      route: {
        VER_RESERVAS: 'Ver reservas',
        PRODUCTOS_GUARDADOS: 'Productos guardados',
        MIS_PRODUCTOS: 'Mis productos',
        NOTIFICACIONES: 'Notificaciones'
      },
      activeItem: 1,
      misProductos: {},
      userData:{}, 
    }
  },
  components:{
    Admin_comp,
    Reservas_comp,
    Favoritos_comp,
    Notificaciones_comp,
  },
  methods:{
    toggleActive(id){
      console.log("toggleActive", id);
      this.activeItem = id;
    },
  },
  mounted(){
    this.userData = this.$store.state.userNodeData.userData; 
  }

}

</script>

<style>

.stiky-element {
  position: sticky;
  top: 30px; 
}
</style>
