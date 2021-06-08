<template>
  <div class="contain-alert">
    <div class="alert alert-success">
      Vous avez été ajouté à la liste des participants.
      <span class="icon" @click="removeAlert">&times;</span>
    </div>
  </div>
  <main class="container container-1-1">
    <div>
      <div class="card card-1">
        <h2 class="title">S'incrire pour le prochain décolage !</h2>
        <p>Inscrivez-vous pour participer aux prochaines trouvailles !</p>
        <form @submit="onSubmit">
          <div class="form-group-1-1">
            <div class="form-group">
              <label for="first_name">Prénom</label>
              <input v-model="form.first_name" type="text" v-bind:class="{ 'form-control': true, 'form-control-danger': errors.first_name }" id="first_name" placeholder="Entrez votre prénom">
              <p class="info text-danger" v-if="errors.first_name">Le prénom est obligatoire et ne doit pas déjà être entré.</p>
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
          <div class="form-group">
            <h2 class="subtitle mt-5 mb-3">Choississez votre combinaison spatiale : </h2>
            <span class="badge badge-primary mr-2">
              <input v-model.number="form.spaceSuit" checked type="radio" name="checkbox" id="1" value="1" />
              <label for="1">
                <img src="../assets/images/spacesuit1.jpg" alt="Combinaison spatiale n°1">
              </label>
            </span>
            <span class="badge badge-primary">
              <input v-model.number="form.spaceSuit"  type="radio" name="checkbox" id="2" value="2" />
              <label for="2">
                <img src="../assets/images/spacesuit2.jpeg" alt="Combinaison spatiale n°2">
              </label>
            </span>
          </div>
          <button class="btn">S'inscrire</button>
        </form>
      </div>
    </div>
    <div>
      <div class="card card-2">
        <h2 class="title text-primary">Liste des participants</h2>
        <table class="table w-100">
          <thead class="thead">
          <tr>
            <th class="th">Nom Prénom</th>
            <th class="th">Poids</th>
            <th class="th text-right">Combinaison spatiale</th>
          </tr>
          </thead>
          <tbody class="tbody">
          <tr class="tr" v-for="user in users" v-bind:key="user.first_name">
            <td class="td">
              {{ user.last_name }} {{ user.first_name }}
            </td>
            <td class="td">{{ user.weight }}</td>
            <td class="td text-right">
              <img src="../assets/images/spacesuit1.jpg" alt="Combinaison spatiale n°1" v-if="user.spaceSuit === 1">
              <img src="../assets/images/spacesuit2.jpeg" alt="Combinaison spatiale n°2" v-if="user.spaceSuit === 2">
            </td>
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
        weight: '',
        spaceSuit: 1
      },
      errors: {
        first_name: false,
        last_name: false,
        weight: false,
        spaceSuit: false
      },
      users: [
        {
          first_name: 'John',
          last_name: 'Doe',
          weight: '67',
          spaceSuit: 1,
        },
        {
          first_name: 'Kyle',
          last_name: 'Jen',
          weight: '80',
          spaceSuit: 2
        }
      ]
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.verifyForm()) {
        this.users.push({ ...this.form });
        this.addAlert();
        this.form.first_name = '';
        this.form.last_name = '';
        this.form.weight = '';
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
    },
    addAlert() {
      let containAlert = document.querySelector(".contain-alert");
      containAlert.style.display = "block";
    },
    removeAlert() {
      let containAlert = document.querySelector(".contain-alert");
      containAlert.style.display = "none";
    }
  },
  components: {},
}
</script>

<style scoped lang="scss">
  .form-control-danger {
    border-color: #C75757;
  }
  .card-1 {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    center / cover no-repeat url("../assets/images/image6.jpeg");
  }

  img {
    height: 70px;
  }

  .table img {
    height: 30px;
  }

  .contain-alert {
    display: none;
  }
</style>
