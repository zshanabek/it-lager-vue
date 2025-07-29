<script setup lang="ts">
const token = localStorage.getItem('token')

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="!token" to="/login">Login</RouterLink>
    <RouterLink to="/me">My Profile</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  background-color: #eee;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

main {
  padding: 16px;
}
</style>