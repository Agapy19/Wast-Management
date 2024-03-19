import React, { useState } from 'react';
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import './Servir.css';

const Servir = () => {
    const [isChecked, setIsChecked] = useState([false, false, false]);

    const handleIconClick = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    return (
        <div className="servir">
            <div className="servir-img" onClick={() => handleIconClick(0)}>
                {isChecked[0] ? <MdCheckBox className='icon'/> : <MdOutlineCheckBoxOutlineBlank className='icon'/>}
                <p>Tri des déchets</p>
            </div>
            <div className="servir-img" onClick={() => handleIconClick(1)}>
                {isChecked[1] ? <MdCheckBox className='icon'/> : <MdOutlineCheckBoxOutlineBlank className='icon'/>}
                <p>Collecte des déchets</p>
            </div>
            <div className="servir-img" onClick={() => handleIconClick(2)}>
                {isChecked[2] ? <MdCheckBox className='icon'/> : <MdOutlineCheckBoxOutlineBlank className='icon'/>}
                <p>Débouchage des fosses</p>
            </div>
        </div>
    );
}

export default Servir;
