import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ContactMe from "../../components/ContactForm";

function PortfolioContact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>
                If you want to get in contact please use the form below or click on one of the links:
            </p>
            <div className="buttongroup">
                <Button className="button" href="https://twitter.com/AlanaBF81">Twitter</Button>
                <Button className="button" href="https://github.com/AlanaBF">Github</Button>
                <Button className="button" href="https://www.linkedin.com/in/alanabarrettfrew">LinkedIn</Button>
            </div>
            <div>
                <ContactMe />
            </div>
            <p>
                If you like what you see and have a role that I may be suitable for, please take a look at my CV and LinkedIn Profile. I am open to work and would relish the challenge of a Front End Developer role.
            </p>
            <LinkContainer to="/CV"><Nav.Link ><Button className="link-button">CV</Button></Nav.Link></LinkContainer>



        </div>
    )
}

export default PortfolioContact;
