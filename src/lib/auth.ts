import { createServerFn } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'
import { auth } from '@clerk/tanstack-react-start/server'

export const requireAuth = createServerFn().handler(async () => {
  const { isAuthenticated, userId } = await auth()
  if (!isAuthenticated) {
    throw redirect({ to: '/sign-in' })
  }
  return { userId }
})
