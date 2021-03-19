<template>
    <div id="container__home">
        <Screen />
        <div class="profil">
            <div class="profil__intro">
                <div class="profil__catch">
                    <strong>Développeur par passion. ❤️</strong>
                </div>
                <p>Bienvenu sur mon portfolio.</p>
                <p>
                    Je suis un développeur web avec un background en science et
                    technologie.
                </p>
                <p>
                    J'ai étudié la nanotechnogie et je suis devenu programmeur.
                </p>
            </div>
        </div>
        <div class="contact">
            <a href="https://github.com/BriceGuillozet">
                <i class="fab fa-github"></i> Github
            </a>
            <a href="mailto:brice.guillozet@gmail.com">
                <i class="fas fa-at"></i> brice.guillozet@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/brice-guillozet/">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
        </div>
    </div>
</template>

<script>
import Screen from "../components/Screen";

export default {
    name: "Home",
    components: {
        Screen,
    },
};
</script>

<style scoped lang="scss">
strong {
    font-weight: bold;
}

#container__home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

/* Profil */

.profil {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__catch {
        padding-bottom: 2rem;
        text-align: center;
    }

    p {
        padding-bottom: 1rem;
        text-align: justify;
        line-height: 1.3rem;
    }
}

/* Contact */

.contact {
    font-size: 0.8em;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    a {
        border: rgba(241, 241, 241, 0.3) solid 0.1rem;
        padding: 0.5rem;
        background-color: #525e65;
        box-shadow: 0 0.1rem 0.5rem 0.5rem #222733;
    }
    a:hover {
        color: #0d2437;
    }

    @media screen and (max-width: 1522px) {
        flex-direction: column;
        align-items: center;
        height: 20vh;
        width: 100%;
    }
}
</style>