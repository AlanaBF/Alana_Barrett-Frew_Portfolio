import React from "react";
import "./style.css";


function PortfolioProjectGallery(props) {
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
                        <strong>GitHub Link:</strong> {props.GithubLink}
                    </li>
                    <li>
                        <strong>URL:</strong> {props.UrlLink}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioProjectGallery
