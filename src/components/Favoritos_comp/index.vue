<template>
<div>
    <div>
        <h4>{{ title }}</h4> 
    </div>
    <div class="d-flex flex-wrap"> 
 
        <div v-for="(item, idx) in favoritos" :key="item.idOferta" class="m-1">
            <div class="image-container">
                <b-card-img
                    :src="`http://localhost:8889/${JSON.parse(item.img)[0]}`" 
                    class="img-fluid fixed-size-image"
                
                ></b-card-img> 
            </div>
        <b-card-text> {{ item.nombre }} </b-card-text>
        <b-card-text  v-if="item.plazoOferta== 0"> {{ item.precio * item.nArrendatarios }} monedas/hora </b-card-text>
          <b-card-text v-else> {{ item.precio * item.nArrendatarios }} monedas/día </b-card-text> 
 
              <div>
                  <b-button variant="danger" @click="onDelete(item.idOferta)">Eliminar</b-button> 
                  <router-link class="btn btn-primary" :to="`/details?id=${item.idOfertas}&idx=${idx}`"> Reservar</router-link>
              </div>
  
        </div>
    </div>
 
 
 
</div>

</template>
  
<script>  
import {reqquitarFavorito} from '@/api/index'

export default {
    name: "Favoritos_comp", 
    data(){
        return {
            title:'Favoritos',
            favoritos:{}, 
            share: [{ text: 'Selecciona una opción', value: null }, 'Reservar', 'Buscar gente'],
        }
    },
    methods: { 
         
        makeToast(title, msg) { 
            this.$bvToast.toast(msg, {
                title: title,
                autoHideDelay: 5000, 
            })
        }, 
        async cargarFavoritos(){
            await this.$store.dispatch('buscarFavoritos');
            this.favoritos = this.$store.state.userNodeData.favoritos;
            console.log("cargarFavoritos");

        },  

        async onSubmit(event){
            event.preventDefault(); 
            console.log(">>onSubmit: modificarForm", this.modificarForm);

            // let res = await reqmodificarReserva(this.modificarForm);
            // console.log(">>onSubmit res: ", res);
            // if(res.status == 200){
            //     this.cargarFavoritos();

            // }
            
        },
        async onDelete(uuid){
            console.log(">>onDelete: idOferta", uuid);

            let res = await reqquitarFavorito({'idOferta': uuid});
            console.log(">>onDelete res: ", res);
            if(res.status == 200){
                this.cargarFavoritos();

            }
        }

    },
    mounted(){ 
        this.cargarFavoritos();
        
    }    
}

</script>

<style>
.image-container {
  width: 190px;
  height: 190px;
  overflow: hidden;
}

/* Asegurar que la imagen ocupe todo el espacio disponible sin perder la relación de aspecto */
.fixed-size-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
  