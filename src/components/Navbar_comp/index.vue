<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/#/home">OurSpace</b-navbar-brand>
 
 

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar
              variant="info"
              src="https://placekitten.com/300/300"
            ></b-avatar>
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#" @click.prevent="admin()">Mi espacio</b-dropdown-item>
          <b-dropdown-item href="#">
            Notificaciones
            <b-badge variant="danger">
              9
              <span class="sr-only"> unread messages</span>
            </b-badge>
          </b-dropdown-item>

          <b-dropdown-item href="#" @click.prevent="logout">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: "Navbar_comp",
  data(){
    return {
      show: false, 
    }
  },
  methods:{
    logout(){
      // alert("logout");
      //axios para logout
      this.$store.dispatch("userLogout");
      //limpiar datos de la cache
      this.$router.push('/login');
    },
    admin(){
      this.$router.push('/admin');
    }
  },
  computed:{
    username () {
      return this.$store.state.userNodeData.userData.username;
    }
  }
};
</script>

<style></style>
