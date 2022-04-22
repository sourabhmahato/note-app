import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
	return (
		<footer
			style={{
				width: "100%",
				position: "relative",
				bottom: 0,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Container>
				<Row>
					<Col className="text-center py-3">
						<p className="credits">
							Made with 💖 by{" "}
							<a href="https://github.com/sourabhmahato">Sourabh Mahato</a> 🧑🏻‍💻
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
