<script setup lang="ts">
import { ref } from 'vue'
import axios from "axios"
import router from '../router'

const username = ref('')
const password = ref('')


function login(e) {
    e.preventDefault()
    axios.post('https://dummyjson.com/auth/login', {
        username: username.value,
        password: password.value
    })
        .then(response => {
            localStorage.setItem('token', response.data.accessToken)
            router.push('/me')
        })
        .catch(error => {
            console.log(error)
        })
}


</script>

<template>
    <div>
        <h1>Login</h1>
        <form>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="formGroupExampleInput"
                    placeholder="Enter username">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="formGroupExampleInput2"
                    placeholder="Enter password">
            </div>
            <button class="btn btn-primary" @click="login" type="submit">Login</button>
            <p>Don't have an account? <a href="#">Register</a></p>
        </form>
    </div>
</template>
