import React from "react";
import portfolio from "../../portfolio.json";
import Wrapper from "../../components/Wrapper/index";
import Title from "../../components/Title/index";
import Card from "../../components/Card/index";
import "./style.css";

function PortfolioProjectGallery() {
    return (
        <Wrapper>
            <Title className="gallerytitle">Project Gallery</Title>
            <p className="intro">
                Here you can find examples of the Front End Development projects I have completed to date.
        </p>
                {portfolio.map(project => <Card key={project.id} project={project} />)}
            
        </Wrapper>
    )
}

export default PortfolioProjectGallery
