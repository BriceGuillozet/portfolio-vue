import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projectsList: [
            {
                id: 0,
                name: "Pokédex",
                image: {
                    source: "/img/projects/pokedex.png",
                    alt: "Une version web de pokédex",
                },
                description: "Pokédex avec HTML/CSS/Node.Js/PostGreSQL"
            },
            {
                id: 1,
                name: "Acey Deucey",
                image: {
                    source: "/img/projects/acey deucey.png",
                    alt: "Une version web d'un jeu de carte",
                },
                description: "Jeu de Carte avec HTML/CSS/JavaScript"
            },
            {
                id: 2,
                name: "O'Blog",
                image: {
                    source: "/img/projects/blog.png",
                    alt: "Un blog dynamique basé sur une base de données",
                },
                description: "Blog avec HTML/CSS/Node.Js/PostGreSQL"
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})