import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';




function PortfolioContact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <Button href="mailto: alanabarrett-frew@hotmail.com">My Email</Button> 
            <Button href="https://twitter.com/AlanaBF81">My Twitter</Button> 
            <Button href="https://github.com/AlanaBF">My Github</Button> 
            <Button href="https://www.linkedin.com/in/alanabarrettfrew">My LinkedIn</Button> 
        </div>
    )
}

export default PortfolioContact;