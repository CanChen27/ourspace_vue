<template>
<div>
    <div>
        <h4>{{ title }}</h4> 
    </div>
    <div class="d-flex flex-wrap"> 
 
        <div v-for="(item, index) in misReservas" :key="index" class="m-1">
            <div class="image-container">
                <b-card-img
                    :src="`http://localhost:8889/${JSON.parse(item.img)[0]}`" 
                    class="img-fluid fixed-size-image"
                
                ></b-card-img> 
            </div>
            <b-card-text> {{ item.descripcion }} </b-card-text>
            <b-card-text> {{ item.precio }}€- hora </b-card-text>
 
            <div class="d-flex">
                <b-button variant="danger" @click="onDelete(item.uuid)">Cancelar</b-button>
                <b-button variant="primary" @click="onOpenUpdateModal(index)" >Modificar</b-button>

            </div>
  
        </div>
    </div>


    <b-modal id="crearProductoModal" size="lg" title="Modificar reserva" v-model="reservModModal" hide-footer>
        
        <b-container fluid>
            <b-form @submit="onSubmit" @reset="onReset">

                <b-form-group id="input-group-1">
                <label for="example-datepicker">Fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="modificarForm.fecha" class="mb-2"></b-form-datepicker>
                </b-form-group>


                <b-form-group id="input-group-2"> 
                <b-form-timepicker v-model="modificarForm.hora" locale="en"></b-form-timepicker> 
                </b-form-group>

                <b-form-group id="input-group-3" label="Compartir:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="modificarForm.compartir"
                    :options="share" 
                    required
                ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-4" v-if="modificarForm.compartir == 'Buscar gente'"> 
                    <div class="d-flex align-items-center ">
                        <b-form-input  class="mr-3" type="number" v-model="modificarForm.genteCompartir"  min="1" :max="modificarForm.nArrendatarios -1"> </b-form-input>
                        <span>/ {{ modificarForm.nArrendatarios -1 }} Arrendatarios</span>

                    </div>
                </b-form-group>

                <div >
                <b-button type="submit" variant="primary">Modificar Reserva</b-button>
                </div>
        </b-form>
      </b-container>
      
      <template #modal-footer>
          <div>  
          </div>
    </template>

    </b-modal>
 
 
</div>

</template>
  
<script>  
import {reqmodificarReserva, reqcancelarReserva} from '@/api/index'

export default {
    name: "Reservas_comp", 
    data(){
        return {
            title:'Mis Reservas',
            misReservas:{},
            modificarForm: {
                fecha: '',
                hora: '',
                compartir: false,
                genteCompartir: false,
                id:'',
                uuid:'',
                idOferta: '',
                idArrendatario: '',
                nArrendatarios:  '',
            },
            reservModModal: false,
            share: [{ text: 'Selecciona una opción', value: null }, 'Reservar', 'Buscar gente'],
        }
    },
    methods: { 
        showModal() { 
            this.reservModModal = true;
        },
        hideModal() { 
            this.reservModModal = false;
        }, 
        makeToast(title, msg) { 
            this.$bvToast.toast(msg, {
                title: title,
                autoHideDelay: 5000, 
            })
        }, 
        async cargarMisReservas(){
            await this.$store.dispatch('buscarMisReservas');
            this.misReservas = this.$store.state.userNodeData.misReservas;
            console.log("cargarMisReservas");

        },
        onOpenUpdateModal(idx){
            console.log(">>onOpenUpdateModal", idx);
            console.log(">>onOpenUpdateModal", this.$store.state.userNodeData.misReservas[idx]);
            this.modificarForm.fecha = this.$store.state.userNodeData.misReservas[idx].fecha;
            this.modificarForm.hora = this.$store.state.userNodeData.misReservas[idx].hora;
            this.modificarForm.compartir = this.$store.state.userNodeData.misReservas[idx].compartir;
            this.modificarForm.genteCompartir = this.$store.state.userNodeData.misReservas[idx].genteCompartir;
            this.modificarForm.uuid = this.$store.state.userNodeData.misReservas[idx].uuid;
            this.modificarForm.idOferta = this.$store.state.userNodeData.misReservas[idx].idOferta;
            this.modificarForm.idArrendatario = this.$store.state.userNodeData.misReservas[idx].idArrendatario;
            this.modificarForm.nArrendatarios = this.$store.state.userNodeData.misReservas[idx].nArrendatarios;
            this.showModal();
        },
        onReset(event){
            event.preventDefault(); 
            this.modificarForm = {
                fecha: '',
                hora: '',
                compartir: false,
                genteCompartir: false,
                id:'',
                uuid:'',
                idOferta: '',
                idArrendatario: '',
                nArrendatarios: '',
            }
        },

        async onSubmit(event){
            event.preventDefault(); 
            console.log(">>onSubmit: modificarForm", this.modificarForm);

            let res = await reqmodificarReserva(this.modificarForm);
            console.log(">>onSubmit res: ", res);
            if(res.status == 200){
                this.cargarMisReservas();

            }
            
        },
        async onDelete(uuid){
            console.log(">>onDelete: uuid", uuid);

            let res = await reqcancelarReserva({'uuid': uuid});
            console.log(">>onDelete res: ", res);
            if(res.status == 200){
                this.cargarMisReservas();

            }
        }

    },
    mounted(){ 
        this.cargarMisReservas();
        
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
  