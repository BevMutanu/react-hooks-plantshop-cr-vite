import React, { useState } from "react";

function PlantCard({ plant }) {
  // Tracks stock status locally
  const [inStock, setInStock] = useState(true);

  // Toggle stock status
  function handleStockToggle() {
    setInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {inStock ? (
        <button
          className="primary"
          onClick={handleStockToggle}
        >
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;