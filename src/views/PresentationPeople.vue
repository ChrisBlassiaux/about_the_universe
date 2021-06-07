<template>
  <main class="container container-1-2">
    <app-list-people @presentation-people="setPeople"></app-list-people>
    <div>
      <div class="card" v-if="!character">
        Sélectionner une "personne" à afficher !
      </div>
      <div class="card" v-if="character">
        <div class="information mb-5">
          <div>
            <div class="bold text-primary">{{ character.name }}</div>
            <div class="info mb-3">Taille : {{ character.height !== 'unknown' ? character.height : 'Inconnu' }} <span v-if="character.height !== 'unknown'">cm</span></div>
          </div>
        </div>
        <div class="small-information mt-5">
          <a href="#" class="link">{{ character.mass !== 'unknown' ? character.mass : 'Inconnu' }}</a>
          <span class="fas fa-weight fa-2x"></span>
        </div>
        <div class="d-grid-2 mt-5 mb-5 w-100">
          <div class="information">
            <span class="fas fa-tint fa-3x img"></span>
            <div>
              <div class="bold">
                Couleur de cheveux
              </div>
              <div class="info">{{ character.hair_color !== 'none' ? character.hair_color : 'Inconnu' }}</div>
            </div>
          </div>
          <div class="information">
            <span class="fas fa-eye fa-3x img"></span>
            <div>
              <div class="bold">
                Couleur des yeux
              </div>
              <div class="info">{{ character.skin_color !== 'unknown' ? character.skin_color : 'Inconnu' }}</div>
            </div>
          </div>
        </div>
        <div class="medium-information mt-4">
          <p class="bold">Véhicules</p>
          <div v-if="!vehicles.length">
            Aucun véhicule recensé
          </div>
          <div v-if="vehicles.length">
            <div class="badge badge-secondary" v-for="vehicle in vehicles" v-bind:key="vehicle.name">{{ vehicle.name }}</div>
          </div>
        </div>
        <div class="mt-5 d-flex right">
          <div class="btn">En savoir plus</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppListPeople from '@/components/AppListPeople.vue';
import axios from 'axios';

export default {
  name: 'PresentationPeople',
  data() {
    return {
      id: 1,
      character: false,
      vehicles: []
    }
  },
  methods: {
    setPeople(p) {
      this.character = p;
      this.getVehicles();
    },
    getVehicles() {
      this.vehicles = [];
      if (this.character.vehicles) {
        this.character.vehicles.forEach(vehicleUrl =>
            axios.get(vehicleUrl)
                .then(response => this.vehicles.push(response.data))
        )
      }
    }
  },
  watch: {

  },
  components: {AppListPeople},
}
</script>
