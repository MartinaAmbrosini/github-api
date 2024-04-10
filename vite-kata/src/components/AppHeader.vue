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
                <button class="btn btn-success" type="submit" @click.prevent="$emit('search')">CERCA</button>
            </form>
        </div>
    </nav>
</template>