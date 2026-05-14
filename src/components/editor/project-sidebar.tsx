"use client"

import { X, Plus } from "lucide-react"
import { Button } from "#/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs"
import { cn } from "#/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyProjects() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-sm text-text-copy-muted">No projects yet</p>
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/30 cursor-default"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-80 flex-col border-r border-border-default bg-bg-elevated transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border-default px-4 h-14">
          <h2 className="text-sm font-semibold text-text-copy-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col">
          <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
            <div className="px-4 pt-3">
              <TabsList className="w-full">
                <TabsTrigger value="my-projects" className="flex-1">
                  My projects
                </TabsTrigger>
                <TabsTrigger value="shared" className="flex-1">
                  Shared with me
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="my-projects" className="flex flex-1 flex-col">
              <EmptyProjects />
            </TabsContent>
            <TabsContent value="shared" className="flex flex-1 flex-col">
              <EmptyProjects />
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border-default p-4">
          <Button className="w-full gap-2">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}
