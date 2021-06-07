<template>
  <app-navbar></app-navbar>
  <router-view/>
</template>

<style lang="scss">

</style>
<script>
  import AppNavbar from "./components/AppNavbar";
  export default {
    components: {AppNavbar}
  }
</script>
