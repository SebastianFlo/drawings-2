<template>
    <div class="login">
        <form>
            <div class="form-group">
                <label for="InputEmail1">Email address</label>
                <input type="email"
                    class="form-control"
                    id="InputEmail1"
                    placeholder="Email">
            </div>
            <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password"
                    class="form-control"
                    id="InputPassword1"
                    placeholder="Password">
            </div>

            <button type="submit"
                class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class LoginForm extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>