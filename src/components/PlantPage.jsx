import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Stores all plants fetched from backend
  const [plants, setPlants] = useState([]);

  // Stores current search input
  const [search, setSearch] = useState("");

  // Fetch all plants on initial render
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add newly created plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        search={search}
        onSearchChange={setSearch}
      />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;