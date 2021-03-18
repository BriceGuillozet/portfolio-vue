<template>
  <div id="container__home">
    <div class="profil">
      <div
        class="profil__pic"
        :style="{ backgroundImage: `url(${profilPicUrl})` }"
      ></div>
      <div class="profil__intro">
        <div class="profil__catch">
          <strong>Développeur par passion. ❤️</strong>
        </div>
        <p>Bienvenu sur mon portfolio.</p>
        <p>
          Je suis un développeur web avec un background en science et
          technologie.
        </p>
        <p>J'ai étudié la nanotechnogie et je suis devenu programmeur.</p>
      </div>
      <div class="profil__contact">
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
  </div>
</template>

<script>
import profilPicUrl from "../assets/profil_pix.png";

export default {
  name: "Home",
  data() {
    return {
      profilPicUrl,
    };
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
}

/* Profil */

.profil {
  width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  line-height: 1.3rem;
  text-align: center;
}

.profil__pic {
  display: block;
  margin-bottom: 2rem;
  min-width: 8em;
  min-height: 8em;
  background-position: center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}

.profil__catch {
  padding-bottom: 2rem;
}

.profil p {
  padding-bottom: 1rem;
  text-align: justify;
}

.profil__contact {
  margin-top: 3rem;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.profil a {
  border: rgba(241, 241, 241, 0.3) solid 0.1rem;
  padding: 0.5rem;
  background-color: #525e65;
  box-shadow: 0 0.1rem 0.5rem 0.5rem #222733;
}

.profil a:hover {
  color: #0d2437;
}
</style>