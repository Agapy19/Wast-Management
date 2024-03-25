import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

function Button(props) {
    return (
        <Link to='contact'>
            <button className="boutton">
              Contactez-nous
            </button>
        </Link>
    )
}






export default Button