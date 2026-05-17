import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Update form state
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Submit new plant to backend
  function handleSubmit(event) {
  event.preventDefault();

  const newPlant = {
    name: formData.name,
    image: formData.image,
    price: formData.price,
  };

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((response) => response.json())
    .then((createdPlant) => {
      onAddPlant(createdPlant);

      setFormData({
        name: "",
        image: "",
        price: "",
      });
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;