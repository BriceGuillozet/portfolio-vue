<template>
  <div class="nav">
    <router-link to="/" class="nav__items">Home</router-link>
    <router-link to="/projects" class="nav__items">Projets</router-link>
    <router-link to="/about" class="nav__items">Qui suis-je ?</router-link>
    <a
      href="https://drive.google.com/file/d/1oz7uBJm7CP8I0x5KcNo7Rw83F5S5lJrd/view?usp=sharing"
      class="nav__items"
      >CV</a
    >
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped lang="scss">
.nav {
  z-index: 10;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #525e65;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.1rem 0.5rem 0.5rem #222733;
}

.nav__items {
  height: 100%;
  color: white;
  padding: 1rem;
}

.nav__items:hover {
  color: #0d2437;
  border-bottom: 4px solid #0d2437;
}
</style>