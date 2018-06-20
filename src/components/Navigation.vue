<template>
    <div id="nav">
        <router-link to="/"
            class="mr-2">
            <wired-button>Home</wired-button>
        </router-link>
        <router-link to="/drawings"
            class="mr-2">
            <wired-button>Drawings</wired-button>
        </router-link>
        <router-link to="/about"
            class="mr-2">
            <wired-button>About</wired-button>
        </router-link>
        <button v-if="loggedIn"
            v-on:click="logout"
            class="btn btn-default">Logout</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import auth from '@/modules/core/auth';

    @Component({
        methods: {
            logout: function() {
                auth.logout(this);
            },
        },
        computed: {
            loggedIn() {
                if (auth) {
                    console.log('auth.user.authenticated', auth.user.authenticated);
                    return auth.user.authenticated;
                }
            }
        },
    })
    export default class NavigationComponent extends Vue {}
</script>

<style scoped>
</style>