<script>
import AppCardRepo from '../components/AppCardRepo.vue'
import AppCardUser from '../components/AppCardUser.vue'

// importo store
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCardRepo,
        AppCardUser,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div id="load" class="loader_container d-flex justify-content-center align-items-center d-none"
        style="margin-top: 20%;">
        <div class="loader"></div>
    </div>
    <div class="d-flex flex-wrap justify-content-between p-5">
        <div class="card " v-for="repo in store.repoList">
            <AppCardRepo :info="repo" />
        </div>
    </div>
    <div id="error" class="d-none"> Non esiste un risultato con il nome ricercato</div>
    <div class="d-flex flex-wrap justify-content-between p-5">
        <div class="card" v-for="repo in store.user_orgList">
            <div class="card-user" v-if="repo.type === 'User'">
                <AppCardUser :info="repo" />
            </div>
            <div class="card-organization" v-if="repo.type === 'Organization'">
                <AppCardUser :info="repo" />
            </div>
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
    background: radial-gradient(#e0993d, #89e086);
}

.card-user {
    background: radial-gradient(#76b2fe, #72bdad);
    min-height: 100%;
}

.card:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
    cursor: pointer;
}

.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>