<template>
  <div class="card sticky flex tall">
    <div class="card-header">
      <h2 class="title text-primary">Personnes</h2>
      <div class="form-group">
        <select class="select pr-5">
          <option value="">Par planète</option>
          <option value="test">1</option>
          <option value="test">2</option>
          <option value="test">3</option>
          <option value="test">4</option>
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
          <tr v-for="p in people" v-bind:key="p.name">
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
// import axios from 'axios';

export default {
  name: 'AppNavbar',
  data() {
    return {
      people: []
    }
  },
  methods: {

  },
  mounted() {
    for(let i = 1; i < 10; i++) {
      // axios.get(`https://swapi.dev/api/people/?page=${i}`)
      //   .then(response => {
      //     response.data.results.forEach(item => this.people.push(item))
      //   })
    }
  }
}
</script>

