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
            class="mt-4"
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
    
    
  
          <b-form-group id="input-group-2" label="Contraseña" label-for="input-2" class="mt-4">
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Introduce la contraseña"
              type="password" 
              required
              :state="passwordState"
              
            ></b-form-input>
          </b-form-group>
      
  
          <div class="d-flex justify-content-between mt-5">
            <router-link class="text-secondary" to="/register">Registrarse</router-link>
            
            <b-button type="submit" variant="primary" @click.prevent="userLogin">Iniciar sesión</b-button> 
          </div>

        </div>
      </b-form> 
    </b-card>
  </div>
</template>

<script> 
 

export default {
  name: "Login_page", 

  data() {
      return {
        form: {
          username:'', 
          password: '',  
        }, 
        show: true,
        usernameState: null,
        passwordState: null,
      }
    },
    methods: { 

      async userLogin(){ 
        const {username, password} = this.form;
        if(username && password){
          console.log("userLogin", this.form);
          this.usernameState = true;
          this.passwordState = true;


          let res = await this.$store.dispatch('userLog', this.form);
          if(res.status == 200){
            if(username == 'root'){

              this.$router.push('/root');
            }
            else{
              this.$router.push('/home');

            }
          }else if(res.status == 300){
            alert(res.text);
            this.usernameState = false;
            this.passwordState = false;
          }else if(res.status == 1){
            alert(res.text);
            this.usernameState = false;
            this.passwordState = false;

          }
        }else{
          console.log("faltan datos", this.form);
          if(username.length < 1){
            this.passwordState = null;
            this.usernameState = false;
          }
          if(password.length < 1){
            this.usernameState = null;
            this.passwordState = false;
          }
          
        } 
      }
    }
};
</script>

<style>  

</style>
