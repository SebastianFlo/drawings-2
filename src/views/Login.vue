<template>
    <div class="login">
        <h1>This is the login page</h1>
        <div class="row">
            <div class="col-md-2 col-md-offset-5">
                <LoginForm v-on:login="login"></LoginForm>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import LoginForm from '@/components/LoginForm.vue'; // @ is an alias to /src
    import auth from '@/modules/core/auth';

    @Component({
        components: {
            LoginForm,
        },
        methods: {
            login: function(loginData) {
                auth.login(this, loginData);
                // this.$http.post('api/login', { username, password }).then((result) => {
                //     console.log('Success', result.body);
                //     const { access_token, refresh_token } = result.body;
                //     localStorage.setItem('access_token', access_token);
                //     localStorage.setItem('refresh_token', refresh_token);
                // });
            },
        },
    })
    export default class Login extends Vue { }
</script>