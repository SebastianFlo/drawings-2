<template>
    <div class="drawings">
        <div class="container mb-5">
            <!-- <h1>This is an drawings page</h1> -->
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <wired-progress v-if="!stateDrawings.length"
                    v-bind:value="loading"
                    min="0"
                    max="100"></wired-progress>
                <div v-for="(drawing, index) in stateDrawings"
                    class="mb-1"
                    v-bind:class="{ 'mr-1': (index+1) % itemsPerLine !== 0 }">
                    <div class="col">
                        <Drawing v-bind:data="drawing" />
                    </div>
                    <div class="w-100"
                        v-if="(index+1) % itemsPerLine === 0"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { mapState } from 'vuex';

    import DrawingComponent from '@/components/Drawing.vue';
    import drawingsModule from '@/modules/core/drawings';
    import { Drawing, AppState } from '@/data/types';


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
            if (this.stateDrawings.length) {
                console.log('drawings exist', this.stateDrawings);
                return;
            }

            // this.getDrawings();
            drawingsModule.getItems(this).then(data => {
                this.loading = 99;
                this.$store.commit('addDrawings', data.items);
            });
        },
        mounted: function () {
            const loadingProgress = setInterval(() => {
                this.loading++;
                if (this.loading > 99) {
                    clearInterval(loadingProgress);
                }
            }, 10);
        },
        computed: {
            ...mapState({
                stateDrawings(state: AppState) {
                    return state.drawings;
                },
            }),
        },
    })
    export default class Drawings extends Vue { }
</script>