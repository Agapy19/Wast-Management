// Input.js
import React from 'react';

const Input = ({ mylabel, error, value, onChange, placeholder }) => {
    return (
        <div>
            <label>{mylabel}</label>
            <input type="text" placeholder= {placeholder} value={value} onChange={onChange}  />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Input;
