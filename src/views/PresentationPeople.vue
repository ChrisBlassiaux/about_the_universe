<template>
  <main class="container container-1-2">
    <app-list-people @presentation-people="setPeople"></app-list-people>
    <div>
      <div class="card info text-secondary" v-if="!character">
        Sélectionner le contenu à afficher !
      </div>
      <div class="card" v-if="character">
        <div class="information mb-5">
          <div>
            <h2 class="title text-secondary">{{ character.name }}</h2>
            <div class="info mb-3"><span class="text-secondary">Taille :</span> {{ character.height !== 'unknown' ? character.height : 'Inconnu' }} <span v-if="character.height !== 'unknown'">cm</span></div>
          </div>
        </div>
        <div class="small-information mt-5">
          <p>{{ character.mass !== 'unknown' ? character.mass : 'Inconnu' }}</p>
          <span class="fas fa-weight fa-2x text-secondary"></span>
        </div>
        <div class="small-information mt-5">
          <p>{{ character.birth_year !== 'unknown' ? character.birth_year : 'Inconnu' }}</p>
          <span class="fas fa-birthday-cake fa-2x text-secondary"></span>
        </div>
        <div class="small-information mt-5">
          <p>{{ planet ? planet.name : 'Inconnu' }}</p>
          <span class="fas fa-globe fa-2x text-secondary"></span>
        </div>
        <div class="d-grid-2 mt-5 mb-5 w-100">
          <div class="information">
            <span class="fas fa-tint fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Couleur de cheveux
              </div>
              <div class="info">{{ character.hair_color !== 'none' ? character.hair_color : 'Inconnu' }}</div>
            </div>
          </div>
          <div class="information">
            <span class="fas fa-eye fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Couleur des yeux
              </div>
              <div class="info">{{ character.skin_color !== 'unknown' ? character.skin_color : 'Inconnu' }}</div>
            </div>
          </div>
        </div>
        <div class="medium-information mt-4">
          <p class="bold text-secondary">Véhicules</p>
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
      character: false,
      planet: false,
      vehicles: []
    }
  },
  methods: {
    setPeople(p) {
      this.character = p;
      this.getVehicles();
      this.getPlanet();
    },
    getVehicles() {
      this.vehicles = [];
      if (this.character.vehicles) {
        this.character.vehicles.forEach(vehicleUrl =>
            axios.get(vehicleUrl)
                .then(response => this.vehicles.push(response.data))
        )
      }
    },
    getPlanet() {
      if (this.character.homeworld) {
        axios.get(this.character.homeworld)
            .then(response => this.planet = response.data)
      }
    }
  },
  components: {AppListPeople},
}
</script>
