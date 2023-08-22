<template>
  <b-container class="my-3">
    <!-- Content here -->

    <ul class="d-flex align-item-center justify-content-around">
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column" v-on:click="filter(1)">
          <font-awesome-icon icon="fa-solid fa-house" />
          <label for="">House</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column">
          <font-awesome-icon icon="hat-wizard" />
          <label>Hat Wizard</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column">
          <font-awesome-icon icon="fa-solid fa-lock" />
          <label>Lock</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column">
          <font-awesome-icon icon="fa-solid fa-wifi" />
          <label>Wifi</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column">
          <font-awesome-icon icon="fa-solid fa-tree" />
          <label>Tree</label>
        </div>
      </li>
      <li class="" style="height: 6vh;">
        <div class="filterBtn d-flex align-items-center flex-column">
          <font-awesome-icon icon="fa-solid fa-globe" />
          <label>Globe</label>
        </div>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: "Filter_comp",
  methods: {
    filter(tipo) {
      this.$store.dispatch("filterNodeUsersData", tipo);
    }
  }
};
</script>

<style>
.filterBtn:hover {
  border-bottom: 2px solid #bbb;
}
</style>
