<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/me">My Profile</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>
