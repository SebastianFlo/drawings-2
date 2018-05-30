<template>
    <div class="login">
        <form v-on:submit="login">
            <div class="form-group">
                <label for="InputEmail1">Email address</label>
                <input type="text"
                    class="form-control"
                    v-model="InputEmail1"
                    id="InputEmail1"
                    placeholder="Email">
            </div>
            <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password"
                    class="form-control"
                    v-model="InputPassword1"
                    id="InputPassword1"
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
        InputEmail1: string = '';
        InputPassword1: string = '';

        login() {
            this.$emit('login', { email: this.InputEmail1, pass: this.InputPassword1});
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>