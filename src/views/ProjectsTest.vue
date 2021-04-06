<template>
    <div id="projects">
        <h1>Projets</h1>
        <carousel id="container__project">
            <carousel-slide class="project">
                <img
                    src="/img/projects/pokedex.png"
                    alt="Une version web de pokédex"
                />
                <div class="project__name">Pokédex</div>
                <div class="project__description">
                    Pokédex avec HTML/CSS/Node.Js/PostGreSQL
                </div>
            </carousel-slide>
            <carousel-slide class="project">
                <img
                    src="/img/projects/acey deucey.png"
                    alt="Une version web d'un jeu de carte"
                />
                <div class="project__name">Acey Deucey</div>
                <div class="project__description">
                    Jeu de Carte avec HTML/CSS/JavaScript
                </div>
            </carousel-slide>
            <carousel-slide class="project">
                <img
                    src="/img/projects/blog.png"
                    alt="Un blog dynamique basé sur une base de données"
                />
                <div class="project__name">O'Blog</div>
                <div class="project__description">
                    Blog avec HTML/CSS/Node.Js/PostGreSQL
                </div>
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
import Carousel from "../components/Carousel/Carousel";
import CarouselSlide from "../components/Carousel/CarouselSlide";
import { mapState } from "vuex";

export default {
    name: "Projects",
    components: {
        Carousel,
        CarouselSlide,
    },
    computed: {
        ...mapState({
            projectsList: "projectsList",
        }),
    },
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
    overflow: hidden;
}

#container__project {
    width: 80%;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.project {
    width: 80%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
}

.project img {
    padding: 1rem;
    width: 50%;
    box-shadow: 0 0.2rem 0.2rem #222733;
    @media screen and (max-width: 420px) {
        width : 100%;
        
    }
}

.project__name {
    font-size: 2rem;
    font-weight: bold;
}

.project__description {
    text-align: center;
    font-style: italic;
}
</style>