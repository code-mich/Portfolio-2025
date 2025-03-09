import "./App.css";
import { NavBar } from "../components/NavBar";
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Toolbox } from "../components/Toolbox";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

function App() {
	return (
		<div className="font-nunito text-l lg:text-xl">
			<NavBar />
			<Landing />
			<About />
			<Projects />
			<Toolbox />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
