<template>
  <div>
    <h5>Iniciar seción</h5>
 
    <b-form v-if="show">
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
 
 

      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Introduce la contraseña"
          type="password" 
          required
        ></b-form-input>
      </b-form-group>
  


      <b-button type="submit" variant="primary" @click.prevent="userLogin">Iniciar sesión</b-button> 
      <router-link class="btn btn-secondary" to="/register">Register</router-link>
    </b-form> 
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
        show: true
      }
    },
    methods: { 

      async userLogin(){ 
        const {username, password} = this.form;
        if(username && password){
          console.log("userLogin", this.form);
          let res = await this.$store.dispatch('userLog', this.form);
          if(res.code == 200){
            this.$router.push('/home');
          }else if(res.code == 300){
            alert(res.text);
          }
        }else{
          console.log("faltan datos", this.form);
          
        } 
      }
    }
};
</script>

<style>

</style>
