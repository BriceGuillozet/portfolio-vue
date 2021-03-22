<template>
    <div class="project">
        <img :src="image.source" :alt="image.alt" />
        <div class="project__name">{{ name }}</div>
        <div class="project__description">
            {{ description }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectsItem",

    props: {
        image: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.project {
    width: 20%;
    min-height: 20em;
    //border: #f1f1f1 solid 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.project img {
    padding: 1rem;
    width: 100%;
    box-shadow: 0 0.2rem 0.2rem #222733;
}

.project__name {
    padding: 1rem;
    font-weight: bold;
}

.project__description {
    text-align: center;
    font-style: italic;
    padding-bottom: 1rem;
}
</style>