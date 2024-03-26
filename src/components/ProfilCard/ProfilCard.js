import React from 'react';
import './ProfilCard.css';

const ProfilCard = ({ profilcard, isDropdownVisible, toggleDropdown }) => {
    return (
        <div className="profil-card" onClick={toggleDropdown}>
            <img src='img/profil-lender.jpg' alt="Profil" className="profil-image" />
            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <ul>
                        {profilcard.map((item, index) => (
                            <li key={index} className="menu" onClick={toggleDropdown}>
                                {item.nom || item.prets || item.gestion || item.deco}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfilCard;
