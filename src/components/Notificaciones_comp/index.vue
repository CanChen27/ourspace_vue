<template>
<div>
    <div>
        <h1>{{ title }}</h1>
        <b-card v-for="(notificacion, idx) in this.notificaciones" :key="idx">
            <b-card-text>{{ notificacion.mensaje }}</b-card-text>
            <b-card-text>{{ notificacion.fecha }}</b-card-text> 
        </b-card>
 
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
  