import React from "react";
import SearchBar from "./searchBar";
import UserCard from "./userCard";

export default function Header() {
  return (
    <header class="header">
      <img src={process.env.PUBLIC_URL + "logo192.png"} alt="Logo Lender"></img>
      <SearchBar />
      <UserCard />
    </header>
  );
}
