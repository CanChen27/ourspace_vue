<template>
<div>
    <div class="d-flex align-items-center justify-content-between">
        <h4>{{ title }}</h4>
        <div>
            <b-button v-b-modal.crearProductoModal variant="primary">Crear</b-button>
        </div>
  </div>
    <div class="d-flex flex-wrap"> 

        <div v-for="(item, index) in data" :key="item.idOferta" class="m-1">

            <div class="image-container">
                <b-card-img
                    :src="`http://localhost:8889/${JSON.parse(item.img)[0]}`" 
                    class="img-fluid fixed-size-image"
                
                ></b-card-img> 
            </div>
        <b-card-text> {{ item.descripcion }} </b-card-text>
          <b-card-text> {{ item.precio }}€- hora </b-card-text>
 
              <div>
                  <b-button class="m-1" variant="danger" @click="onDelete(item)">Eliminar</b-button>
                  <b-button class="m-1" variant="primary" @click="onOpenUpdateModal(index)" >Modificar</b-button>
  
              </div>
  
    </div>
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

                <b-form-group id="input-group-3" label="Precio por arrendador:" label-for="input-3">
                    <b-form-input
                    id="input-3" 
                    v-model="form.precio"
                    placeholder="Precio por arrendador"
                    type="number"
                    required
                    ></b-form-input>

                <b-form-group id="input-group-10" label="Imágenes" aria-placeholder="Selecciona las imágenes para la oferta" >

                <b-form-file
                    v-model="form.imagenes"
                    :state="Boolean(form.imagenes)"
                    placeholder="Selecciona o arrastra y suelta imagenes aqui"
                    drop-placeholder="Selecciona o arrastra y suelta imagenes aqui"
                    multiple
                    ></b-form-file> 
                </b-form-group> 

                <b-form-group id="input-group-6" label="Normas" label-for="input-2">
                    <b-form-select v-model="form.normasSeleccionadas" :options="normas" multiple :select-size="normas.length" 
                    style="  min-height: 100px; max-height: 300px; overflow-y: auto;"></b-form-select>
                </b-form-group> 


                <b-form-group id="input-group-7" label="Plazo de pago" aria-placeholder="Selecciona tipo de plazo" label-for="input-2">
                    <b-form-select v-model="form.plazoOferta" :options="tipoPlazos"></b-form-select>
                </b-form-group> 

            </b-form-group > 

            <b-form-group id="input-group-4" label="Número de arrendatarios:" label-for="input-4">
                <b-form-input
                id="input-4" 
                v-model="form.nArrendatarios"
                placeholder="Número de arrendatarios:"
                type="number"
                value="0"
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

                <b-form-group id="input-group-6" label="Normas" label-for="input-2">
                    <b-form-select v-model="modificarform.normasSeleccionadas" :options="normas" multiple :select-size="normas.length" style="  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;"></b-form-select>
                </b-form-group> 


                <b-form-group id="input-group-7" label="Plazo de pago" aria-placeholder="Selecciona tipo de plazo" label-for="input-2">
                    <b-form-select v-model="modificarform.plazoOferta" :options="tipoPlazos"></b-form-select>
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
import { reqcrearProducto, reqeliminarProducto,  reqmodificarProducto } from "@/api";


export default {
    name: "Admin_comp", 
    data(){
        return {
            title:'Mis productos',
            data: {},
            form:{
                nombre: '',
                descripcion: '',
                precio: 0,
                imagenes:null,
                normasSeleccionadas:[],  
                plazoOferta: '',
                nArrendatarios: 0, 

            },
            modificarform:{
                nombre: '',
                descripcion: '',
                precio: 0, 
                idOfertas: '',
                normasSeleccionadas:[],  
                plazoOferta: '', 


            },
            showModificar: false,
            normas: [],
            tipoPlazos:[
                { value: 0, text: 'Corto plazo' },
                { value: 1, text: 'Largo plazo' },
            ]
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
            this.form = {
                nombre: '',
                descripcion: '',
                precio: 0, 
                idOfertas: '',
                normasSeleccionadas:null,
                plazoOferta: '', 
            };
        },

        async onSubmit(event){
            event.preventDefault(); 

            
            const formData = new FormData();
            formData.append('nombre', this.form.nombre);
            formData.append('descripcion', this.form.descripcion);
            formData.append('precio', this.form.precio); 
            formData.append('nArrendatarios', this.form.nArrendatarios); 

            this.form.normasSeleccionadas.forEach((item, index) => {
                formData.append(`normasSeleccionadas[${index}]`, item);
            });
            formData.append('plazoOferta', parseInt(this.form.plazoOferta, 10));
            Array.from(this.form.imagenes).forEach((imagen) => {
                formData.append('imagenes', imagen);
            });

            console.log(">>onSubmit form:: ",formData);
            let res = await reqcrearProducto(formData);
            console.log(">>onSubmit:: ",res);
            //si se ha guardado con éxito
            if(res.status == 200){
                
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

            this.modificarform.normasSeleccionadas = this.$store.state.userNodeData.misProductos[id].normas.length > 0 ? JSON.parse(this.$store.state.userNodeData.misProductos[id].normas ) : [];
            this.modificarform.plazoOferta = this.$store.state.userNodeData.misProductos[id].plazoOferta;
            this.showModal();
        },
        async onUpdate(){ 
            console.log(">>onUpdate", this.modificarform);
            
            let res = await reqmodificarProducto(this.modificarform);
            if(res.status == 200){
                this.makeToast("Éxito", `Se ha modificado el producto`);

                this.cargarMisProductos();
                console.log(">>onUpdate res", res);

            }
        },
        async onDelete(item){
            console.log(">>onDelete-item:: ", item);
            let nombreProducto = item.nombre;
            
            let res = await reqeliminarProducto({idOfertas: item.idOfertas});
            if(res.status == 200){
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
        this.normas = this.$store.state.userNodeData.normas;
        
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
  