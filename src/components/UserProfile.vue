<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'

const profile = reactive({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    id: '',
})

onMounted(() => {
    const token = localStorage.getItem('token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get('https://dummyjson.com/auth/me')
            .then(response => {
                profile.username = response.data.username
                profile.email = response.data.email
                profile.firstName = response.data.firstName
                profile.lastName = response.data.lastName
                profile.gender = response.data.gender
                profile.image = response.data.image
                profile.id = response.data.id
            })
            .catch(error => {
                console.log(error)
            })
    }
})

function logout() {
    localStorage.removeItem('token')
    window.location.href = '/'
    return
}

</script>

<template>
    <div>
        <h1>User Profile</h1>
        <p>Username: {{ profile.username }}</p>
        <p>Email: {{ profile.email }}</p>
        <p>First Name: {{ profile.firstName }}</p>
        <p>Last Name: {{ profile.lastName }}</p>
        <p>Gender: {{ profile.gender }}</p>
        <p>Image: <img :src="profile.image" alt="User Image"></p>
        <p>Id: {{ profile.id }}</p>
    </div>
    <button class="btn btn-primary" @click="logout">Logout</button>
</template>
