import { PawPrint, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-9">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

        <div className="flex items-start gap-5">

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl shadow-emerald-500/30">
            <PawPrint
              className="h-8 w-8 text-white"
              strokeWidth={2.2}
            />
          </div>

          <div>

            <h1 className="-mt-2 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-5xl">
              Fox Observation Dashboard
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-14 bg-emerald-500"></div>

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-400">
                Forest Monitoring
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Track fox sightings, analyze activity patterns and monitor forest
              observations through one interactive dashboard.
            </p>

          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>AI-first workspace</span>
        </div>

      </div>
    </header>
  );
}