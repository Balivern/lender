import React, { useState } from 'react';
import './Header.css';
import ProfilCard from '../ProfilCard/ProfilCard';

const profilcard = [
  { nom: 'Nom de l\'utilisateur'},
  { prets: 'Mes prêts'},
  { gestion: 'Gestion du profil'},
  { deco: 'Déconnexion'},
];

const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
   
    const toggleDropdown = () => {
       setDropdownVisible(!isDropdownVisible);
    };
   
    return (
       <header className="header">
         <div className="header-content">
           <div>Bienvenue sur Lender</div>
           <ProfilCard profilcard={profilcard} isDropdownVisible={isDropdownVisible} toggleDropdown={toggleDropdown} />
         </div>
       </header>
    );
   };
   
export default Header;