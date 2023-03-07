import React from "react";
import "./style.css";

function Card({ project }) {
    const { name, image, Github, deployedLink, about } = project

    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <ul>
                    <div>
                        <h4><strong>{name}</strong></h4>
                    </div>
                    <div>
                        <a href={Github}>Github</a>
                    </div>
                    <div>
                        {deployedLink === "not deployed" ? <h5>Backend Project</h5> : <a href={deployedLink}>Deployed Web Page</a>}
                    </div>
                    <div>
                        <h5>{about}</h5>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Card;