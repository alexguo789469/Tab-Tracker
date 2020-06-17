<template>
    <div>
        <h1>Register</h1>
        <input 
        type="email" 
        name="email"
        placeholder="email"
        v-model="email"
        >
        <input 
        type="password"
        name="password"
        placeholder="password"
        v-model="password">

        <input type="button" value="Register" @click="register">
    </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService"

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async register(){
            var result = await AuthenticationService.register({
                email: this.email,
                password: this.password
            });
            console.log(result.data);
        }
    },
}
</script>

<style>
    
</style>