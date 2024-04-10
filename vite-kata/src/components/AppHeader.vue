<script>
import { store } from '../store';

export default {
    name: "AppHeader",

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand"><b>GITHUB API</b></a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Cerca" v-model="store.searchText"
                    @keyup.enter="$emit('search')" aria-label=" Search">

                <!-- <select class="form-select" aria-label="Default select example">
                    <option selected disabled>Seleziona categoria</option>
                    <option value="1">Repositories</option>
                    <option value="2">Utente/Organizzazioni</option>
                </select> -->
                <button class="btn btn-success ms-2" type="submit" @click.prevent="$emit('search')"><i
                        class="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    min-height: 5em;
}
</style>