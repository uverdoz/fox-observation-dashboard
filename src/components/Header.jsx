import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400"></div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Forest Monitoring
            </span>
          </div>

          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Fox Observation Dashboard
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Track fox sightings, analyze activity patterns and manage wildlife
            observations from one intuitive dashboard.
          </p>

        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          <Sparkles className="h-4 w-4" />
          AI-first workspace
        </div>

      </div>
    </header>
  );
}