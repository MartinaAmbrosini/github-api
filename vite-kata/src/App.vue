<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

// importo store
import { store } from './store';

import config from './config.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
      token: config.token,
    }
  },

  methods: {
    async getRepo() {
      let data = {
        params: {
          q: store.searchText
        },
        headers: {
          "Authorization": `Bearer ${this.token}`,
          "X-GitHub-Api-Version": "2022-11-28"
        }
      };

      console.log(store.searchOption);
      console.log(store.searchText);

      // controllo se l'utente digita almeno 3 caratteri prima di far partire la ricerca

      if (store.searchText.length >= 3) {

        // una volta verificata la lunghezza effettiva della ricerca (>= 3) faccio vedere un loader che "pre-carica" le card

        document.getElementById("load").classList.remove("d-none");



        if (store.searchOption === "1") {
          axios.get(`${store.repoApiURL}`, data)
            .then(res => {
              store.repoList = res.data.items;
            })
            .catch(err => {
              console.log(err);
            }),
            console.log(store.searchText)
        } else if (store.searchOption === "2") {
          axios.get(`${store.user_orgApiURL}`, data)
            .then(res => {
              store.user_orgList = res.data.items;
            })
            .catch(err => {
              console.log(err);
            }),
            console.log(store.searchText)
        }

        // una volta ottenuti i risultati del mio array faccio scomparire il loader
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById("load").classList.add("d-none");

        // faccio uscire l'errore dopo aver fatto la ricerca

        if (store.repoList.length == 0 && store.user_orgList.length == 0) {
          document.getElementById("error").classList.remove("d-none");

          console.log(document.getElementById("error").classList);

        }
      }
      store.searchText = '';

      store.repoList = '';
      store.user_orgList = '';
    }
  },
}
</script>

<template>
  <div class="background">
  </div>
  <AppHeader @search="getRepo" />
  <AppMain />

</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;

.background {
  background-image: url(https://images.saymedia-content.com/.image/t_share/MTkzOTUzODU0MDkyODc5MzY1/particlesjs-examples.gif);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
