import { PawPrint, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <PawPrint className="h-7 w-7" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-500">
              Forest Monitoring
            </p>

            <h1 className="mt-2 text-5xl font-bold tracking-tight text-white">
              Fox Observation Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
              Track fox sightings, analyze patterns, and manage field observations
              from a single workspace.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          <Sparkles className="h-4 w-4" />
          AI-first workspace
        </div>
      </div>
    </header>
  );
}