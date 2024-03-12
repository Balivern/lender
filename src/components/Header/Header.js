import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
   
    const toggleDropdown = () => {
       setDropdownVisible(!isDropdownVisible);
    };
   
    return (
       <header className="header">
         <div className="header-content">
           <div>Contenu du header</div>
         </div>
         <div className="profile-card" onClick={toggleDropdown}>
           <img src='img/profil-lender.jpg' alt="Profil" className="profile-image" />
           {isDropdownVisible && (
             <div className="dropdown-menu">
               <ul>
                 <li className="menu" onClick={toggleDropdown}>Nom de l'utilisateur</li>
                 <li className="menu" onClick={toggleDropdown}>Mes prêts</li>
                 <li className="menu" onClick={toggleDropdown}>Gestion du profil</li>
                 <li className="menu" onClick={toggleDropdown}>Déconnexion</li>
               </ul>
             </div>
           )}
         </div>
       </header>
    );
   };
   
export default Header;