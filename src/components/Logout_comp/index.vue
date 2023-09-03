<template>
<div>
    <div>
        <h4 class="mb-4">{{ title }}</h4> 
        <div class="d-flex align-items-center justify-content-between">
            <p>¿Quiere cerrar sesión?</p>
            <button class="btn btn-danger" @click.prevent="logout">Cerrar sesión</button>

        </div>
 
    </div>
</div>
</template>
  
<script> 
// import { reqcrearProducto, reqeliminarProducto,  reqmodificarProducto } from "@/api";


export default {
    name: "Logout_comp", 
    data(){
        return {
            title:'Cerrar sesión', 
             
        }
    },
    methods: { 
        logout(){
      // alert("logout");
      //axios para logout
      this.$store.dispatch("userLogout");
      //limpiar datos de la cache
      this.$router.push('/login');
    },
    },
    mounted(){ 

    }    
}

</script>

<style>

</style>
  