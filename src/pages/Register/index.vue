<template>
  <div class="d-flex justify-content-center align-item-center row">
    
    <b-card title="Registro" class="w-custom h-custom col-6 mt-4">
    <b-form v-if="show" class="d-flex justify-content-center  align-items-center row">
      <div class="col-10">
        <b-form-group
          id="input-group-1"
          label="Nombre Usuario"
          label-for="input-1"  
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="Introduce nombre del usuario"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="Correo" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Introduce tu correo"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-3" label="Teléfono" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.phone"
            placeholder="Introduce tu número de teléfono"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-4" label="Contraseña" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.passwd"
            placeholder="Introduce la contraseña"
            type="password" 
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-4" label="Repite Contraseña" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.passwd_conf"
            placeholder="Repite la constraseña"
            type="password"
  
            required
          ></b-form-input>
        </b-form-group>
  
  
        <div class="d-flex justify-content-between mt-5">
          <router-link class="text-secondary" to="/login">Iniciar sesión</router-link>
  
          <b-button type="submit" variant="primary" @click.prevent="userReg">Registrarse</b-button> 
        </div>
        
      </div>

    </b-form> 
  </b-card>
  </div>
</template>

<script> 

export default {
  name: "Register_page", 

  data() {
      return {
        //los parametros deben coincidir con los que muestran en la api
        form: {
          username:'',
          email: '',
          phone: '', 
          passwd: '', 
          passwd_conf : '', 
        }, 
        show: true
      }
    },
    methods: {
      async userReg() {
        // alert(JSON.stringify(this.form));
        try{
          const {username, email, phone, passwd, passwd_conf} = this.form;
          console.log("userReg", this.form);
          if(username&&email&&phone&& passwd==passwd_conf){
            await this.$store.dispatch('userReg', this.form);
            this.$router.push('/login');
          }else{
            alert("Register:: faltan datos");
          }

        }catch (error){
          alert(error.message);
        }
      },  
    }
};
</script>

<style>
.w-custom{
  width: 60vw;
}

.h-custom{
  height: auto;
}

</style>
