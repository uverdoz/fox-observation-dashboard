import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import Filters from "./components/Filters";
import ObservationTable from "./components/ObservationTable";
import Charts from "./components/Charts";
import AIWorklog from "./components/AIWorklog";

import { foxData } from "./foxData";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [fox, setFox] = useState("All Foxes");

  const filteredData = foxData.filter((item) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      item.fox_id.toLowerCase().includes(query) ||
      item.fox_id.replace("fox_", "").includes(query);

    const matchesLocation =
      location === "All Locations" ||
      item.location === location;

    const matchesFox =
      fox === "All Foxes" ||
      (fox === "Only With Prey" && item.has_prey) ||
      (fox === "Only Without Prey" && !item.has_prey);

    return matchesSearch && matchesLocation && matchesFox;
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <Header />

      <StatsCards data={filteredData} />

      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        fox={fox}
        setFox={setFox}
      />

      <ObservationTable data={filteredData} />

      <Charts data={filteredData} />
      <AIWorklog />
    </main>
  );
}

export default App;