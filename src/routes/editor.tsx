import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { EditorNavbar } from "#/components/editor/editor-navbar"
import { ProjectSidebar } from "#/components/editor/project-sidebar"

export const Route = createFileRoute("/editor")({ component: Editor })

function Editor() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-dvh w-full">
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="h-full pt-14">
        <div className="flex size-full items-center justify-center text-text-copy-muted">
          Canvas
        </div>
      </main>
    </div>
  )
}
