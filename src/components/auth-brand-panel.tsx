import { BrainCircuit, Hexagon, Share2, FileText } from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: 'AI Architecture Generation',
    description:
      'Describe your system, AI maps it to nodes and edges on a live canvas.',
  },
  {
    icon: Share2,
    title: 'Real-time Collaboration',
    description:
      'Live cursors, presence indicators, and shared node editing across your team.',
  },
  {
    icon: FileText,
    title: 'Instant Spec Generation',
    description:
      'Export a complete Markdown technical spec directly from the canvas graph.',
  },
]

export function AuthBrandPanel() {
  return (
    <div className="hidden w-1/2 flex-col bg-bg-base lg:flex">
      <div className="flex items-center gap-2.5 px-10 py-8">
        <span className="flex size-8 items-center justify-center rounded-lg bg-text-brand">
          <Hexagon className="size-4 text-bg-base" strokeWidth={2.5} />
        </span>
        <span className="text-sm font-semibold text-text-copy-primary">
          specops
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-10 px-10 pb-16">
        <div>
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-text-copy-primary">
            Design systems at the
            <br />
            speed of thought.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-copy-muted">
            Describe your architecture in plain English. specops maps it to a
            shared canvas your whole team can refine in real time.
          </p>
        </div>

        <ul className="space-y-6">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-bg-subtle">
                <f.icon className="size-5 text-text-brand" />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-copy-primary">
                  {f.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-text-copy-muted">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
