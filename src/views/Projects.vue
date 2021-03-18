<template>
    <div id="projects">
        <h1>Projets</h1>
        <div id="container__project">
            <div class="project project1">
                <img
                    src="img/projects/pokedex.png"
                    alt="Une version web d'un pokédex"
                />
                <div class="project__name">Pokédex</div>
                <div class="project__description">
                    Pokédex avec HTML/CSS/Node.Js/PostGreSQL
                </div>
            </div>
            <div class="project project2">
                <img
                    src="img/projects/acey deucey.png"
                    alt="Une version web d'un jeu de carte"
                />
                <div class="project__name">Acey Deucey</div>
                <div class="project__description">
                    Jeu de Carte avec HTML/CSS/JavaScript
                </div>
            </div>
            <div class="project project3">
                <img
                    src="img/projects/blog.png"
                    alt="Un blog dynamique basé sur une base de données"
                />
                <div class="project__name">O'Blog</div>
                <div class="project__description">
                    Blog avec HTML/CSS/Node.Js/PostGreSQL
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h1 {
    font-size: 2em;
    font-weight: bold;
}

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
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.project {
    width: 20%;
    min-height: 20em;
    border: #f1f1f1 solid 0.1rem;
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