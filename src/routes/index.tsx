import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@clerk/tanstack-react-start/server'

const getAuthState = createServerFn().handler(async () => {
  const authState = await auth()
  return { isAuthenticated: authState?.isAuthenticated ?? false }
})

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const { isAuthenticated } = await getAuthState()
    if (isAuthenticated) {
      throw redirect({ to: '/editor' })
    }
    throw redirect({ to: '/sign-in' })
  },
})
