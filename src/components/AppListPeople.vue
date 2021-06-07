<template>
  <div class="card sticky flex tall">
    <div class="card-header">
      <h2 class="title text-primary">Personnes</h2>
      <div class="form-group">
        <select class="select pr-5" @change="filterByGender($event)">
          <option value="">Par genre</option>
          <option value="male">Male</option>
          <option value="female">Femelle</option>
          <option value="n/a">n/a</option>
          <option value="hermaphrodite">Hermaphrodite</option>
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

    <div class="table" v-if="people">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in people" v-bind:key="p.name" @click="showPresentation(p)">
            <td>{{ p.name }}</td>
            <td>{{ p.gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer">
      <div class="medium-information mt-5">
        <span class="info">{{ people.length }} resultat(s)</span>
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
      people: [],
      peopleSaved: []
    }
  },
  methods: {
    showPresentation(p) {
      this.$emit('presentation-people', p);
    },
    filterByGender(event) {
      this.people = this.peopleSaved;
      if (event.target.value !== '') {
        this.people = this.people.filter(p => p.gender === event.target.value);
      } else {
        this.people = this.peopleSaved;
      }
    }
  },
  mounted() {
    for(let i = 1; i < 10; i++) {
      axios.get(`https://swapi.dev/api/people/?page=${i}`)
        .then(response => {
          response.data.results.forEach(item => {
            this.people.push(item)
          })
          this.peopleSaved = this.people;
        })
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
  center / cover no-repeat url("../assets/images/image4.jpeg");
}
</style>

