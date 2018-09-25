import React from "react";
import "./ImageCard.css";

const Image = props => (
    <div className="card"
        value={props.id}
        onClick={() => props.handleClicks(props.id)}
    >

        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);



export default Image;