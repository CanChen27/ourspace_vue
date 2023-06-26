<template>
  <div class="container">
    <!-- Content here --> 

    <h5 class="row">Detalles del producto: {{ $route.query.id }}</h5>
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur a. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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
            <h5>Nombre del dueño</h5>
            <h5>Valoración</h5>

          </div>
          <div class="col-12">
            <p>descripcion</p>
            <p>Lorem ipsum dolor sit amet, consectetur a. Nulla porttitor euismod eros vitae sodales. Cras augue ligula, iaculis eu enim eu, dapibus finibus est. Etiam pretium ex ut tellus ultrices, in aliquet quam cursus. Aenean eu tortor ex. Maecenas consectetur placerat libero nec dignissim. Donec non sagittis sapien, viverra consectetur magna. Duis venenatis ipsum eu venenatis rhoncus.</p>

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
          :title="`${precio}€/hora`"
      
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 stiky-element"
        >
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-5">
              <label for="example-datepicker">Fecha Inicio</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-5">
              <label for="example-datepicker">Fecha Inicio</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-5"> 
              <b-form-timepicker v-model="value" locale="en"></b-form-timepicker> 
            </b-form-group>

            <b-form-group id="input-group-3" label="Compartir:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="share"
                required
              ></b-form-select>
            </b-form-group> 
            <div >
              <b-button type="submit" variant="primary">Reservar</b-button>
            </div>
          </b-form>
       
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

export default {
  name: "App",
  // components: { Navbar_comp, Filter_comp, List_comp },

  data: function () {
    return {
      name: "Details",
      slide: 0,
      sliding: null,
      precio: 20,
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        share: [{ text: 'Select One', value: null }, 'Reservar', 'Buscar gente'],
        show: true
    };
  },
  methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
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
      }
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
