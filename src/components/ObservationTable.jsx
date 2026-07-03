function ObservationTable({ data }) {
    return (
        <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Fox Observations
            </h2>

            <div className="overflow-hidden rounded-2xl border border-gray-700 shadow-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-900">
                        <thead className="bg-gray-800 text-gray-300">
                            <tr>
                                <th className="px-5 py-4 text-left">Fox ID</th>
                                <th className="px-5 py-4 text-left">Location</th>
                                <th className="px-5 py-4 text-left">Color</th>
                                <th className="px-5 py-4 text-center">Prey</th>
                                <th className="px-5 py-4 text-center">Suspicion</th>
                                <th className="px-5 py-4 text-center">Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data.map((fox) => (
                                    <tr
                                        key={fox.id}
                                        className="border-t border-gray-800 transition-colors duration-200 hover:bg-gray-800/70"
                                    >
                                        <td className="px-5 py-4 font-medium text-white">
                                            {fox.fox_id}
                                        </td>

                                        <td className="px-5 py-4 text-gray-300">
                                            {fox.location}
                                        </td>

                                        <td className="px-5 py-4 text-gray-300">
                                            {fox.color}
                                        </td>

                                        <td className="px-5 py-4 text-center">
                                            {fox.has_prey ? (
                                                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                                                    🦊 With prey
                                                </span>
                                            ) : (
                                                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300">
                                                    No prey
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-5 py-4 text-center">
                                            <span
                                                className={`rounded-full px-3 py-1 text-sm font-semibold ${fox.suspicion_level >= 8
                                                        ? "bg-red-500/15 text-red-400"
                                                        : fox.suspicion_level >= 5
                                                            ? "bg-yellow-500/15 text-yellow-300"
                                                            : "bg-emerald-500/15 text-emerald-400"
                                                    }`}
                                            >
                                                {fox.suspicion_level}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4 text-center text-gray-300">
                                            {fox.time}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="py-10 text-center text-gray-400"
                                    >
                                        No observations found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ObservationTable;