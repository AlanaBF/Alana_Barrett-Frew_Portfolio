import React from "react";


function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Project Title:</strong> {props.name}
                    </li>
                    <li>
                        <strong>GitHub Link:</strong> {props.Github}
                    </li>
                    <li>
                        <strong>URL:</strong> {props.deployedLink}
                    </li>
                </ul>
            </div>


        </div>

    );
}

export default Card;