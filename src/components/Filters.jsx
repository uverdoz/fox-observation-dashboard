import { foxData } from "../foxData";

function Filters({
    search,
    setSearch,
    location,
    setLocation,
    fox,
    setFox,
}) {
    const locations = [...new Set(foxData.map((fox) => fox.location))];

    return (
        <section className="my-8 rounded-xl border border-gray-700 bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Filters
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
                <input
                    type="text"
                    placeholder="Search Fox ID..."
                    className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white outline-none focus:border-emerald-500"
                />

                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option>All Locations</option>

                    {locations.map((location) => (
                        <option key={location}>
                            {location}
                        </option>
                    ))}
                </select>

                <select
                    value={fox}
                    onChange={(e) => setFox(e.target.value)}
                >
                    <option>All Foxes</option>
                    <option>Only With Prey</option>
                    <option>Only Without Prey</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;