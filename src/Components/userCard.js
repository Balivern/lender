import React, { useState } from "react";

const UserCard = ({ username, imageUrl }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {setIsDropdownVisible(true)};

  const handleMouseLeave = () => {setIsDropdownVisible(false)};

  return (
    <div className="user-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="user-info">
      <img
        src={imageUrl}
        alt="Icône de l'utilisateur"
        className="user-image"
      />
      <span className="username">{username}</span>
      </div>
      {true && (
        <div className="dropdown-menu">
          {/* Contenu du menu déroulant à modifier */}
          <ul>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserCard;

/* export default function UserCard() {
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
} */
