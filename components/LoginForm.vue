<template>
  <UForm :schema="loginSchema" :state="loginForm" class="w-full space-y-4" @submit="handleLogin">
    <UFormField label="Email" name="email">
      <UInput v-model="loginForm.email" class="w-full" placeholder="exemplo@email.com" />
    </UFormField>

    <UFormField label="Senha" name="password">
      <UInput v-model="loginForm.password" type="password" class="w-full" placeholder="********" />
    </UFormField>

    <UButton type="submit" :loading="props.loading">Entrar</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import { z } from 'zod/v4'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const toast = useToast()

const emit = defineEmits<{
  (e: 'update:loading', loading: boolean): void
}>()

const props = defineProps<{
  loading: boolean
}>()

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
})

type LoginSchema = z.infer<typeof loginSchema>

const loginForm = reactive<Partial<LoginSchema>>({
  email: '',
  password: ''
})

const handleLogin = async () => {
  emit('update:loading', true)

  try {
    await authStore.login(loginForm.email as string, loginForm.password as string)
    toast.add({
      title: 'Login realizado com sucesso!',
      description: 'Seja bem-vindo de volta!',
      color: 'success'
    })
    navigateTo('/')
  } catch (error) {
    toast.add({
      title: 'Erro ao fazer login',
      description: 'Verifique suas credenciais e tente novamente.',
      color: 'error'
    })
  } finally {
    emit('update:loading', false)
  }
}
</script>

<style>

</style>