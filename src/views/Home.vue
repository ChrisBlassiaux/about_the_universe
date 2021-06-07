<template>
  <main class="container container">
    <div class="card">
      <h1 class="title">ABOUT THE UNIVERSE</h1>
      <p>Bienvenue sur ABOUT THE UNIVERSE pour découvrir toutes nos découvertes à propos du monde qui nous entoure !</p>
      <router-link to="/about" class="btn mt-4" >Décourvrir</router-link>
      <p>{{ user.data?.name }}</p>
      <p>{{ user.data?.height }}</p>
      <p>{{ user.data?.mass }}</p>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

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
  mounted() {
    axios.get('https://swapi.dev/api/people/3')
        .then(response => this.user = response)
        .catch(err => console.log(err))
  }
}
</script>
