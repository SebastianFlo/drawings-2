<template>
    <div class="drawings">
        <h1>This is an drawings page</h1>
        <Drawing v-bind:path="path"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue } from 'vue-property-decorator';
    import DrawingComponent from '@/components/Drawing.vue';

    @Component({
        components: {
                    Drawing: DrawingComponent,
        },
        data: function () {
            return {
                path: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b218c122086061.5630c614c32fa.jpg'
            }
        },
    })
    export default class Drawings extends Vue {}
</script>
