<template>
  <div class="navbar-height"></div>
  <div class="navbar" @resize="resizeNav">
    <div class="contain-burger">
      <div class="burger" @click="clickNav"></div>
    </div>
    <nav class="nav">
      <router-link to="/">
        <img src="../assets/logotype.png" alt="Logotype de Direct Burotic" />
      </router-link>
      <router-link to="/" class="navbar-link">Accueil</router-link>
    </nav>
  </div>
  <nav class="vertical-navbar">
    <router-link to="/planets" class="nav-vertical-link">
      <span class="fas fa-globe fa-3x"></span>
      <p>Planètes</p>
    </router-link>
    <router-link to="/vehicles" class="nav-vertical-link">
      <span class="fas fa-rocket fa-3x"></span>
      <p>Véhicules</p>
    </router-link>
    <router-link to="/people" class="nav-vertical-link">
      <span class="fab fa-reddit-alien fa-3x"></span>
      <p>Personnes</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    resizeNav() {
      if (document.querySelector('.vertical-navbar')) {
        window.addEventListener("resize", function () {
          let nav = document.querySelector(".vertical-navbar");
          if (window.innerWidth > 960) {
            nav.style.display = "block";
          } else if (window.innerWidth <= 960) {
            nav.style.display = "none";
          }
        });
      }
    },
    clickNav() {
      let nav = document.querySelector(".vertical-navbar");
      if (!nav.style.display || nav.style.display === "none") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    }
  }
}
</script>
