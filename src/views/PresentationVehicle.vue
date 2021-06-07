<template>
  <main class="container container-1-2">
    <app-list-vehicles @presentation-vehicle="setVehicle"></app-list-vehicles>
    <div>
      <div class="card info text-secondary" v-if="!vehicle">
        Sélectionner le contenu à afficher !
      </div>
      <div class="card" v-if="vehicle">
        <div class="information mb-5">
          <div>
            <h2 class="title text-secondary">{{ vehicle.name }}</h2>
            <div class="info mb-3"><span class="text-secondary">Prix :</span> {{ vehicle.cost_in_credits !== 'unknown' ? vehicle.cost_in_credits : 'Inconnu' }}</div>
          </div>
        </div>
        <div class="d-grid-2 mt-5 mb-5 w-100">
          <div class="information">
            <span class="fas fa-motorcycle fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Model
              </div>
              <p>{{ vehicle.model !== 'unknown' ? vehicle.model : 'Inconnu' }}</p>
            </div>
          </div>
          <div class="information">
            <span class="fas fa-text-height fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Taille
              </div>
              <p>{{ vehicle.length !== 'unknown' ? vehicle.length : 'Inconnu' }}</p>
            </div>
          </div>
        </div>
        <div class="d-grid-2 mt-5 mb-5 w-100">
          <div class="information">
            <span class="fas fa-users fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Nombre de passagers possible
              </div>
              <div class="info">{{ vehicle.passengers !== 'unknown' ? vehicle.passengers : 'Inconnu' }}</div>
            </div>
          </div>
          <div class="information">
            <span class="fas fa-clock fa-3x img text-secondary"></span>
            <div>
              <div class="bold text-secondary">
                Consommables
              </div>
              <div class="info">{{ vehicle.consumables !== 'unknown' ? vehicle.consumables : 'Inconnu' }}</div>
            </div>
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
import AppListVehicles from '@/components/AppListVehicles.vue';

export default {
  name: 'PresentationVehicles',
  data() {
    return {
      vehicle: false,
    }
  },
  methods: {
    setVehicle(p) {
      this.vehicle = p;
    },
  },
  components: {AppListVehicles},
}
</script>
