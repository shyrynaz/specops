import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'
import { AuthBrandPanel } from '#/components/auth-brand-panel'

export const Route = createFileRoute('/sign-up')({ component: SignUpPage })

function SignUpPage() {
  return (
    <div className="flex min-h-dvh">
      <AuthBrandPanel />
      <div className="flex min-h-dvh w-full items-center justify-center border-l border-border-default bg-bg-surface px-8 lg:w-1/2">
        <SignUp />
      </div>
    </div>
  )
}
