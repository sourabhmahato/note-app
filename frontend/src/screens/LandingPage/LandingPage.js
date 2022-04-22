import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import './LandingPage.css'

const LandingPage = () => {
	return (
		<div className="main">
			<Container>
				<Row className="lp-row">
                    <div className="intro-text">
                    <div>
                        <h1 className="title">
                            Welcome to notes app! 👋🏼
                        </h1>
                        <p className="subtitle">
                            your notes are safe with us 🔏  
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <a href="/login">
                            <Button size='lg' className="landingbutton">
                                Login
                            </Button>
                        </a>
                        <a href="/register">
                            <Button size='lg' className="landingbutton" variant='outline-primary'>
                                Register
                            </Button>
                        </a>
                    </div>
                    </div>
                </Row>
			</Container>
		</div>
	);
};

export default LandingPage;
