<template>
  <div>
    <h3 class="my-3">Centro de administración superusuario</h3>
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
  
      <div class="col-2 "> 
          <b-list-group class="stiky-element">
          <b-list-group-item :active="activeItem==1" button @click="toggleActive(1)">{{route.ADMINISTRACION}}</b-list-group-item>
          <b-list-group-item :active="activeItem==2" button @click="toggleActive(2)">{{route.LOGOUT}}</b-list-group-item> 
          
        </b-list-group> 
      </div>
  
      <div class="col"> 
        <Usuarios_comp v-if="activeItem==1"></Usuarios_comp> 
        <Logout_comp v-if="activeItem==2"></Logout_comp>  
  
      </div>
    </div>

  </div>

</template>

<script> 
import Logout_comp from "@/components/Logout_comp"; 
import Usuarios_comp from "@/components/Usuarios_comp";  

export default {
  name: "Root_page",
  data () {
    return {
      route: {
        ADMINISTRACION: 'Administración de usuarios',
        LOGOUT: 'Cerrar sesión', 
      },
      activeItem: 1,
      misProductos: {},
      userData:{},
    }
  },
  components:{
    Usuarios_comp, 
    Logout_comp,
  },
  methods:{
    toggleActive(id){
      console.log("toggleActive", id);
      this.activeItem = id;
    },
  },
  async mounted(){
    await this.$store.dispatch('userInfo');

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
