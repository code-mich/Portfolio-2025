import { JSX } from "react";
import { ProjectItem } from "./ProjectItem";

type ProjectBlurb = {
	blurb: string;
	linkBlurb: string;
	secondLinkBlurb?: string;
	link: JSX.Element;
	secondLink?: JSX.Element;
};

type ProjectLinks = {
	repo: string;
	liveLink: string;
};

type Projects = {
	name: string;
	image: string;
	imageAlt: string;
	skills: string[];
	projectBlurb: ProjectBlurb[];
	projectLinks: ProjectLinks[];
};

const projects: Projects[] = [
	{
		name: "Critterpedia",
		image: "/assets/critterpedia-mockup.png",
		imageAlt: "Mockup of Critterpedia home page on a tablet screen.",
		skills: ["React", "Rest API", "SCSS"],
		projectBlurb: [
			{
				blurb:
					"Curious about what critters are currently available on your Animal Crossing: New Horizons island? Simply input the date and hemisphere - Blathers will handle the rest!",
				linkBlurb: "Data is provided by the ",
				link: (
					<a
						className="uppercase text-accent relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
						href="https://api.nookipedia.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Nookipedia API
					</a>
				),
			},
		],
		projectLinks: [
			{
				repo: "https://github.com/code-mich/critterpedia-react",
				liveLink: "https://critterpedia-react.netlify.app/",
			},
		],
	},
	{
		name: "Trivia Time",
		image: "/assets/trivia-time-mockup.png",
		imageAlt: "Mockup of Trivia Time home page on a laptop screen.",
		skills: ["React", "Firebase", "Rest API", "Group Project"],
		projectBlurb: [
			{
				blurb:
					"An interactive trivia game which allows for up to 5 players. Winning players have their name, score, and avatar stored via Firebase and dynamically displayed.",
				linkBlurb: "Trivia questions provided by the ",
				link: (
					<a
						className="uppercase  text-accent relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
						href="https://opentdb.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open Trivia Database
					</a>
				),
				secondLinkBlurb: "Avatars provided by the ",
				secondLink: (
					<a
						className="uppercase text-accent relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
						href="https://avatars.dicebear.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						DiceBear Avatars API
					</a>
				),
			},
		],
		projectLinks: [
			{
				repo: "https://github.com/code-mich/trivia-time",
				liveLink: "https://inquisitive-trivia-time.netlify.app/",
			},
		],
	},
];

export function Projects() {
	return (
		<section id="projects" className="p-4 my-4 md:p-8 md:my-8">
			<div className="wrapper">
				<h2 className="font-roboto uppercase text-xl tracking-wide text-center my-2 lg:text-3xl">
					Projects
				</h2>

				<ul className="flex flex-col">
					{projects.map((project) => (
						<ProjectItem
							name={project.name}
							image={project.image}
							imageAlt={project.imageAlt}
							skills={project.skills}
							projectBlurb={project.projectBlurb}
							projectLinks={project.projectLinks}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
