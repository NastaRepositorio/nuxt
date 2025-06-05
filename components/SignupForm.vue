<template>
  <template v-if="showMessage">
    <UAlert
      title="Conta criada com sucesso!"
      description="Verifique seu email para confirmar sua conta"
      type="info"
      icon="i-lucide-mail-check" class="my-4"
    />
  </template>

  <UForm :schema="signupSchema" :state="signupForm" class="w-full space-y-4" @submit="onSubmit">
    <UFormField label="Nome" name="name">
      <UInput v-model="signupForm.name" class="w-full" />
    </UFormField>

    <UFormField label="Email" name="email">
      <UInput v-model="signupForm.email" class="w-full" />
    </UFormField>

    <UFormField label="Senha" name="password">
      <UInput v-model="signupForm.password" type="password" class="w-full" />
    </UFormField>

    <UFormField label="Confirmar senha" name="passwordConfirmation">
      <UInput v-model="signupForm.passwordConfirmation" type="password" class="w-full" />
    </UFormField>

    <UButton type="submit" :loading="props.loading">Criar conta</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import { z } from 'zod/v4'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const toast = useToast()

const showMessage = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'update:loading', loading: boolean): void
}>()

const props = defineProps<{
  loading: boolean
}>()

const signupSchema = z
  .object({
    name: z.string().min(1, 'Nome obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    passwordConfirmation: z.string().min(8, 'A confirmação deve ter no mínimo 8 caracteres')
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirmation']
  })

type SignupSchema = z.infer<typeof signupSchema>

const signupForm = reactive<Partial<SignupSchema>>({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: ''
})

const onSubmit = async () => {
  emit('update:loading', true)

  try {
    await authStore.signup(signupForm.email as string, signupForm.password as string, signupForm.name as string)
    toast.add({
      title: 'Conta criada com sucesso!',
      description: 'Verifique seu email para confirmar sua conta',
      color: 'success'
    })
    showMessage.value = true
  } catch (error) {
    toast.add({
      title: 'Erro ao criar conta',
      description: (error as Error).message,
      color: 'error'
    })
  } finally {
    emit('update:loading', false)
  }
}
</script>

<style>

</style>