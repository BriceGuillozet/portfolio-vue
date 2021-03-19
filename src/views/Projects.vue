<template>
    <div id="projects">
        <h1>Projets</h1>
        <div id="container__project">
            <ProjectsItem
                v-for="item in projectsList"
                :name="item.name"
                :image="item.image"
                :description="item.description"
                :key="item.name"
            />
        </div>
    </div>
</template>

<script>
import ProjectsItem from "../components/ProjectsItem";
import { mapState } from "vuex";

export default {
    name: "Projects",
    components: {
        ProjectsItem,
    },
    computed: {
        ...mapState({
            projectsList: "projectsList"
        })
    }
};
</script>

<style scoped lang="scss">

#projects {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 5rem;
}

#container__project {
    width: 85%;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
</style>