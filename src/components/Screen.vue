<template>
    <div class="name">
        <div class="name__top">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </div>

        <div class="name__screen">
            <div class="typewriter">
                <h1 class="name__full">> Brice Guillozet</h1>
            </div>
            <h2 class="name__title">&lt; Développeur Web /&gt;</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Screen",
};
</script>

<style scoped lang="scss">
h1 {
    font-size: 6em;
    font-weight: bold;
}

h2 {
    font-size: 3em;
    font-style: italic;
}

.name {
    padding-top: 5rem;
    min-width: 70vw;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name__top {
    background-color: #f1f1f1;
    width: 100%;
    height: 2.5rem;
    border-radius: 1rem 1rem 0 0;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
}

.icon {
    width: 1rem;
    height: 1rem;
    border-radius: 5rem;
    margin-left: 0.5rem;
    background-color: #bbb;
}

.name__screen {
    background-color: #222733;
    color: white;
    width: 100%;
    height: 100%;
    border: #f1f1f1 solid 0.2rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem 0rem 1rem;
}

.typewriter h1 {
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.01em solid white; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0em auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.3em; /* Adjust as needed */
    animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: white;
    }
}
</style>
