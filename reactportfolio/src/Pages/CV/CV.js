import React from "react";
import AlanaCV from './assets/Alana-Barrett-Frew-CV.pdf'
import Button from 'react-bootstrap/Button';
import './style.css'

function CV() {
    return (
        <div>
            <h1>My CV</h1>
            <p>
                Or Click the button to download
            </p>
            <Button className="cvbutton"><a href={AlanaCV}>Download a copy of my CV</a></Button>
        
            <div className="cv">
                <iframe src={`${AlanaCV}#view=fitH`} title="AlanaCV" width="100%" height="1000" />
            </div>

        </div>
    )
}

export default CV;