import React from "react";
import "./Image.css";

const Image = props => (
    <div className="card"
    value={props.id}
    onClick={() => props.handleImageChange(props.id)}
    >

    <div className="img-container">
    <img alt={props.name} src={props.image}/>
    </div>
    </div>
);

export default Image;