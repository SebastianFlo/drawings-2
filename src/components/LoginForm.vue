<template>
    <div class="login">
        <form v-on:submit="login">
            <div class="form-group">
                <label for="InputUsername">Username</label>
                <input type="text"
                    class="form-control"
                    required
                    v-model="InputUsername"
                    id="InputUsername"
                    placeholder="Username">
            </div>
            <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password"
                    class="form-control"
                    required
                    v-model="InputPassword"
                    id="InputPassword"
                    placeholder="Password">
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class LoginFormComponent extends Vue {
        InputUsername: string = '';
        InputPassword: string = '';

        login() {
            if (!this.InputUsername || !this.InputUsername) {
                return;
            }
            this.$emit('login', { username: this.InputUsername, password: this.InputPassword});
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>