<template>
    <div class="drawing">
        This is a drawing
        <img v-bind:src="path" class="img-fluid rounded" alt="Responsive image">
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DrawingComponent extends Vue {
        @Prop() path: string;
    }
</script>

<style scoped>
    .drawing img {
        height: 500px;
    }
</style>