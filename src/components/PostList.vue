<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";

const posts = ref([])

onMounted(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        return
    }
    const decodedToken = jwtDecode(token)
    const id = decodedToken.id
    axios.get(`https://dummyjson.com/posts/user/${id}`).then((res) => {
        posts.value = res.data.posts
    })
})
</script>
<template>
    <h1>Posts</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <a :href="post.url">{{ post.title }}</a>
        </li>
    </ul>
</template>