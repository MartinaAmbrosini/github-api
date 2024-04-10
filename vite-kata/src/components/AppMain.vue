<script>
import AppCard from '../components/AppCard.vue'

// importo store
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <h2>REPOSITORY</h2>
    <div class="d-flex flex-wrap justify-content-between p-5">
        <div class="card " v-for="repo in store.repoList">
            <AppCard :info="repo" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
h2 {
    margin: 20px 30px;
    font-weight: bolder;
    text-align: center;
}

.card {
    margin: 15px 30px 0;
    max-width: calc(100% / 6);
    min-width: calc(100% / 6);
    min-height: 448px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    background: radial-gradient(#76b2fe, #b69efe);
}

.card:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
}
</style>