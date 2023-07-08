<template>
  <div>
    <h3 class="">Admin page</h3>
    <div class="row">
  
      <div class="col-3">
        <b-list-group>
        <b-list-group-item :active="activeItem==1" button @click="toggleActive(1)">{{route.VER_RESERVAS}}</b-list-group-item>
        <b-list-group-item :active="activeItem==2" button @click="toggleActive(2)">{{route.PRODUCTOS_GUARDADOS}}</b-list-group-item>
        <b-list-group-item :active="activeItem==3" button @click="toggleActive(3)">{{route.MIS_PRODUCTOS}}</b-list-group-item>
        <b-list-group-item :active="activeItem==4" button @click="toggleActive(4)">{{route.NOTIFICACIONES}}</b-list-group-item>
      </b-list-group>
      </div>
  
      <div class="col-9"> 
        <Admin_comp v-if="activeItem==3"></Admin_comp> 
  
      </div>
    </div>

  </div>

</template>

<script> 
import Admin_comp from "@/components/Admin_comp"; 

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
    }
  },
  components:{
    Admin_comp,
  },
  methods:{
    toggleActive(id){
      console.log("toggleActive", id);
      this.activeItem = id;
    },
  },

}

</script>

<style>

</style>
