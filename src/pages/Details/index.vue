<template>
  <div class="container">
    <!-- Content here --> 
    <div> 
  </div>
    <h5 class="row">Detalles del producto: {{ productoInfo.nombre }}</h5>
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
            <h5>Arrendador:  {{ productoInfo.idArrendador }}</h5>
            <h5>Valoración</h5>

          </div>
          <div class="col-12">
            <h5>Descripción de la oferta</h5>
            <p>
              {{ productoInfo.descripcion }}
            </p>

          </div>
        </div>
        <hr/>
        <h5>Normas</h5>
        <div class="row d-flex">
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
        </div>
        <hr/>
        <h5>Comentarios</h5>
        <div class="col-12"> 
          <b-form @submit="onSubmitComentario" @reset="onResetComentario" v-if="show" class="row">
            <div class="col-10">
              <b-form-textarea
                id="textarea"
                v-model="comentario"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            <div class="col-2">
              <b-button type="submit" variant="primary">Publicar comentario</b-button>
            </div>

          </b-form>
 
        </div>
        <div class="row">

          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
          <b-card >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur a.</b-card-text>
          </b-card>
        </div>
      </div>
      <div class="col-4 stiky-top"> 
        <b-card
          :title="`${productoInfo.precio} monedas/hora`"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element"
          v-if="productoInfo.plazoOferta == 0"
        >
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1">
              <label for="example-datepicker">Fecha</label>
              <b-form-datepicker id="example-datepicker" v-model="reservarForm.dia" class="mb-2"></b-form-datepicker>
            </b-form-group>


            <b-form-group id="input-group-2"> 
              <b-form-timepicker v-model="reservarForm.hora" locale="en"></b-form-timepicker> 
            </b-form-group>

            <b-form-group id="input-group-3" label="Compartir:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="reservarForm.buscarCompartir"
                :options="share" 
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-if="reservarForm.buscarCompartir == 'Buscar gente'"> 
              <b-form-input type="number" v-model="reservarForm.genteCompartir"></b-form-input>
            </b-form-group>
            
            <div >
              <b-button type="submit" variant="primary">Reservar</b-button>
            </div>
          </b-form>
       
        </b-card>

        <b-card
          :title="`${precio}€/hora`"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element"
          v-else
        >
 
       
        </b-card>
        <div>
</div>
      </div>
    </div>
  </div>

  
</template>

<script> 
// import Filter_comp from "@/components/Filter_comp";
// import List_comp from "@/components/List_comp";

import {reqNuevaReserva, reqgetComentarios, reqpublicarComentario} from "@/api/index"
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
        genteCompartir: false,
        id:'',
      },
      productoInfo: {},
      comentario:'',
      comentariolist:[],
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
        if(res.code == 200){
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
        if(res.code == 200){
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
        let res = await reqgetComentarios({'idOferta': this.idOferta});
        console.log("cargarMisProductos", res);
        if(res.code == 200){
          this.comentariolist = res.data;
        }else if(res.code == 201){
          this.comentariolist = [];
        } 
      }
    },
    mounted(){
      console.log(">>mounted  id", this.$route);
      let productoId= this.$route.query.id;
      let productoIdx= this.$route.query.idx;
      this.idOferta = productoId;
      this.reservarForm.id = productoId;
      this.productoInfo = this.$store.state.resourceListNodeData.userListNode[productoIdx];
      this.cargarComentarios();

    }
};
</script>

<style>


.cont {
  position: relative;
}

.stiky-element {
  position: sticky;
  top: 30px; 
}

</style>
