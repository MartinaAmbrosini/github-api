<script>
export default {
    name: 'AppCardRepo',
    props: {
        info: Object
    },
};
</script>

<template>
    <div class="card-cover">
        <div class="card-body h-100">
            <div class="d-flex justify-content-center mt-4 mb-4">
                <img :src="info.owner.avatar_url" class="card-img">
            </div>
            <h5 class="card-title">{{ info.full_name }}</h5>
            <p class="card-text">{{ info.description }}</p>

            <i class="fas fa-star" style="color: yellow;"><span class="ms-2" style="color: black;">{{
                    info.stargazers_count }}</span>
            </i>
            <div class="mt-3 mb-3 w-80" style="border: 1px solid darkgreen; margin: 0 auto;"></div>
            <i class="fas fa-circle-exclamation" style="color: slategray;"><span class="ms-2" style="color: black;">{{
                    info.open_issues }}</span></i>
        </div>
    </div>
    <div class="card-footer mt-auto d-flex align-items-center justify-content-center">
        <a class="repo-connect" :href="info.html_url">VAI AL REPO <i class="fas fa-share-from-square"></i> </a>
    </div>
</template>

<style lang="scss" scoped>
.card-img {
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    width: 7em;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
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