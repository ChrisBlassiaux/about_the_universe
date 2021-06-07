<template>
  <div class="card sticky flex tall">
    <div class="card-header">
      <h2 class="title text-primary">Véhicules</h2>
      <div class="form-group">
        <select class="select pr-5" @change="filterByGender($event)">
          <option value="">Par prix</option>
          <option value="0">0 à 10.000</option>
          <option value="1">10.000 à 100.000</option>
          <option value="2">+ de 100.000</option>
        </select>
      </div>
      <div class="form-group">
        <div class="form-group form-group-search">
          <input
              type="text"
              class="form-control searchbar"
              id="searchbar"
              placeholder="Faites votre recherche"
          />
          <span class="fas fa-search icon"></span>
        </div>
      </div>
    </div>

    <div class="table" v-if="vehicles">
      <table>
        <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="p in vehicles" v-bind:key="p.name" @click="showPresentation(p)">
          <td>{{ p.name }}</td>
          <td>{{ p.cost_in_credits }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer">
      <div class="medium-information mt-5">
        <span class="info">{{ vehicles.length }} resultat(s)</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppNavbar',
  data() {
    return {
      vehicles: [],
      vehiclesSaved: []
    }
  },
  methods: {
    showPresentation(p) {
      this.$emit('presentation-vehicle', p);
    },
    filterByGender(event) {
      this.vehicles = this.vehiclesSaved;
      if (event.target.value === '0') {
        this.vehicles = this.vehicles.filter(p => p.cost_in_credits !== 'unknown' && Number(p.cost_in_credits) < 10000);
      } else if (event.target.value === '1') {
        this.vehicles = this.vehicles.filter(p => p.cost_in_credits !== 'unknown' &&  Number(p.cost_in_credits) > 10000 && Number(p.cost_in_credits) < 100000);
      } else if (event.target.value === '2') {
        this.vehicles = this.vehicles.filter(p => p.cost_in_credits !== 'unknown' && Number(p.cost_in_credits) > 100000);
      } else {
        this.vehicles = this.vehiclesSaved;
      }
    }
  },
  mounted() {
    for(let i = 1; i < 5; i++) {
      axios.get(`https://swapi.dev/api/vehicles/?page=${i}`)
          .then(response => {
            response.data.results.forEach(item => {
              this.vehicles.push(item)
            })
            this.vehiclesSaved = this.vehicles;
          })
    }
  }
}
</script>

