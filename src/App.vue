<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
    name: 'Home',
    components: {
        Nav
    }
};
</script>


<style lang="scss">
#app {
  font-family: "Roboto Mono", monospace;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#2e3445, #222733);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
