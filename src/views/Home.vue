<template>
    <div class="home">
        <HelloWorld msg="Welcome to Thea's Page" />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6">
                    <Drawing v-bind:disable="true" v-bind:data="latestDrawing"/>
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
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    import { Drawing, AppState } from '@/data/types';

    @Component({
        components: {
            HelloWorld,
            Drawing: DrawingComponent
        },
        created: function () {
            if (this.latestDrawing) {
                console.log('drawing exists', this.drawings);
                return;
            }

            drawingsModule.getItems(this).then(data => {
                this.$store.commit('addDrawings', data.items);
            });
        },
        computed: {
            ...mapState({
                latestDrawing(state: AppState) {
                    return state.drawings[state.drawings.length - 1];
                },
            }),
        }
    })
    export default class Home extends Vue { }
</script>