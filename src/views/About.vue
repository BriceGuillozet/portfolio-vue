<template>
    <div class="about">
        <h1> Qui suis-je ?</h1>
        <div
            class="about__pic"
            :style="{ backgroundImage: `url(${profilPicUrl})` }"
        ></div>
        <p>
            Depuis l'enfance je me suis passionné pour les sciences et la
            technologie. Avec un parcours varié, articulé autour des
            nanotechnologies une chose était certaine : la fascination que
            j'apportais à ces domaines avaient en commun le développement et le
            code.
        </p>
        <p>
            Je me suis donc lancé dans l'aventure O'Clock. 430 heures de
            formation intensive pour des bases solides :
        </p>
        <p>HTML | CSS | JavaScript | Node.Js | SQL</p>
        <p>
            D'un naturel curieux, la montée en compétence et l'apprentissage de
            nouvelles technologies sont un moteur pour moi.
        </p>
    </div>
</template>

<script>
import profilPicUrl from "../assets/profil_pix.png";

export default {
    data() {
        return {
            profilPicUrl,
        };
    },
};
</script>


<style scoped lang="scss">
.about {
    width: 70vw;
    height: 80vh;
    line-height: 2rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &__pic {
        width: 10vw;
        height: 10vw;
        background-position: center;
        background-size: cover;
        clip-path: circle(50% at 50% 50%);
    }
}
</style>