import React from "react";

export default function UserCard() {
  return (
    <div id="userCard">
      <img
        src={process.env.PUBLIC_URL + "images/blank_profile.png"}
        alt="Icône de l'utilisateur"
      />
      <span id="userName">Nom de l'utilisateur</span>
      <span id="userInfos">Informations à ajouter</span>
    </div>
  );
}
