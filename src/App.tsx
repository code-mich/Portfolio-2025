import "./App.css";
import { NavBar } from "../components/NavBar";
import { Landing } from "../components/Landing";
import { About } from "../components/About";

function App() {
	return (
		<div className="font-nunito">
			<NavBar />
			<Landing />
			<About />
		</div>
	);
}

export default App;
