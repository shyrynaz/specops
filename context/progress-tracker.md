# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Auth: Clerk integration — provider, auth pages, route protection, user menu

## Current Goal

- Wire Clerk into the TanStack Start app: provider wrapping, sign-in/sign-up pages, route guards, authenticated redirects, and user button in the editor navbar.

## Completed

- Design system setup: Tailwind v4 theme in `styles.css`, shadcn/ui init, 9 primitives added (Button, Input, Select, Card, TextArea, ScrollArea, Tabs, Dialog, Drawer), `cn()` utility in `lib/utils.ts`, `lucide-react` and Radix deps installed.
- Editor navbar (`components/editor/editor-navbar.tsx`) — fixed top bar with sidebar toggle button, three-section layout, dark background with bottom border.
- Project sidebar (`components/editor/project-sidebar.tsx`) — floating left overlay with slide animation, `isOpen`/`onClose` props, projects header with close button, "My projects" / "Shared with me" tabs with empty states, full-width "New Project" button.
- Dialog pattern verified ready in `components/ui/dialog.tsx` (title, description, footer support).
- Clerk auth integration:
  - Installed `@clerk/ui` dependency.
  - `start.ts` at project root — already configured with `clerkMiddleware()`.
  - `__root.tsx` — wrapped app with `<ClerkProvider>`, Clerk's `dark` theme from `@clerk/ui/themes`, appearance variables mapped to existing CSS custom properties (no hardcoded colors).
  - `lib/auth.ts` — shared `requireAuth` server function using `auth()` for `beforeLoad` guards.
  - `routes/index.tsx` — redirects authenticated users to `/editor`, unauthenticated to `/sign-in`.
  - `routes/sign-in.tsx` — two-panel layout: left panel with logo/tagline/feature list (hidden on small screens), right panel with centered `<SignIn />`.
  - `routes/sign-up.tsx` — same two-panel layout with `<SignUp />`.
  - `routes/editor.tsx` — `beforeLoad` auth guard redirects to `/sign-in` if unauthenticated.
  - `components/editor/editor-navbar.tsx` — added `<UserButton />` in the right section for profile/settings/logout.

## In Progress

- Build verification.

## Next Up

- Wire editor route into the app's primary layout — add a link or redirect from the index route and navigate to `/editor`.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Auth uses Clerk's `dark` theme from `@clerk/ui/themes` as the base, with appearance variables overridden via CSS custom properties from `styles.css`.
- Route protection uses the `beforeLoad` pattern with `createServerFn` + `auth()` — one shared `requireAuth` function reused across protected routes.
- Public routes are `/sign-in` and `/sign-up`. All other routes are protected by default.

## Session Notes

- Add context needed to resume work in the next session.
