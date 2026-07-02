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
            color: "bg-emerald-500",
        },
        {
            title: "Unique Foxes",
            value: uniqueFoxes,
            color: "bg-orange-500",
        },
        {
            title: "Locations",
            value: uniqueLocations,
            color: "bg-sky-500",
        },
        {
            title: "Avg Suspicion",
            value: averageSuspicion,
            color: "bg-red-500",
        },
    ];

    return (
        <section className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="rounded-xl bg-white shadow-md p-6 border"
                >
                    <div
                        className={`w-3 h-3 rounded-full mb-3 ${stat.color}`}
                    ></div>

                    <p className="text-sm text-gray-500">
                        {stat.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {stat.value}
                    </h2>
                </div>
            ))}
        </section>
    );
}

export default StatsCards;