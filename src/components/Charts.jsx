import {
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

function Charts({ data }) {
    const locationData = Object.entries(
        data.reduce((acc, item) => {
            acc[item.location] = (acc[item.location] || 0) + 1;
            return acc;
        }, {})
    ).map(([location, count]) => ({
        location,
        count,
    }));

    const preyData = [
        {
            name: "With prey",
            value: data.filter((fox) => fox.has_prey).length,
        },
        {
            name: "No prey",
            value: data.filter((fox) => !fox.has_prey).length,
        },
    ];

    const colors = ["#10b981", "#ef4444"];

    return (
        <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Analytics
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                    <h3 className="mb-4 text-lg font-semibold text-white">
                        Observations by Location
                    </h3>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={locationData}
                                margin={{
                                    top: 10,
                                    right: 10,
                                    left: -20,
                                    bottom: 45,
                                }}
                            >
                                <CartesianGrid stroke="#374151" />

                                <XAxis
                                    dataKey="location"
                                    stroke="#9ca3af"
                                    interval={0}
                                    angle={-15}
                                    textAnchor="end"
                                    tick={{ fontSize: 11 }}
                                />

                                <YAxis
                                    stroke="#9ca3af"
                                    allowDecimals={false}
                                />

                                <Tooltip
                                    cursor={false}
                                    contentStyle={{
                                        background: "#111827",
                                        border:
                                            "1px solid #374151",
                                        borderRadius: 8,
                                    }}
                                />

                                <Bar
                                    dataKey="count"
                                    fill="#10b981"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                    <h3 className="mb-4 text-lg font-semibold text-white">
                        Prey Distribution
                    </h3>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={preyData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={82}
                                    label={({
                                        cx,
                                        cy,
                                        midAngle,
                                        innerRadius,
                                        outerRadius,
                                        percent,
                                    }) => {
                                        const RADIAN =
                                            Math.PI / 180;

                                        const radius =
                                            innerRadius +
                                            (outerRadius -
                                                innerRadius) *
                                            0.65;

                                        const x =
                                            cx +
                                            radius *
                                            Math.cos(
                                                -midAngle *
                                                RADIAN
                                            );

                                        const y =
                                            cy +
                                            radius *
                                            Math.sin(
                                                -midAngle *
                                                RADIAN
                                            );

                                        return (
                                            <text
                                                x={x}
                                                y={y}
                                                fill="white"
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                fontSize={16}
                                                fontWeight="700"
                                            >
                                                {Math.round(
                                                    percent * 100
                                                )}
                                                %
                                            </text>
                                        );
                                    }}
                                    labelLine={false}
                                >
                                    {preyData.map(
                                        (entry, index) => (
                                            <Cell
                                                key={entry.name}
                                                fill={
                                                    colors[index]
                                                }
                                            />
                                        )
                                    )}
                                </Pie>

                                <Tooltip
                                    contentStyle={{
                                        background: "#111827",
                                        border:
                                            "1px solid #374151",
                                        borderRadius: 8,
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Charts;