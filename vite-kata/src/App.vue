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
    getRepo() {
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

      store.searchText = '';

      store.repoList = '';
      store.user_orgList = '';
    }
  },
}
</script>

<template>
  <AppHeader @search="getRepo" />
  <AppMain />
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;
</style>
