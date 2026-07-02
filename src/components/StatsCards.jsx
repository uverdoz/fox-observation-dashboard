function StatsCards({ data }) {
    const totalObservations = data.length;

    const uniqueFoxes = new Set(data.map((item) => item.fox_id)).size;

    const uniqueLocations = new Set(
        data.map((item) => item.location)
    ).size;

    const averageSuspicion =
        totalObservations > 0
            ? (
                data.reduce(
                    (sum, item) => sum + item.suspicion_level,
                    0
                ) / totalObservations
            ).toFixed(1)
            : 0;

    const stats = [
        {
            title: "Observations",
            value: totalObservations,
            dot: "bg-emerald-500",
            text: "text-emerald-700",
        },
        {
            title: "Unique Foxes",
            value: uniqueFoxes,
            dot: "bg-orange-500",
            text: "text-orange-700",
        },
        {
            title: "Locations",
            value: uniqueLocations,
            dot: "bg-sky-500",
            text: "text-sky-700",
        },
        {
            title: "Avg Suspicion",
            value: averageSuspicion,
            dot: "bg-red-500",
            text: "text-red-700",
        },
    ];

    return (
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                    <div
                        className={`mb-4 h-3 w-3 rounded-full ${stat.dot}`}
                    ></div>

                    <p className="text-sm font-medium text-gray-500">
                        {stat.title}
                    </p>

                    <p className={`mt-3 text-5xl font-extrabold tracking-tight ${stat.text}`}>
                        {stat.value}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default StatsCards;