import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState('');
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  function handleItemAdd(newItem) {
    // Update the list of items by adding the new item
    setItemsList([...itemsList, newItem]);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    return (
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemAdd={handleItemAdd} />
      <Filter onCategoryChange={handleCategoryChange} onQueryChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;