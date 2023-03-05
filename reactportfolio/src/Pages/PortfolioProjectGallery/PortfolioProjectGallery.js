import React from "react";
import portfolio from "../../portfolio.json";
import Wrapper from "../../components/Wrapper/index";
import Title from "../../components/Title/index";
import Card from "../../components/Card/index";
import Counter from "../../components/Counter/index";


function PortfolioProjectGallery() {
    return (
        <Wrapper>
            <Title>Project Gallery</Title>
            <p class="intro">
                Here you can find examples of the Front End Development tasks I have completed to date. There is a link to the github repository and also to the deployed site where relevant.
            </p>
            <Counter />
            <Card
                name={portfolio[0].name}
                image={portfolio[0].image}
                Github={portfolio[0].Github}
                deployedLink={portfolio[0].deployedLink}
            />
            <Counter />
            <Card
                name={portfolio[1].name}
                image={portfolio[1].image}
                Github={portfolio[1].Github}
                deployedLink={portfolio[1].deployedLink}
            />
            <Counter />
            <Card
                name={portfolio[2].name}
                image={portfolio[2].image}
                Github={portfolio[2].Github}
                deployedLink={portfolio[2].deployedLink}
            />
            <Counter />
            <Card
                name={portfolio[3].name}
                image={portfolio[3].image}
                Github={portfolio[3].Github}
                deployedLink={portfolio[3].deployedLink}
            />
            <Counter />
            <Card
                name={portfolio[4].name}
                image={portfolio[4].image}
                Github={portfolio[4].Github}
                deployedLink={portfolio[4].deployedLink}
            />
            <Counter />
            <Card
                name={portfolio[5].name}
                image={portfolio[5].image}
                Github={portfolio[5].Github}
                deployedLink={portfolio[5].deployedLink}
            />
        </Wrapper>
    )
}

export default PortfolioProjectGallery
