<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">OurSpace</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-navbar-nav>
        <b-nav-item href="#">Iniciar Sesión</b-nav-item> 
        <b-nav-item href="#">Registrarse</b-nav-item> 
      </b-navbar-nav>

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
            <em>Perfil</em>
          </template>
          <b-dropdown-item href="#">Mi espacio</b-dropdown-item>
          <b-dropdown-item href="#">
            Notificaciones
            <b-badge variant="danger">
              9
              <span class="sr-only"> unread messages</span>
            </b-badge>
          </b-dropdown-item>

          <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar_comp",
};
</script>

<style></style>
