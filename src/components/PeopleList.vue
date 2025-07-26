<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import '../assets/empty-state.css'
  import LoadingSpinner from './icons/LoadingSpinner.vue'

  const people = ref([])
  const isLoading = ref(true)

  onMounted(() => {
    axios.get('https://dummyjson.com/users')
    .then((data) => {
      people.value = data.data.users
      isLoading.value = false
    });
  })
</script>

<template>
 <h1>Students</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
      </tr>
    </thead>
    <tbody>
       <tr v-if="isLoading">
        <td :colspan="3" class="center-cell">
          <LoadingSpinner class="spinner" />
        </td>
      </tr>
      <tr v-else-if="people.length === 0">
        <td :colspan="3" class="center-cell">No data available.</td>
      </tr>
      <tr v-else v-for="person in people" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.firstName }}</td>
        <td>{{ person.lastName }}</td>
      </tr>
    </tbody>
  </table>
</template>