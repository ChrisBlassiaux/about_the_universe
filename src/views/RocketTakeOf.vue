<template>
  <main class="container container-1-1">
    <div>
      <div class="card">
        <h2 class="title">S'incrire pour le prochain décolage !</h2>
        <p>Inscrivez-vous pour participer au prochaine trouvailles !</p>
        <form @submit="onSubmit">
          <div class="form-group-1-1">
            <div class="form-group">
              <label for="first_name">Prénom</label>
              <input v-model="form.first_name" type="text" v-bind:class="{ 'form-control': true, 'form-control-danger': errors.first_name }" id="first_name" placeholder="Entrez votre prénom">
              <p class="info text-danger" v-if="errors.first_name">Le prénom est obligatoire.</p>
            </div>
            <div class="form-group">
              <label for="last_name">Nom</label>
              <input v-model="form.last_name" type="text" v-bind:class="{ 'form-control': true, 'form-control-danger': errors.last_name }" id="last_name" placeholder="Entrez votre nom">
              <p class="info text-danger" v-if="errors.last_name">Le nom est obligatoire.</p>
            </div>
          </div>
          <div class="form-group">
            <div class="form-group">
              <label for="first_name">Poids</label>
              <input v-model.number="form.weight" type="number" v-bind:class="{ 'form-control': true, 'form-control-danger': errors.weight }" id="first_name" placeholder="Entrez votre poids">
              <p class="info text-danger" v-if="errors.weight">Le poids est obligatoire et doit-être inférieur à 200 kg.</p>
            </div>
            <div>
            </div>
          </div>
          <button class="btn">S'inscrire</button>
        </form>
      </div>
    </div>
    <div>
      <div class="card">
        <h2 class="title text-primary">Liste des participants</h2>
        <table class="table w-100">
          <thead class="thead">
          <tr>
            <th class="th">Nom Prénom</th>
            <th class="th">Poids</th>
          </tr>
          </thead>
          <tbody class="tbody">
          <tr class="tr" v-for="user in users" v-bind:key="user.first_name">
            <td class="td">
              {{ user.last_name }} {{ user.first_name }}
            </td>
            <td class="td">{{ user.weight }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'RocketTakeOf',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        weight: ''
      },
      errors: {
        first_name: false,
        last_name: false,
        weight: false
      },
      users: [
        {
          first_name: 'John',
          last_name: 'Doe',
          weight: '67'
        },
        {
          first_name: 'Kyle',
          last_name: 'Jen',
          weight: '80'
        }
      ]
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.verifyForm()) {
        this.users.push({ ...this.form });
      }
    },
    verifyForm() {
      this.errors.first_name = false;
      this.errors.last_name = false;
      this.errors.weight = false;
      if (!this.form.first_name) {
        this.errors.first_name = true;
      }
      if (!this.form.last_name) {
        this.errors.last_name = true;
      }
      if (!this.form.weight || (this.form.weight && this.form.weight > 200)) {
        this.errors.weight = true;
      }
      return this.errors.first_name || this.errors.last_name || this.errors.weight ? false : true;
    }
  },
  components: {},
}
</script>

<style scoped lang="scss">
  .form-control-danger {
    border-color: #C75757;
  }
</style>
