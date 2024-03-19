// ListeBulles.js
import React, { useState, useRef, useEffect } from 'react';
import Bulle from '../Bulle/Bulle';
import './ListeBulles.css';

const ListeBulles = ({ bulles }) => {
    const [openBulle, setOpenBulle] = useState(null);
    const bullesRef = useRef(null);

    const toggleBulle = (index) => {
        setOpenBulle(openBulle === index ? null : index);
    };

    useEffect(() => {
        const closeOpenBulles = (e) => {
            if (bullesRef.current && !bullesRef.current.contains(e.target)) {
                setOpenBulle(null);
            }
        };

        document.addEventListener('mousedown', closeOpenBulles);
        return () => {
            document.removeEventListener('mousedown', closeOpenBulles);
        };
    }, []);

    return (
        <div className="liste-bulles" ref={bullesRef}>
            {bulles.map((bulle, index) => (
                <Bulle
                    key={index}
                    titre={bulle.titre}
                    contenu={bulle.contenu}
                    isOpen={openBulle === index}
                    toggleBulle={() => toggleBulle(index)}
                />
            ))}
        </div>
    );
};

export default ListeBulles;
