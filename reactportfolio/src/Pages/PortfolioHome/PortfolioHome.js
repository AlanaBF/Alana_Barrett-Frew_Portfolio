import React from "react";
import "./style.css";
import BackgroundImage from "./assets/images/BackgroundImage.jpeg"
import ProfilePic from "./assets/images/ProfilePic.jpeg"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function PortfolioHome() {
    return (
        <Container>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <div>
                    <img src={ProfilePic} className="profilePic" alt="Profile Image" />
                    <h1 class="display-4">Alana Barrett-Frew</h1>
                    <h2 class="lead">Front End Web Developer and Educator.</h2>
                    <h2 class="intro"><Link to="/PortfolioContact"><p>Click here to connect with me</p></Link></h2>
                </div>
            </div>

            <h1>Welcome To My Portfolio!</h1>

            <p class="text">
                Currently upskilling for a career change.
                Studying a 16 week intense Skills Bootcamp in Front End Web Development with edX, using
                Zoom, Slack and Bootcamp Spot. I am also completing the Prince 2 Foundation and Practitioner
                Certificate
                and Agile PM Foundation and Practitioner Certificate with The Knowledge Academy. I am so
                excited to learn and develop further. Full of passion and creativity which shows in
                all areas of my life, both work and home. I always strive to push my self to be better, to
                keep learning and not get complacent in my comfort zone.

                Three things of which I am most proud:
                <ol>
                    <li>Moving to Spain on my own having never driven on "the wrong" side of the road, I didn't
                        speak the language and I didn't know anyone. I took on a teaching role in a British
                        School
                        teaching Spanish children. It was the best thing I have done for my own confidence and
                        resilience! Fun Fact: I lived with nuns for two weeks, until my accommodation was
                        ready!</li>
                    <li>Moving to Cornwall and buying a Smallholding for renovation. Here started my love of
                        Project Management, aside from the skills I developed through my teaching career. I
                        managed the renovation from start to finish and am very proud of the home we have
                        created. Living the
                        dream!</li>
                    <li>Creating a project plan and approaching Senior Leadership to build a school farm. They
                        agreed and I drove the project from start to finish.</li>
                </ol>
                I am ready for my next challenge. As a collaborative team worker, I enjoy building projects
                from ideation to execution. I am highly
                motivated, have a good sense of humour and bags of energy. I am very friendly and
                approachable. Outside of my career, I love
                the great outdoors, animals, sailing, water sports, camping, walking, gardening and
                travelling with a special love for the Maldives.
            </p>

<h1>My Skills</h1>
            <div id="main-container" class="container-fluid">
                <div class="row">
                    <div class="col-3 skill">How to create a professional project portfolio</div>
                    <div class="col-3 skill">Team collaboration</div>
                    <div class="col-3 skill">Agile development Methodologies</div>
                    <div class="col-3 skill">Project demonstration and storytelling</div>
                    <div class="col-3 skill">Prince 2 Foundation and Practitioner</div>
                    <div class="col-3 skill">AgilePM Foundation and Practitioner</div>
                    <div class="col-3 skill">User experience design </div>
                    <div class="col-3 skill">HTML/CSS/Git</div>
                    <div class="col-2 skill">JavaScript</div>
                    <div class="col-2 skill">Bootstrap</div>
                    <div class="col-2 skill">The DOM</div>
                    <div class="col-3 skill">APIs</div>
                    <div class="col-3 skill">JQuery</div>
                    <div class="col-2 skill">JSON</div>
                    <div class="col-2 skill">AJAX</div>
                    <div class="col-2 skill">Node.js</div>
                    <div class="col-3 skill">ES6</div>
                    <div class="col-3 skill">Object-orientated programming</div>
                    <div class="col-4 skill">Test-Driven development</div>
                    <div class="col-2 skill">React</div>
                    <div class="col-3 skill">Behavior-driven development</div>
                    <div class="col-3 skill">Deployment</div>

                </div>
            </div>

        </Container>
    )
}

export default PortfolioHome