import { Bot, CheckCircle2, Sparkles } from "lucide-react";

function AIWorklog() {
    const steps = [
        {
            title: "Planning",
            description:
                "Used AI to define the dashboard structure and choose the overall layout.",
        },
        {
            title: "Architecture",
            description:
                "Split the application into reusable React components (Header, StatsCards, Filters, Table and Charts).",
        },
        {
            title: "Implementation",
            description:
                "Implemented search, location filtering and prey status filtering. Connected all filters to statistics, charts and the observation table.",
        },
        {
            title: "UI Improvements",
            description:
                "Refined spacing, typography, colors, chart layout and overall responsiveness after reviewing the interface.",
        },
        {
            title: "Debugging",
            description:
                "Fixed component props, synchronized filtered data across the application and handled empty states correctly.",
        },
        {
            title: "Validation",
            description:
                "Tested different filter combinations, verified calculations, created a production build and deployed the project to GitHub and Vercel.",
        },
    ];

    return (
        <section className="mt-10 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-lg">
            <div className="border-b border-gray-700 bg-gradient-to-r from-violet-500/10 to-emerald-500/10 p-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15">
                        <Bot className="h-6 w-6 text-violet-400" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            AI Worklog
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Summary of how AI was used throughout the development process.
                        </p>
                    </div>

                    <div className="ml-auto hidden items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 md:flex">
                        <Sparkles className="h-3.5 w-3.5" />
                        AI-assisted
                    </div>
                </div>
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-2">
                {steps.map((step) => (
                    <div
                        key={step.title}
                        className="rounded-xl border border-gray-700 bg-gray-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
                    >
                        <div className="mb-3 flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                            <h3 className="font-semibold text-white">
                                {step.title}
                            </h3>
                        </div>

                        <p className="text-sm leading-6 text-gray-300">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AIWorklog;