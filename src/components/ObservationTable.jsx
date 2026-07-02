function ObservationTable({ data }) {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-white">
                Fox Observations
            </h2>

            <div className="overflow-x-auto rounded-xl border border-gray-700">
                <table className="min-w-full bg-gray-900">
                    <thead className="bg-gray-800 text-gray-300">
                        <tr>
                            <th className="px-4 py-3 text-left">Fox ID</th>
                            <th className="px-4 py-3 text-left">Location</th>
                            <th className="px-4 py-3 text-left">Color</th>
                            <th className="px-4 py-3 text-center">Prey</th>
                            <th className="px-4 py-3 text-center">
                                Suspicion
                            </th>
                            <th className="px-4 py-3 text-center">Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((fox) => (
                            <tr
                                key={fox.id}
                                className="border-t border-gray-800 hover:bg-gray-800"
                            >
                                <td className="px-4 py-3">
                                    {fox.fox_id}
                                </td>

                                <td className="px-4 py-3">
                                    {fox.location}
                                </td>

                                <td className="px-4 py-3">
                                    {fox.color}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    {fox.has_prey ? "🦊 Yes" : "—"}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    {fox.suspicion_level}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    {fox.time}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ObservationTable;