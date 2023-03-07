import React from "react";
import "./style.css";


function Card({project}) {
    const {name, image, Github, deployedLink} = project
    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Project Title:</strong> {name}
                    </li>
                    <li>
                        <strong>GitHub Link:</strong> {Github}
                    </li>
                    <li>
                        <strong>URL:</strong> {deployedLink}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;