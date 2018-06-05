<template>
    <div class="drawings">
        <div class="container mb-5">
            <!-- <h1>This is an drawings page</h1> -->
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <wired-progress v-if="!drawings.length" v-bind:value="loading" min="0" max="100"></wired-progress>
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
                itemsPerLine: 3,
                loading: 0
            }
        },
        created: function () {
            drawings.getItems(this).then(data => {
                this.loading = 99;
                this.drawings = data.items;
            })
        },
        mounted: function () {
            const loadingProgress = setInterval(() => {
                this.loading++;
                if (this.loading > 99) {
                    clearInterval(loadingProgress);
                }
            }, 10);
        },
    })
    export default class Drawings extends Vue {}
</script>
