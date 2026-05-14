import { ClerkProvider } from "@clerk/tanstack-react-start";
import { dark } from "@clerk/ui/themes";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "specops" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: 'var(--accent-primary)',
              colorBackground: 'var(--bg-elevated)',
              colorInputBackground: 'var(--bg-subtle)',
              colorInputText: 'var(--text-primary)',
              colorText: 'var(--text-primary)',
              colorTextSecondary: 'var(--text-secondary)',
              colorNeutral: 'var(--text-primary)',
              colorDanger: 'var(--state-error)',
              colorSuccess: 'var(--state-success)',
              colorWarning: 'var(--state-warning)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-geist-sans)',
            },
          }}
        >
          {children}
        </ClerkProvider>
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
