<template>
  <UCard class="w-full max-w-md">
    <UTabs :items="items" class="w-full">
      <template #login>
        <LoginForm :loading="loading" @update:loading="loading = $event" />
      </template>
      <template #signup>
        <SignupForm :loading="loading" @update:loading="loading = $event" />
      </template>
    </UTabs>
  </UCard>
</template>

<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
  layout: 'auth'
})

const loading = ref<boolean>(false)

const items = ref<TabsItem[]>([
  {
    label: 'Fazer login',
    icon: 'i-lucide-user',
    slot: 'login'
  },
  {
    label: 'Criar conta',
    icon: 'i-lucide-user-plus',
    slot: 'signup'
  }
])
</script>