<script>
export default {
    name: 'AppCardUser',
    props: {
        info: Object
    },
};
</script>

<template>
    <div class="card-cover">
        <div class="card-body h-100">
            <div class="d-flex justify-content-center mt-5 mb-4">
                <img :src="info.avatar_url" class="card-img-user">
            </div>
            <h5 class="card-title">{{ info.login }}</h5>
            <p v-if="info.type === 'User'" class="card-text">PROFILO: UTENTE</p>
            <p v-if="info.type === 'Organization'" class="card-text">PROFILO: ORGANIZZAZIONE</p>
        </div>
    </div>
    <div class="card-footer d-flex align-items-center justify-content-center">
        <a class="repo-connect" :href="info.html_url">VAI AL REPO <i class="fas fa-share-from-square"></i> </a>
    </div>
</template>

<style lang="scss" scoped>
.card-img-user {
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    width: 80%;
}

.card-text {
    font-size: 1.2em;
    font-weight: bold;
}

.repo-connect {
    text-decoration-line: none;
    color: darkblue;
    font-weight: bold;
}
</style>