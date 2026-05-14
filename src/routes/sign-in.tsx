import { AuthBrandPanel } from "#/components/auth-brand-panel";
import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({ component: SignInPage });

function SignInPage() {
  return (
    <div className="flex min-h-dvh">
      <AuthBrandPanel />
      <div className="flex min-h-dvh w-full items-center justify-center border-l border-border-default bg-bg-surface px-8 lg:w-1/2">
        <SignIn />
      </div>
    </div>
  );
}
