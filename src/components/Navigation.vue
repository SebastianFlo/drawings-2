<template>
        <div id="nav">
            <router-link to="/" class="mr-2">
                <wired-button>Home</wired-button>
            </router-link>
            <router-link to="/drawings" class="mr-2">
                <wired-button>Drawings</wired-button>
            </router-link>
            <router-link to="/about" class="mr-2">
                <wired-button>About</wired-button>
            </router-link>
            <button v-if="" v-on:click="logout" class="btn btn-default">Logout</button>
        </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DrawingComponent extends Vue {
        @Prop() data;
        @Prop() editable;

        showModal = false;
    }
</script>

<style scoped>
    .image img {
        display: block;
        /* max-width: 300px; */
        width: auto;
        height: auto;
    }

    .image .overlay {
        display: block;
        /* max-width: 300px; */
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 15px;
        right: 15px;
        opacity: 0;
        transition: .5s ease;
        background-color: rgba(93, 93, 93, 0.7);
    }

    .image .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    .image .edit {
        position: absolute;
        top: 5%;
        right: 5%;
        text-align: center;
    }

    .image:hover .overlay {
        opacity: 1;
    }
</style>