<template>
<div>
    <div>
        <h1>{{ title }}</h1>
        <b-button v-b-modal.crearProductoModal variant="primary">Crear</b-button>
    </div>
    <div class="d-flex flex-wrap"> 

        <b-card 
            v-for="(item, index) in data" :key="item.idOferta"
            :title=item.nombre
            :img-src="`http://localhost:8889/${item.img}`"
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
                  <b-button variant="danger" @click="onDelete(item)">Eliminar</b-button>
                  <b-button variant="primary" @click="onOpenUpdateModal(index)" >Modificar</b-button>
  
              </div>
 
      </template>
        </b-card>
    </div>


    <b-modal id="crearProductoModal" size="lg" title="Crear nuevo producto" hide-footer>
        
        <b-container fluid>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Nombre del producto:"
                    label-for="input-1" 
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.nombre"
                    type="text"
                    placeholder="Nombre del producto"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Descripción del producto" label-for="input-2">
                    <b-form-textarea
                    id="input-2"
                    v-model="form.descripcion" 
                    placeholder="Descripción del producto"
                    required
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group id="input-group-3" label="Precio:" label-for="input-3">
                    <b-form-input
                    id="input-3" 
                    v-model="form.precio"
                    placeholder="Precio del producto"
                    type="number"
                    required
                    ></b-form-input>
                </b-form-group> 
            <div> 
                <b-button type="reset" variant="danger">Limpiar</b-button>
                <b-button type="submit" variant="primary">Crear</b-button>
            </div>
            </b-form>
      </b-container>
      
      <template #modal-footer>
          <div>  
          </div>
    </template>

    </b-modal>

    <b-modal id="modificarProductoModal" size="lg"  v-model="showModificar" title="Modificar producto" hide-footer>

        <b-container fluid>
            <b-form @submit="onUpdate" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Nombre del producto:"
                    label-for="input-1" 
                >
                    <b-form-input
                    id="input-1"
                    v-model="modificarform.nombre"
                    type="text"
                    placeholder="Nombre del producto"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Descripción del producto" label-for="input-2">
                    <b-form-textarea
                    id="input-2"
                    v-model="modificarform.descripcion" 
                    placeholder="Descripción del producto"
                    required
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group id="input-group-3" label="Precio:" label-for="input-3">
                    <b-form-input
                    id="input-3" 
                    v-model="modificarform.precio"
                    placeholder="Precio del producto"
                    type="number"
                    required
                    ></b-form-input>
                </b-form-group> 
            <div>  
                <b-button type="submit" variant="primary" >Modificar</b-button>
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
import { reqcrearProducto,reqeliminarProducto,  reqmodificarProducto } from "@/api";


export default {
    name: "Admin_comp", 
    data(){
        return {
            title:'Mis productos',
            data: {},
            form:{
                nombre: '',
                descripcion: '',
                precio: 0
            },
            modificarform:{
                nombre: '',
                descripcion: '',
                precio: 0, 
                idOfertas: '',
            },
            showModificar: false,  
        }
    },
    methods: { 
        showModal() { 
            this.showModificar = true;
        },
        hideModal() { 
            this.showModificar = false;
        }, 
        makeToast(title, msg) { 
            this.$bvToast.toast(msg, {
                title: title,
                autoHideDelay: 5000, 
            })
        },
        onReset(event){
            event.preventDefault();
            console.log(">>reset");
            this.form = { nombre: '', descripcion: '', precio: 0 };
        },

        async onSubmit(event){
            event.preventDefault();

            let res = await reqcrearProducto(this.form);
            console.log(">>onDelete:: ",res);
            //si se ha guardado con éxito
            if(res.code == 200){
                
                //notificación de que se a creado con éxito
                this.makeToast("Éxito", `Se ha creado el Producto con nombre ${this.form.nombre}`);
                
                //resetear el formulario
                this.onReset(event);

                //llamar a /my/admin/misProductos para refrescar la lista
                this.cargarMisProductos();

            }else{
                alert('Error al crear el producto intentelo de nuevo')
            }
        },
        onOpenUpdateModal(id){ 
            console.log(">>onOpenUpdateModal", id);
            this.modificarform.nombre = this.$store.state.userNodeData.misProductos[id].nombre;
            this.modificarform.descripcion = this.$store.state.userNodeData.misProductos[id].descripcion;
            this.modificarform.precio = this.$store.state.userNodeData.misProductos[id].precio;
            this.modificarform.idOfertas = this.$store.state.userNodeData.misProductos[id].idOfertas;
            this.showModal();
        },
        async onUpdate(){ 
            console.log(">>onUpdate", this.modificarform);
            
            let res = await reqmodificarProducto(this.modificarform);
            if(res.code == 200){
                this.makeToast("Éxito", `Se ha modificado el producto`);

                this.cargarMisProductos();
                console.log(">>onUpdate res", res);

            }
        },
        async onDelete(item){
            console.log(">>onDelete-item:: ", item);
            let nombreProducto = item.nombre;
            
            let res = await reqeliminarProducto({idOfertas: item.idOfertas});
            if(res.code == 200){
                this.makeToast("Éxito", `Se ha eliminado el Producto con nombre ${item.nombre}`);
                this.cargarMisProductos();
    
                console.log(">>onDelete-reqeliminarProducto:: ", res);

            }else{
                alert("Error al eliminar el producto:", nombreProducto);
            }
        },
        async cargarMisProductos(){
            let res = await this.$store.dispatch('buscarMisProductos');
            this.data = this.$store.state.userNodeData.misProductos;
            console.log("cargarMisProductos", res);

        },

    },
    mounted(){ 
        this.cargarMisProductos();
        
    }    
}

</script>

<style>

</style>
  