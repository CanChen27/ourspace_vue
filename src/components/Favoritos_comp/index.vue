<template>
<div>
    <div>
        <h1>{{ title }}</h1> 
    </div>
    <div class="d-flex flex-wrap"> 

        <b-card 
            v-for="(item, idx) in favoritos" :key="item.idOferta"
            :title=item.nombre
            :img-src="`http://localhost:8889/${JSON.parse(item.img)[0]}`"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem; min-width: 10rem;"
            class="mb-5 mr-4"
        >
        <b-card-text> {{ item.descripcion }} </b-card-text>
          <b-card-text> {{ item.precio }}€- hora </b-card-text>

          <template #footer>
              <div>
                  <b-button variant="danger" @click="onDelete(item.idOferta)">Eliminar de Favoritos</b-button> 
                  <router-link class="btn btn-primary" :to="`/details?id=${item.idOfertas}&idx=${idx}`">  Más información</router-link>
              </div>
 
      </template>
        </b-card>
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

</style>
  