// src/components/ListeBulles/ListeBulles.js
import React from 'react';
import Bulle from '../Bulle/Bulle';
import './ListeBulles.css';

const ListeBulles = ({ bulles }) => {
    return (
       <div className="liste-bulles">
         {bulles.map((bulle, index) => (
           <Bulle key={index} titre={bulle.titre} contenu={bulle.contenu} />
         ))}
       </div>
    );
   };

export default ListeBulles;
