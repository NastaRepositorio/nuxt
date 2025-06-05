<template>
  <ThemeSwitcher />
  <div>
    Index
    <UButton @click="authStore.logout()">Logout</UButton>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
</script>

<style>

</style>