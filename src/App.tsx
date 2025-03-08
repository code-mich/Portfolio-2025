import "./App.css";
import { NavBar } from "../components/NavBar";
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

function App() {
	return (
		<div className="font-nunito">
			<NavBar />
			<Landing />
			<About />
			<Projects />
		</div>
	);
}

export default App;
