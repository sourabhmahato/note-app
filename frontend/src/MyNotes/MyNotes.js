import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import MainScreen from "../components/MainScreen";
import axios from "axios";
const MyNotes = () => {
	const [notes, setNotes] = useState([]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure?")) {
		}
	};

	const fetchNotes = async () => {
		const { data } = await axios.get("/api/notes/");
		setNotes(data);
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	return (
		<MainScreen title="Welcome back, Sourabh! 🐐">
			<Link to="createnote">
				<Button style={{ marginLeft: 10, marginBottom: 10 }} size="lg">
					create new note
				</Button>
			</Link>
			{notes.map((item) => (
				<Accordion key={item._id}>
					<Accordion.Item eventKey="0">
						<Card
							style={{
								marginBottom: 8,
							}}
							key={item._id}
						>
							<Card.Header style={{ display: "flex" }}>
								<span
									style={{
										color: "black",
										textDecoration: "none",
										flex: 1,
										cursor: "pointer",
										alignSelf: "center",
										fontSize: 18,
									}}
								>
									<Accordion.Header>{item.title}</Accordion.Header>
								</span>
								<div>
									<Button href={`/note/${item._id}`}>Edit</Button>
									<Button
										onClick={() => deleteHandler(item._id)}
										variant="danger"
										className="mx-2"
									>
										Delete
									</Button>
								</div>
							</Card.Header>

							<Accordion.Body>
								{" "}
								<Card.Body>
									<h4>
										<Badge variant="success">Category - {item.category}</Badge>
									</h4>
									<blockquote className="blockquote mb-0">
										<p>{item.content}</p>
										<footer className="blockquote-footer">
											Created On - date
										</footer>
									</blockquote>
								</Card.Body>{" "}
							</Accordion.Body>
						</Card>
					</Accordion.Item>
				</Accordion>
			))}
			My Notes
		</MainScreen>
	);
};

export default MyNotes;
