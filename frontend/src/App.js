import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./MyNotes/MyNotes";
function App() {
	return (
		<BrowserRouter>
    <Header />
			<main>
        <Routes>
				<Route exact path="/" element={<LandingPage/>}  />
				<Route path="/mynotes" element={<MyNotes/>} />
        </Routes>
				{/* <LandingPage /> */}
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
