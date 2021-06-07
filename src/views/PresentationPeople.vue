<template>
  <main class="container container-1-2">
    <app-list-people></app-list-people>
    <div></div>
  </main>
</template>

<script>
import AppListPeople from '@/components/AppListPeople.vue';

export default {
  name: 'PresentationPeople',
  data() {
    return {
    }
  },
  methods: {

  },
  components: {AppListPeople},
  mounted() {

  }
}
</script>
