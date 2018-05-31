<template>
    <div class="login">
        <form v-on:submit="login">
            <div class="form-group">
                <label for="InputUsername">Username</label>
                <input type="text"
                    class="form-control"
                    v-model="InputUsername"
                    id="InputUsername"
                    placeholder="Username">
            </div>
            <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password"
                    class="form-control"
                    v-model="InputPassword"
                    id="InputPassword"
                    placeholder="Password">
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

    @Component
    export default class LoginForm extends Vue {
        InputUsername: string = '';
        InputPassword: string = '';

        login() {
            this.$emit('login', { username: this.InputUsername, password: this.InputPassword});
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>