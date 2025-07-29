<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import LoadingSpinner from './icons/LoadingSpinner.vue'

const posts = ref([])
const isLoading = ref(true)
onMounted(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        return
    }
    const decodedToken = jwtDecode(token)
    const id = decodedToken.id
    axios.get(`https://dummyjson.com/posts/user/${id}`).then((res) => {
        posts.value = res.data.posts
        isLoading.value = false
    })
})
</script>
<template>
    <h1>Posts</h1>
    <div v-if="isLoading">
        <LoadingSpinner class="spinner" />
    </div>
    <ul v-else>
        <li v-for="post in posts" :key="post.id">
            <a :href="post.url">{{ post.title }}</a>
        </li>
    </ul>
</template>
