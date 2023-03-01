import React from 'react';
import BootstrapJumbotron from "./BootstrapJumbotron";
import BootstrapNavbar from "./BootstrapNavbar";
import BootstrapCard from "./BootstrapCard";

function HelloPortfolio() {
    return (
        <div>
            <BootstrapNavbar />
            <BootstrapJumbotron />
            <BootstrapCard />
        </div>
    )
}

export default HelloPortfolio;