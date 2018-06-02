<template>
  <div class="admin">
    <h1>This is the admin page</h1>
        <button v-on:click="logout" class="btn btn-default">Logout</button>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import auth from '@/modules/core/auth';

    @Component({
        methods: {
            logout: function() {
                auth.logout(this);
            },
        },
    })
    export default class Admin extends Vue { }
</script>