<template>
  <div class="container">
    <!-- Content here -->  
    
    <div class="d-flex align-item-center row">
      <h5 class="col font-weight-bold">Detalles del producto: {{ productoInfo.nombre }}</h5>  
      
    </div>
    <div class="row mb-2">
      <div class="d-flex align-items-center justify-content-end col">
        <div @click="favoritoSwitch" class="ml-5 ">
          <font-awesome-icon v-show="aniadirFavorito==='0'" icon="heart" size="xl" style="color: gray;" />
          <font-awesome-icon v-show="aniadirFavorito==='1'" icon="fa-solid fa-heart" size="xl" style="color: #ff8080;" />
        </div>
        <p class="mb-0 ml-2">Guardar</p>

      </div>

    </div>
    
  
    <div class="">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
  

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide v-for="(item, key) in JSON.parse(productoInfo.img)" :key="key" >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :style="{ maxHeight: '480px' }"
            :src="`http://localhost:8889/${item}`"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

    </div>
    <div class="row my-5">
      <div class="col-8">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h5>Arrendador:  {{ productoInfo.organizacion }}</h5> 
          </div> 

        </div>

        <hr/>
        <div class="row">
          
          <div class="col-12">
            <h5>Descripción de la oferta</h5>
            <p>
              {{ productoInfo.descripcion }}
            </p>

          </div>
        </div>
        <hr/>
        <div>
          <h5>Normas</h5>
          <div class="row d-flex">
            <div class ="col-12 ml-2 d-flex align-items-start" v-for="(norma, idx) in this.productoInfo.normas" :key="idx">
              <font-awesome-icon icon="fa-solid fa-flag" />
              <p class="ml-3">{{ $store.state.userNodeData.normas[norma].text }}</p>
            </div>
  
          </div>

        </div>
        <hr/>
        <h5>Comentarios</h5>
        <div class="col-12"> 
          <b-form @submit="onSubmitComentario" @reset="onResetComentario" v-if="show" class="row">
            <div class="col-10 pl-0">
              <b-form-textarea
                id="textarea"
                v-model="comentario"
                placeholder="Escribe un comentario"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            <div class="col-2">
              <b-button size="sm" type="submit" variant="primary">Publicar comentario</b-button>
            </div>

          </b-form>

        </div>
        <div class="row">

          <div class="col-12 m-3" v-for="(comentario, idx) in this.comentariolist" :key="idx">
            <div  class="mb-2">
              <p class="m-0 font-weight-bold" >{{ comentario.nombreUsuario }}</p>
              <p class="m-0" style="font-size: 12px; color:#888">{{ comentario.fecha }} </p>

            </div>
            <p style="font-size: 14px;">{{ comentario.text }}</p>
          </div>

        </div>
      </div>
      <div class="col-4  "> 

        <div v-if="listaCompartir">
          <b-card
          :title="`${productoInfo.precio} monedas/persona la hora`"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element shadow p-3 mb-5 bg-white rounded"
          v-if="productoInfo.plazoOferta == 0"
        >
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1">
              <label for="example-datepicker">Fecha</label>
              <b-form-datepicker id="example-datepicker" v-model="reservarForm.dia" class="mb-2" placeholder="Elige una fecha"></b-form-datepicker>
            </b-form-group>


            <b-form-group id="input-group-2"> 
              <b-form-timepicker v-model="reservarForm.hora" locale="es" placeholder="Elige una hora"></b-form-timepicker> 
            </b-form-group>

            <b-form-group id="input-group-3" label="Opción de reserva:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="reservarForm.buscarCompartir"
                :options="share" 
                required 
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-if="reservarForm.buscarCompartir == 'Buscar gente'"> 
              <label for="example-datepicker">Número de colaboradores a buscar:</label>
              <div class="d-flex align-items-center justify-content-center">
                <b-form-input class="mr-3" type="number" v-model="reservarForm.genteCompartir" min="1" :max="productoInfo.genteCompartir -1"></b-form-input>
                <span class=" " >/{{ productoInfo.genteCompartir -1 }}  </span> 
              </div>
            </b-form-group> 

            <label class="font-weight-bold">En total</label>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>

            <hr/>
            <label class="font-weight-bold">A pagar</label>
            
            <div v-if="reservarForm.buscarCompartir == 'Buscar gente'" class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  ( productoInfo.genteCompartir - reservarForm.genteCompartir)}} personas</div>
              <div>{{ productoInfo.precio * ( productoInfo.genteCompartir - reservarForm.genteCompartir)  }} monedas</div>
            </div>
            <div v-else  class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.genteCompartir}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.genteCompartir }} monedas</div>
            </div>
            

            <div class=" d-flex align-items-center">
              <b-button type="submit" variant="primary" class="col-12">Reservar</b-button>
            </div>
          </b-form>
      
          </b-card>
          <b-card
            :title="`${productoInfo.precio} monedas/persona por día`"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 stiky-element shadow p-3 mb-5 bg-white rounded"
            v-else
          >
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

              <b-form-group id="input-group-1">
                <label for="example-datepicker">Fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="reservarForm.dia" class="mb-2" placeholder="Elige una fecha"></b-form-datepicker>
              </b-form-group>


              <b-form-group id="input-group-2"> 
                <b-form-timepicker v-model="reservarForm.hora" locale="es" placeholder="Elige una hora"></b-form-timepicker> 
              </b-form-group>

              <b-form-group id="input-group-3" label="Opción de reserva:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="reservarForm.buscarCompartir"
                  :options="share" 
                  required 
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4" v-if="reservarForm.buscarCompartir == 'Buscar gente'"> 
              <label for="example-datepicker">Número de colaboradores a buscar:</label>
              <div class="d-flex align-items-center justify-content-center">
                <b-form-input class="mr-3" type="number" v-model="reservarForm.genteCompartir" min="1" :max="productoInfo.genteCompartir -1"></b-form-input>
                <span class=" " >/{{ productoInfo.genteCompartir -1 }}  </span> 
              </div>
            </b-form-group> 

            <label class="font-weight-bold">En total</label>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>

            <hr/>
            <label class="font-weight-bold">A pagar</label>
            
            <div v-if="reservarForm.buscarCompartir == 'Buscar gente'" class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  ( productoInfo.genteCompartir - reservarForm.genteCompartir)}} personas</div>
              <div>{{ productoInfo.precio * ( productoInfo.genteCompartir - reservarForm.genteCompartir)  }} monedas</div>
            </div>
            <div v-else  class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.genteCompartir}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.genteCompartir }} monedas</div>
            </div>
              

              <div class=" d-flex align-items-center">
                <b-button type="submit" variant="primary" class="col-12">Reservar</b-button>
              </div>
            </b-form>
        
          </b-card>
        </div>
        <div v-else>
        <b-card
          :title="`${productoInfo.precio} monedas/persona la hora`"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element shadow p-3 mb-5 bg-white rounded"
          v-if="productoInfo.plazoOferta == 0"
        >
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1">
              <label for="example-datepicker">Fecha</label>
              <b-form-datepicker id="example-datepicker" v-model="reservarForm.dia" class="mb-2" placeholder="Elige una fecha"></b-form-datepicker>
            </b-form-group>


            <b-form-group id="input-group-2"> 
              <b-form-timepicker v-model="reservarForm.hora" locale="es" placeholder="Elige una hora"></b-form-timepicker> 
            </b-form-group>

            <b-form-group id="input-group-3" label="Opción de reserva:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="reservarForm.buscarCompartir"
                :options="share" 
                required 
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-if="reservarForm.buscarCompartir == 'Buscar gente'"> 
              <label for="example-datepicker">Número de colaboradores a buscar:</label>
              <div class="d-flex align-items-center justify-content-center">
                <b-form-input class="mr-3" type="number" v-model="reservarForm.genteCompartir" min="1" :max="productoInfo.nArrendatarios -1"></b-form-input>
                <span class=" " >/{{ productoInfo.nArrendatarios -1 }}  </span> 
              </div>
            </b-form-group> 

            <label class="font-weight-bold">En total</label>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>

            <hr/>
            <label class="font-weight-bold">A pagar</label>
            
            <div v-if="reservarForm.buscarCompartir == 'Buscar gente'" class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  ( productoInfo.nArrendatarios - reservarForm.genteCompartir)}} personas</div>
              <div>{{ productoInfo.precio * ( productoInfo.nArrendatarios - reservarForm.genteCompartir)  }} monedas</div>
            </div>
            <div v-else  class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>
            

            <div class=" d-flex align-items-center">
              <b-button type="submit" variant="primary" class="col-12">Reservar</b-button>
            </div>
          </b-form>
      
        </b-card>
        <b-card
          :title="`${productoInfo.precio} monedas/persona por día`"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element shadow p-3 mb-5 bg-white rounded"
          v-else
        >
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1">
              <label for="example-datepicker">Fecha</label>
              <b-form-datepicker id="example-datepicker" v-model="reservarForm.dia" class="mb-2" placeholder="Elige una fecha"></b-form-datepicker>
            </b-form-group>


            <b-form-group id="input-group-2"> 
              <b-form-timepicker v-model="reservarForm.hora" locale="es" placeholder="Elige una hora"></b-form-timepicker> 
            </b-form-group>

            <b-form-group id="input-group-3" label="Opción de reserva:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="reservarForm.buscarCompartir"
                :options="share" 
                required 
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-if="reservarForm.buscarCompartir == 'Buscar gente'"> 
              <label for="example-datepicker">Número de colaboradores a buscar:</label>
              <div class="d-flex align-items-center justify-content-center">
                <b-form-input class="mr-3" type="number" v-model="reservarForm.genteCompartir" min="1" :max="productoInfo.nArrendatarios -1"></b-form-input>
                <span class=" " >/{{ productoInfo.nArrendatarios -1 }}  </span> 
              </div>
            </b-form-group> 

            <label class="font-weight-bold">En total</label>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>

            <hr/>
            <label class="font-weight-bold">A pagar</label>
            
            <div v-if="reservarForm.buscarCompartir == 'Buscar gente'" class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  ( productoInfo.nArrendatarios - reservarForm.genteCompartir)}} personas</div>
              <div>{{ productoInfo.precio * ( productoInfo.nArrendatarios - reservarForm.genteCompartir)  }} monedas</div>
            </div>
            <div v-else  class="d-flex align-items-center justify-content-between mb-3">
              <div>{{ productoInfo.precio }} x {{  productoInfo.nArrendatarios}} personas</div>
              <div>{{ productoInfo.precio * productoInfo.nArrendatarios }} monedas</div>
            </div>
            

            <div class=" d-flex align-items-center">
              <b-button type="submit" variant="primary" class="col-12">Reservar</b-button>
            </div>
          </b-form>
      
        </b-card>
        </div>

        <div>
</div>
      </div>
    </div>
  </div>

  
</template>

<script> 
// import Filter_comp from "@/components/Filter_comp";
// import List_comp from "@/components/List_comp";

import {reqNuevaReserva, reqpublicarComentario, reqNodeResourceComments, reqaniadirFavorito, reqquitarFavorito, reqconsultarFavorito} from "@/api/index"
const { v4: uuidv4 } = require('uuid');

export default {
  name: "App",
  // components: { Navbar_comp, Filter_comp, List_comp },
 
  data: function () {
    return {
      name: "Details",
      idOferta: '',
      slide: 0,
      sliding: null,
      precio: 20,
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],

      },
      share: [{ text: 'Selecciona una opción', value: null }, 'Reservar', 'Buscar gente'],
      show: true,
      reservarForm: {
        dia: '',
        hora: '',
        buscarCompartir: false,
        genteCompartir: 0,
        id:'',
      },
      productoInfo: {},
      comentario:'',
      comentariolist:[],
      aniadirFavorito: "0",
      isChecked: true,
      listaCompartir : false,
    };
  },
  methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      makeToast(title, msg) { 
            this.$bvToast.toast(msg, {
                title: title,
                autoHideDelay: 5000, 
            })
        },        
      limpiarReservaForm(){ 
          console.log(">>reset");
          this.reservarForm = { 
            dia: '',
            hora: '',
            buscarCompartir: false,
            genteCompartir: false,
            id:'',
            uuid: '',
           };
      },
      async onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
        let uid = uuidv4();
        this.reservarForm.uuid = uid;
        let res = await reqNuevaReserva(this.reservarForm);
        console.log(">>onSubmit", res);
        if(res.status == 200){
          this.makeToast("Éxito", `Se ha realizado la reserva del producto de forma exitosa`);
          this.limpiarReservaForm();
        }
      },
      async onSubmitComentario(event) {
        event.preventDefault()

        console.log(">>onSubmitComentario", this.comentario);
        let res = await reqpublicarComentario({
          'idOferta': this.idOferta,
          'fecha': this.getCurrentDate(),
          'text': this.comentario,
        })
        console.log(">>onSubmitComentario", res);
        if(res.status == 200){
          this.cargarComentarios();
        }

      },
      getCurrentDate(){
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Los meses son indexados desde 0, por lo tanto, se suma 1
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
 
        const ret = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        console.log(">>getCurrentDate", ret);

        return ret;
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }, 
      onResetComentario(event) {
        event.preventDefault()
        // Reset our form values
        this.comentario = '';
      }, 
      async cargarComentarios(){
        let res = await reqNodeResourceComments(this.idOferta);
        console.log("cargarComentarios", res);
        if(res.status == 200){
          this.comentariolist = res.data;
        }else if(res.status == 201){
          this.comentariolist = [];
        } 
      },
      async handleFavoritoChange(newValue){
        let res;
        if(newValue == "1"){
          res = await reqaniadirFavorito({idOferta: this.idOferta});
          this.$("#heart").css("color: #ff6b6b;")

        }

        else if(newValue == "0"){
          res = await reqquitarFavorito({idOferta: this.idOferta});

        }

        console.log("handleFavoritoChange", res);
        if(res.status == 200){
          alert(res.message);
        }
        // else{
        //   alert("Error: handleFavoritoChange status diferente a 200")
        // }
      },
      async setFavorito(){
        let res = await reqconsultarFavorito(this.idOferta);
        console.log("setFavorito", res);
        if(res.status == 200){
          this.aniadirFavorito = "1";
        } 
      },
      favoritoSwitch(){
        if(this.aniadirFavorito === "1"){
          this.aniadirFavorito = "0"
        }else{
          this.aniadirFavorito = "1"

        }
      }
    },  
    watch: {
      aniadirFavorito(newValue, oldValue) {
        // Este watcher se activará cuando myVariable cambie
        this.handleFavoritoChange(newValue, oldValue);
      }
    },
    beforeMount(){
      console.log(">>beforeMount");

      let productoId= this.$route.query.id;
      // let productoIdx= this.$route.query.idx;
      this.idOferta = productoId;
      this.reservarForm.id = productoId;
      this.productoInfo = this.$store.state.resourceListNodeData.userListNode.find(resource => resource.idOfertas == productoId);
      console.log("productoInfo", this.productoInfo)
      this.cargarComentarios();
  
      if(this.productoInfo.normas.length>0)
        this.productoInfo.normas = JSON.parse(this.productoInfo.normas);
      this.setFavorito();

      //para reutilizar la página pages
      //en caso de que sea una reserva en modo compartir
      if('compartir' in this.productoInfo){
        this.listaCompartir = true;
        this.reservarForm.dia = this.productoInfo.fecha;
        this.reservarForm.hora = this.productoInfo.hora;
        this.reservarForm.genteCompartir = this.productoInfo.genteCompartir;
        this.reservarForm.buscarCompartir =   'Buscar gente';

      }else{
        this.listaCompartir = false
      }


            // dia: '',
      //   hora: '',
      //   buscarCompartir: false,
      //   genteCompartir: 0,
      //   id:'',
      
    },
    mounted(){
      console.log(">>mounted");

    }
};
</script>

<style>
 

.stiky-element {
  position: sticky;
  top: 30px; 
}

</style>
