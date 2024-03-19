// Bulle.js :
import React from 'react';
import './Bulle.css';

const Bulle = ({ titre, contenu, isOpen, toggleBulle }) => {
    const style = isOpen ? { backgroundColor: 'green' } : {};
    const className = isOpen ? 'bulle open' : 'bulle';

    return (
        <div className={className} onClick={toggleBulle} style={style}>
            <h3>{titre}</h3>
            {isOpen && <div className="contenu-bulle">{contenu}</div>}
        </div>
    );
};

export default Bulle;
