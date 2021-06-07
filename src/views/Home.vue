<template>
  <main class="container container">
    <div class="card">
      <h1 class="title">ABOUT THE UNIVERSE</h1>
      <p>Bienvenue sur ABOUT THE UNIVERSE pour découvrir toutes nos découvertes à propos du monde qui nous entoure !</p>
      <router-link to="/people" class="btn mt-4" >Décourvrir</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: ''
    }
  },
  methods: {

  },
  components: {},
}
</script>
