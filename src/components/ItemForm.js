import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemAdd }) {
  const [newProductName, setNewProductName] = useState("");
  const [categoryToAdd, setCategoryToAdd] = useState("Produce");

  function handleAddedProduct(event) {
    setNewProductName(event.target.value);
  }

  function newProductCategory(event) {
    setCategoryToAdd(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: newProductName,
      category: categoryToAdd,
    };

    onItemAdd(newItem);
    setNewProductName(""); // Clear input after submission
    setCategoryToAdd("Produce"); // Reset category after submission
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          onChange={handleAddedProduct}
          type="text"
          name="name"
          value={newProductName}
        />
      </label>

      <label>
        Category:
        <select
          onChange={newProductCategory}
          name="category"
          value={categoryToAdd}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
