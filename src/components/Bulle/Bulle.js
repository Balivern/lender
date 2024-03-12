// src/components/Bulle/Bulle.js
import React, { useState } from 'react';
import './Bulle.css';

const Bulle = ({ titre, contenu }) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleBulle = () => {
       setIsOpen(!isOpen);
    };
   
    return (
       <div className="bulle" onClick={toggleBulle}>
         <h3>{titre}</h3>
         {isOpen && <div className="contenu-bulle">{contenu}</div>}
       </div>
    );
   };

export default Bulle;
