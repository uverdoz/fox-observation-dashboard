import { Bot, CheckCircle2 } from "lucide-react";

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
        <section className="mt-10 rounded-xl border border-gray-700 bg-gray-900 p-6">
            <div className="mb-6 flex items-center gap-3">
                <Bot className="h-7 w-7 text-violet-400" />
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        AI Worklog
                    </h2>
                    <p className="text-sm text-gray-400">
                        Summary of how AI was used during development.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {steps.map((step) => (
                    <div
                        key={step.title}
                        className="rounded-xl border border-gray-700 bg-gray-800 p-5 transition hover:border-emerald-500"
                    >
                        <div className="mb-3 flex items-center gap-2">
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