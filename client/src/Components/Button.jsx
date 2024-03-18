import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

function Button(props) {
    return (
        <Link to={props.to} style={{ textDecoration: "none" }}>
            <button className="button" style={props.color}>
                {props.name}
            </button>
        </Link>
    )
}






export default Button