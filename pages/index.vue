<template>
  Seja bem-vindo, {{ authStore.user?.user_metadata.first_name || 'User' }}
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
</script>