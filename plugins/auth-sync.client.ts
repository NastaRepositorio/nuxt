import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  const user = useSupabaseUser()
  const router = useRouter()

  if (user.value) {
    authStore.setUser(user.value.user_metadata)
    if (router.currentRoute.value.path === '/login') {
      // Por algum motivo, o navigateTo não está funcionando corretamente, então estamos usando setTimeout
      // TODO: Encontrar uma solução melhor para isso
      // nextTick não funciona, async não funciona, setTimeout funciona
      setTimeout(() => {
        navigateTo('/')
      }, 5)
    }
  } else {
    authStore.clearUser()
  }
})
