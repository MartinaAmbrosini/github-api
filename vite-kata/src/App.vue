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
  <AppMain />
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;
</style>
