<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__prev" @click.prevent="prev"> </button>
        <button class="carousel__nav carousel__next" @click.prevent="next"> </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: [],
            direction: null
        };
    },
    mounted() {
        this.slides = this.$children;
        this.slides.forEach((slide, i) => {
            slide.index = i;
        });
    },
    computed: {
        slidesCount () { return this.slides.length }
    },
    methods: {
        next () {
            this.index++;
            this.direction = "left";
            if (this.index >= this.slidesCount) {
                this.index = 0; 
            }
        },
        prev () {
            this.index--;
            this.direction = "right";
            if (this.index < 0) {
                this.index = this.slidesCount - 1; 
            }
        }
    }
};
</script>

<style scoped lang="scss">
    .carousel {
        position: relative;
    }

    .carousel__nav {
        position: absolute;
        left: -1em;
        background: url(prev.png);
        background-position: center;
        background-size: cover;
        width: 5vw;
        height: 5vw;
        border: none;
    }

    .carousel__nav.carousel__next {
        right: -1em;
        left: auto;
        background: url(next.png);
        background-position: center;
        background-size: cover;
    }
</style>