import React from "react";
import {
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<Navbar bg="primary" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">NOTES APP ✍️</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link>
							<Link to="/mynotes">My Notes</Link>
						</Nav.Link>

						<NavDropdown title="Sourabh Mahato" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
