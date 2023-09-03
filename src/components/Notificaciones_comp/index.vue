<template>
<div>
    <div>
        <h4 class="mb-4">{{ title }}</h4>
        <div class=" border-2 border-bottom my-3" v-for="(notificacion, idx) in this.notificaciones" :key="idx">
            <p>{{ notificacion.mensaje }}</p>
            <p class="text-right text-secondary">{{ notificacion.fecha }}</p>  
        </div>
 
    </div>
</div>
</template>
  
<script> 
// import { reqcrearProducto, reqeliminarProducto,  reqmodificarProducto } from "@/api";


export default {
    name: "Notificaciones_comp", 
    data(){
        return {
            title:'Notificaciones',
            notificaciones: {},
             
        }
    },
    methods: { 
         
        async cargarMisNotificaciones(){
            let res = await this.$store.dispatch('buscarNotificaciones');
            this.notificaciones = this.$store.state.userNodeData.notificaciones;
            console.log("cargarMisNotificaciones", res);

        },

    },
    mounted(){ 
        this.cargarMisNotificaciones(); 
    }    
}

</script>

<style>

</style>
  