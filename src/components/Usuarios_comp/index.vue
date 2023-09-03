<template>
<div>
    <div>
        <h4 class="mb-4">{{ title }}</h4>
        <div class=" border-2 border-bottom  mb-0 row"  >
            <p class="col-1 font-weight-bold">Nombre usuario</p>
            <p class="col-3 font-weight-bold">Correo electrónico</p>  
            <p class="col-2 font-weight-bold">Número teléfono</p>  
            <p class="col-2 font-weight-bold">Rol Arrendador</p>  
            <p class="col font-weight-bold">Monedas</p>  

            <p class="col-2 font-weight-bold"> Acciones</p>
        </div>
        <div class=" border-2 border-bottom my-3 pb-3 row" v-for="(user, idx) in this.listaUsuarios" :key="idx">
            <p class="col-1">{{ user.username }}</p>
            <p class="col-3">{{ user.email }}</p>  
            <p class="col-2">{{ user.phone }}</p>  
            <p class="col-2">
                <span v-if="user.arrendador === 1" class="badge badge-success">Si</span>
                <span v-else class="badge badge-danger">No</span>    
            </p>  
            
            <p class="col">{{ user.monedas }}</p>  

            <div class="col-3">
                <button class="col-5 ml-1 btn btn-sm btn-warning" v-show="user.arrendador == 0" v-b-modal.modal-1 @click="setId(user.id)" data-toggle="tooltip" data-placement="top" title="Añadir rol arrendador"> Añadir </button>
                <button class="col-5 ml-1 btn btn-sm btn-warning"  v-show="user.arrendador == 1"  @click="quitarRol(user.id)" data-toggle="tooltip" data-placement="top" title="Quitar rol arrendador"> Quitar</button>
                <button class="col-5 ml-1 btn btn-sm btn-danger" @click="eliminar(user.id)" data-toggle="tooltip" data-placement="top" title="Eliminar usuario"> Eliminar</button>
                
            </div>
        </div>
 
    </div>

    <div> 

        <b-modal id="modal-1" title="Añadir Rol" ref="rolModal" @hide="limpiar"> 
            <b-form-group
                id="input-group-1"
                label="Nombre organización"
                label-for="input-1" 
                
            >
                <b-form-input
                id="input-1"
                v-model="organizacion"
                type="text"
                placeholder="Introduce nombre de la organización"
                required
                ></b-form-input>
            </b-form-group>
            <template #modal-footer> 
                <button v-b-modal.modal-close_visit @click="aniadirRol" class="btn btn-primary btn-sm m-1">Añadir Rol</button>
            </template>
        </b-modal> 
    </div>
</div>
</template>
  
<script> 
import { reqeliminarUsuario , reqaniadirRol, reqquitarRol} from "@/api";


export default {
    name: "Usuarios_comp", 
    data(){
        return {
            title:'Administración de usuarios',
            listaUsuarios: {},
            organizacion: '',
            idSeleccionado: '',
             
        }
    },
    methods: { 
         
        async cargarUsuarios(){
            let res = await this.$store.dispatch('buscarListaUsuarios');
            this.listaUsuarios = this.$store.state.userNodeData.listaUsuarios;
            console.log("cargarUsuarios", res);

        },
        async eliminar(id){ 
            let res = await reqeliminarUsuario({'id': id});
            this.cargarUsuarios();
            console.log("cargarUsuarios", res);
        },
        async aniadirRol(){
            let res  = await reqaniadirRol({'idUsuario': this.idSeleccionado, 
            'organizacion':this.organizacion});
            console.log("aniadirRol", res) ;
            if(res.status == 200){
                await this.cargarUsuarios(); 
            }
            this.$refs.rolModal.hide();
        },
        async quitarRol(id){
            let res = await reqquitarRol({'idUsuario': id});
            console.log("quitarRol", res) ;
            if(res.status == 200){
                await this.cargarUsuarios(); 
            }
        },
        setId(id){
           this.idSeleccionado = id;
        },
        limpiar(){
            this.idSeleccionado = '';
            this.organizacion = ''; 
        }


    },
    async mounted(){ 
        this.cargarUsuarios(); 

    }    
}

</script>

<style>

</style>
  

