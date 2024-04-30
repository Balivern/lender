import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function SearchBar() {
  const [searchInput, updateSearchInput] = useState("");
  return (
    <div id="sbcontainer">
      <form onSubmit={(e) => updateSearchInput(e.target.value)} role="search">
        <input
          id="search"
          type="search"
          placeholder="J'ai besoin de..."
          onChange={(e) => updateSearchInput(e.target.value)}
          value={searchInput}
          autoFocus
          required
        />
        <button type="submit">&#x1F50D;</button>
      </form>
    </div>
  );
}
