import React, { useState } from "react";

export default function SearchBar() {
  const [searchInput, updateSearchInput] = useState("");
  return (
    <input
      type="text"
      placeholder="J'ai besoin d'un ..."
      onChange={(e) => {
        updateSearchInput(e.target.value);
      }}
      value={searchInput}
    />
  );
}
