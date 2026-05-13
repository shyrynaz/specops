We need the base chrome components that frame every editor screen - the top navbar and the left sidebar shell. This will be reused and extended in every chapter that follows.

### Editor navbar

Create `components/editor/editor-navbar.tsx`.

Requirements:

- The navbar should be fixed to the top of the screen.
- left, center, right sections.
- left section contains sidebar toggle button.
- use `PanelLeftOpen` / `PanelLeftClosed` to toggle the sidebar.
- right section stays empty for now.
- dark background with a subtle bottom border.

### Project Sidebar

Create `components/editor/project-sidebar.tsx`.

Requirements:

- sidebar should float above the editor canvas.
- opening the sidebar should not push the editor content aside.
- slide in from the left when opened.
- accept `isOpen` prop to control sidebar visibility.
- header with `Projects` title + close button.
- shadcn `Tabs`:
  - My projects
  - Shared with me
- both tabs should show empty when no projects are available.
- full-width `New Project` button at the bottom with a plus icon.

### Dialog Pattern

- use existing dialog pattern components from shadcn and existing color scheme.

Support:

- title
- description
- footer actions

Do not build actual dialogs yet.

### Check when done

- new components compile without errors.
- not lint errors.
- dialog pattern is ready for future use.
