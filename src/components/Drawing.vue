<template>
    <div class="drawing">
        <div class="image">
            <img v-bind:src="data ? data.url : ''"
                class="img-fluid rounded"
                alt="Responsive image">
            <div v-if="editable" class="edit">
                    <button>Edit</button>
                </div>
            <div v-else class="overlay" v-on:click="disable ? undefined : showModal = true">
                <div class="text">{{ data ? data.description : '' }} {{ disable }} Test</div>

            </div>
        </div>

        <!-- Modal -->
        <div class="modal"
            v-bind:style="{ display: showModal ? 'block' : 'none' }"
            tabindex="-1"
            role="dialog">
            <div class="modal-dialog modal-dialog-centered"
                role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ data ? data.description : '' }}</h5>
                        <button type="button"
                            class="close"
                            v-on:click="showModal = false"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img v-bind:src="data ? data.url : ''"
                            class="img-fluid rounded"
                            alt="Responsive image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        props: ['data', 'editable']
    })
    export default class DrawingComponent extends Vue {
        @Prop() data;
        @Prop() editable;
        @Prop() disable;
        isEditable = this.editable;
        zoomDisabled = this.disable;
        showModal = false;

        // computed
        get computeEditable () {
            console.log('editable', this.isEditable);
            console.log('zoomDisabled', this.disable);
            return 'computed ' + this.isEditable;
        }

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
        opacity: 0;
    }

    .image button {
        cursor: pointer;
    }

    .image:hover .overlay {
        opacity: 1;
    }

    .image:hover .edit {
        opacity: 1;
    }
</style>