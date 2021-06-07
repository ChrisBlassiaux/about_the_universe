<template>
  <main class="container container">
    <div class="card">
      <h1 class="title">HOME PAGE</h1>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
