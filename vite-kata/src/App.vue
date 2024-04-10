<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'

// importo store
import { store } from './store';

import config from './config.js';

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      store,
      token: config.token,
    }
  },

  methods: {
    getRepo() {
      const data = {
        params: {
          q: store.searchText
        },
        headers: {
          "Authorization": `Bearer ${this.token}`,
          "X-GitHub-Api-Version": "2022-11-28"
        }
      };

      axios.get(`${store.repoApiURL}`, data)
        .then(res => {
          console.log(res);
          store.repoList = res.data.items;
          // console.log(store.repoList);
          console.log(store.searchText);
          // console.log(store.repoList[1]);
        })
        .catch(err => {
          console.log(err);
        }),
        //   axios.get(store.tvApiURL + store.searchText)
        //     .then(res => {
        //       store.tvList = res.data.results;
        //       console.log(store.tvList);
        //     })
        //     .catch(err => {
        //       console.log(err);
        //     })

        console.log(store.searchText)
      store.searchText = '';
    }
  },
}
</script>

<template>
  <AppHeader @search="getRepo" />

  <div class="card" v-for="repo in store.repoList" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->

    <div class="card-body">
      <h5 class="card-title">{{ repo.full_name }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;
</style>
