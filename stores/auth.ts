import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const user = ref<User['user_metadata'] | null>(null)

  const setUser = async (newUser: User['user_metadata'] | null) => {
    user.value = newUser
  }

  function clearUser() {
    user.value = null
    if (router.currentRoute.value.path !== '/login') {
      router.push('/login')
    }
  }

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    setUser(data.user.user_metadata)
  }

  const signup = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    })

    if (error) throw error
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    clearUser()
  }

  return {
    user,
    setUser,
    clearUser,
    login,
    signup,
    logout
  }
})
