import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  const user = useSupabaseUser()
  const router = useRouter()

  watch(user, async (newUser) => {
    if (newUser) {
      authStore.setUser(newUser)

      if (router.currentRoute.value.path === '/login') {
        await nextTick()
        router.push('/')
      }
    } else {
      authStore.clearUser()
    }
  }, { immediate: true })
})
