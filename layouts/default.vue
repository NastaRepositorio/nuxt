<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Mobile overlay -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-40 lg:hidden" @click="sidebarOpen = false">
      <div class="fixed inset-0 bg-opacity-75 bg-muted"></div>
    </div>

    <div class="flex h-screen">
      <!-- Sidebar -->
      <div
        class="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-muted"
        :class="[sidebarOpen ? 'translate-x-0' : '-translate-x-full']">
        <!-- Sidebar header -->
        <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <UIcon name="i-heroicons-server" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">InfraPanel</span>
          </div>
          <UButton variant="ghost" color="neutral" size="sm" @click="sidebarOpen = false" class="lg:hidden">
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </UButton>
        </div>

        <!-- Navigation -->
        <nav class="mt-4 px-4">
          <div class="space-y-2">
            <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to"
              class="flex items-center p-2 text-sm font-medium rounded-lg transition-colors group" :class="[
                isActiveRoute(item.to)
                  ? 'bg-primary/10 text-primary'
                  : 'text-toned hover:bg-elevated'
              ]" @click="sidebarOpen = false">
              <UIcon :name="item.icon" class="w-5 h-5 mr-3" :class="[
                isActiveRoute(item.to)
                  ? 'text-primary'
                  : 'text-toned group-hover:text-toned'
              ]" />
              {{ item.label }}
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- Main content -->
      <div class="flex-1">
        <!-- Header -->
        <header class="border-b border-muted">
          <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div class="flex items-center">
              <UButton variant="ghost" color="neutral" size="sm" @click="sidebarOpen = true" class="lg:hidden mr-3">
                <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
              </UButton>

              <div class="flex items-center space-x-4">
                <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ currentPageTitle }}
                </h1>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <!-- Theme toggle -->
              <UButton variant="ghost" color="neutral" @click="toggleColorMode">
                <UIcon :name="$colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="w-5 h-5" />
              </UButton>

              <!-- User menu -->
              <UDropdownMenu :items="userMenuItems" :content="{
                  align: 'start',
                  side: 'bottom',
                  sideOffset: 8
                }" :ui="{
                  content: 'w-48'
                }">
                <div class="flex items-center space-x-2 cursor-pointer">
                  <UAvatar
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                    alt="User"
                    size="sm"
                  />
                  <div class="flex flex-col">
                    <span class="text-sm font-medium">Olá, {{ authStore.user?.user_metadata.first_name || 'User' }}</span>
                  </div>
                </div>
              </UDropdownMenu>
            </div>
          </div>
        </header>

        <!-- Page content -->
        <main class="p-4 sm:p-6 lg:p-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const route = useRoute()

const { $colorMode } = useNuxtApp()

// Sidebar state
const sidebarOpen = ref(false)

// Navigation items
const navigation = [
  { label: 'Dashboard', to: '/', icon: 'i-heroicons-home' },
]

const userMenuItems = ref<DropdownMenuItem[]>([
  {
    label: 'Perfil',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Logout',
    icon: 'i-heroicons-arrow-right-on-rectangle',
    onSelect: () => {
      authStore.logout()
    }
  }
])

// Computed properties
const currentPageTitle = computed(() => {
  const currentNav = navigation.find(item => item.to === route.path)
  return currentNav?.label || 'Dashboard'
})

// Methods
const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleColorMode = () => {
  $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
}

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  sidebarOpen.value = false
})
</script>