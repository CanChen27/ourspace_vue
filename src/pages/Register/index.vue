<template>
  <div class="d-flex justify-content-center align-item-center vh-100">
    
    <b-card class="card h-custom col-4 my-auto py-3">
    <b-form v-if="show" class="d-flex justify-content-center align-items-center row">
      <h5 class="text-center col-12">OurSpace</h5>
      <h6 class="text-center col-12" >Iniciar Sesión</h6>
      <div class="col-11">
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
                          :state="usernameState"

          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="Correo" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Introduce tu correo"
            required
                          :state="emailState"

          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-3" label="Teléfono" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.phone"
            placeholder="Introduce tu número de teléfono"
            required
            type="number"
                          :state="phoneState"
            
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-4" label="Contraseña" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.passwd"
            placeholder="Introduce la contraseña"
            type="password" 
            required
                          :state="passwdState"

          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-4" label="Repite Contraseña" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.passwd_conf"
            placeholder="Repite la constraseña"
            type="password"
            required
            :state="passwd_confState"

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
        show: true,
        usernameState: null,
        emailState: null,
        phoneState: null,
        passwdState: null,
        passwd_confState: null,

      }
    },
    methods: {
      resetInput(){
        this.usernameState = null;
        this.emailState = null;
        this.phoneState = null;
        this.passwdState = null;
        this.passwd_confState = null;
      },
      async userReg() {
        // alert(JSON.stringify(this.form));
        try{
          const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const {username, email, phone, passwd, passwd_conf} = this.form;
          const patronTelefono = /^\d{9}$/;
          console.log("userReg", this.form);
          if(username&&patronEmail.test(email)&&patronTelefono.test(phone)&&passwd && passwd==passwd_conf){
            let res = await this.$store.dispatch('userReg', this.form);
            if(res.status == 200){
              alert(res.text)
              this.$router.push('/login');

            }else{
              alert(res.text);
            }
          }else{
            this.resetInput();
            if(username.length < 1){ 
              this.usernameState = false;
            }

            if(email.length < 1 || !patronEmail.test(email)){ 
              console.log("patronEmail", patronEmail.test(email))
              this.emailState = false;
            }

            if(phone.length < 1 || !patronTelefono.test(phone)){ 
              this.phoneState = false;
            }

            if(passwd.length < 1){ 
              this.passwdState = false;
            }
            
            if(passwd_conf.length < 1){ 
              this.passwd_confState = false;
            }

            if(passwd!=passwd_conf){
              this.passwdState = false;
              this.passwd_confState = false;

            }
            
            alert("Error: faltan datos o datos incorrectos");
          }

        }catch (error){
          alert(error.message);
        }
      },  
    }
};
</script>

<style> 

</style>
