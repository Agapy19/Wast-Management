// Input.js
import React from 'react';

const Input = ({ mylabel, error, value, onChange, placeholder,type }) => {
    return (
        <div>
            <label>{mylabel}</label>
            <input type={type} placeholder= {placeholder} name={value} onChange={onChange}  />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Input;
