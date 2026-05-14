Clerk is already installed and connected. Wire it into the the tanstack start app: Provider, auth pages, redirects, route protection and user menu.

## Design

Use the Clerk's `dark` theme from `@clerk/ui/themes` as the base.

Override Clerk appearance variables using the app's existing theme variables. Do not hard code colors

### Sign In and Sign Up pages:

- large screens: simple two panel layout
- left: compact logo, tagline, short text-only feature list
- right: centered clerk form
- small screens: form only
- no gradients
- no oversized hero sections
- no feature cards
- no scroll-heavy layouts

Keep the layout simple, minimal and professional, avoiding scroll-heavy layouts.

## Implementation

- Wrap the app with the Clerk `ClerkProvider` using the app's existing theme variables.
- Create `SignIn` and `SignUp` pages using clerk components.
- Use `start.ts` at the project root

Define public routes using the existing sign-in and sign-up env variables. Protect all other routes using Clerk's route protection.

Update `/`:

- authenticated users redirect to `/editor`
- unauthenticated users redirect to `sign-in` page

Add Clerk's builtin `userButton` to the editor navbar right section for profile settings and logout.
Keep Clerk's default user menu and profile flows intact. Do not customize the user menu or profile settings or any Clerk internal components.

Use existing Clerk env vars. Do not rename, recreate or remove any Clerk env vars.

## Dependencies

- install `@clerk/ui`

## Check When Done

- `start.ts` at the project root
- all routes are protected except `/sign-in` and `/sign-up`
- auth pages use CSS from the app's existing theme no hardcoded colors
- `ClerkProvider` is used to wrap the app with the existing theme variables
- `npm run build` passes
