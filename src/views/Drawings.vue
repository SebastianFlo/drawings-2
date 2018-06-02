<template>
    <div class="drawings">
        <div class="container mb-5">
            <!-- <h1>This is an drawings page</h1> -->
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div v-for="(drawing, index) in drawings" class="mb-1" v-bind:class="{ 'mr-1': (index+1) % itemsPerLine !== 0 }">
                    <div class="col">
                        <Drawing v-bind:data="drawing"/>
                    </div>
                    <div class="w-100" v-if="(index+1) % itemsPerLine === 0"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue } from 'vue-property-decorator';
    import DrawingComponent from '@/components/Drawing.vue';
    import drawings from '@/modules/core/drawings';

    @Component({
        components: {
            Drawing: DrawingComponent,
        },
        data: function () {
            return {
                drawings: [],
                itemsPerLine: 3
            }
        },
        created: function () {
            // get items here
            const path = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b218c122086061.5630c614c32fa.jpg';
            // const mockData = [1, 2, 3, 4];
            drawings.getItems(this).then(data => {
                this.drawings = data.items.map(data => ({ id: data, path }))
            })
        },
    })
    export default class Drawings extends Vue {}
</script>
