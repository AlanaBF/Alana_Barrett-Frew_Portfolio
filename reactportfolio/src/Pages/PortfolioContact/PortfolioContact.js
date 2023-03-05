import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';

function PortfolioContact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>
                If you want to get in contact please use the following links:
            </p>
            <Button className="button" href="mailto: alanabarrett-frew@hotmail.com">Send me an Email</Button>
            <Button className="button" href="https://twitter.com/AlanaBF81">Twitter</Button>
            <Button className="button" href="https://github.com/AlanaBF">Github</Button>
            <Button className="button" href="https://www.linkedin.com/in/alanabarrettfrew">LinkedIn</Button>
            <p>
                If you like what you see and have a role that I may be suitable for, please take a look at my CV and LinkedIn Profile. I am open to work and would relish the challenge of a Front End Developer role.
            </p>
            <LinkContainer to="/CV"><Nav.Link ><Button className="link-button">Alana CV</Button></Nav.Link></LinkContainer>
        </div>
    )
}

export default PortfolioContact;