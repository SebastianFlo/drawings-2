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

    @Component({
        components: {
            LoginForm,
        },
        methods: {
            login: function(loginData) {
                console.log('login data', loginData);
                const { username, password } = loginData;

                this.$http.post('api/login', { username, password }).then((result: any) => {
                    console.log('Success', result.body);

                    // TODO: Set tokens here
                });
            },
        },
    })
    export default class Login extends Vue { }
</script>