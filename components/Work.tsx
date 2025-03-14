import { v4 as uuidv4 } from "uuid";
import { WorkItem } from "./WorkItem";

type WorkExp = {
	company: string;
	title: string;
	location: string;
	date: string;
	bullets: string[];
};

const workExp: WorkExp[] = [
	{
		company: "The Rumie Initiative",
		title: "Software Developer",
		location: "Vancouver, BC - Remote",
		date: "September 2022 - July 2023",
		bullets: [
			"Designed and implemented core UI features while enhancing SEO for Rumie Learn and Rumie Build using modern technologies such as Vue.js, Nuxt.js, TailwindCSS, Node.js, and Firebase.",
			"Revamped the Rumie Build onboarding process, delivering a more intuitive and streamlined experience tailored to diverse user personas.",
			"Developed dedicated pages on Rumie Learn to highlight partner SMEs, allowing them to tag articles as factually accurate and showcase their expertise.",
			"Introduced a collections feature, empowering users to personalize their learning journey by saving and organizing their favourite articles into custom groups.",
			"Provided technical troubleshooting and support to volunteers, ensuring smooth platform operations and user satisfaction.",
			"Played a key role in scaling the Rumie platform, supporting its growth from one million to two million users globally.",
		],
	},
	{
		company: "The Rumie Initiative",
		title: "Software Developer Intern",
		location: "Toronto, ON - Remote",
		date: "June 2022 - September 2022",
		bullets: [
			"Boosted SEO performance by 15% for both the Rumie corporate website and Rumie Learn through enhanced accessibility features and optimized web content.",
			"Streamlined application architecture by refactoring code into modular, reusable components, improving maintainability and scalability.",
			"Collaborated with a cross-functional team to successfully deliver new localization projects, enhancing global user experience and market reach.",
		],
	},
];

export function Work() {
	return (
		<section id="work" className="wrapper p-4 my-4 md:p-8 md:my-8">
			<h2 className="font-roboto uppercase text-xl tracking-wide text-center my-2 lg:text-3xl">
				Work Experience
			</h2>

			<ul className="flex flex-col">
				{workExp.map((work) => (
					<WorkItem
						key={uuidv4()}
						company={work.company}
						title={work.title}
						location={work.location}
						date={work.date}
						bullets={work.bullets}
					/>
				))}
			</ul>
		</section>
	);
}
