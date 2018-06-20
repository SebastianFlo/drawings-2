<template>
    <div class="login">
        <h1>This is the login page</h1>
        <div class="row justify-content-md-center">
            <div class="col-md-2">
                <LoginForm v-on:login="login"></LoginForm>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import LoginFormComponent from '@/components/LoginForm.vue'; // @ is an alias to /src
    import auth from '@/modules/core/auth';

    @Component({
        components: {
            LoginForm: LoginFormComponent,
        },
        methods: {
            login: function(loginData) {
                auth.login(this, loginData);
            },
        },
    })
    export default class Login extends Vue { }
</script>