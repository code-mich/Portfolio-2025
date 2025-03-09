import { JSX } from "react";

type Props = {
	name: string;
	image: string;
	imageAlt: string;
	skills: string[];
	projectBlurb: ProjectBlurb[];
	projectLinks: ProjectLinks[];
};

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

export function ProjectItem({
	name,
	image,
	imageAlt,
	skills,
	projectBlurb,
	projectLinks,
}: Props) {
	return (
		<li className="flex flex-col justify-between px-8 my-4 md:flex-row md:px-0">
			<img
				src={image}
				alt={imageAlt}
				className="w-2/3 self-center my-2 sm:w-1/3"
			/>
			<div className="flex flex-col md:w-2/3 md:mx-8 lg:justify-center xl:w-1/2">
				<h3 className="text-xl text-center my-2 lg:text-2xl">{name}</h3>
				<p className="text-center uppercase">
					{/* if last skill, do not add | to end of string */}
					{skills.map((skill, i) => {
						return skills.length - 1 === i ? skill : skill + " | ";
					})}
				</p>
				{/* project blurbs and links */}
				{projectBlurb.map((project) => {
					return (
						<div>
							<p className="my-2">{project.blurb}</p>
							<span className="flex flex-wrap my-2">
								<p className="mr-1">{project.linkBlurb}</p> {project.link}
							</span>
							{project.secondLink && project.secondLinkBlurb && (
								<span className="flex flex-wrap my-2">
									<p className="mr-1">{project.secondLinkBlurb}</p>{" "}
									{project.secondLink}
								</span>
							)}
						</div>
					);
				})}
				{projectLinks.map((project) => (
					<div className="flex justify-center uppercase mt-2">
						<a
							className="text-white tracking-wide text-center p-2 mr-1 my-2 bg-accent border-2 border-accent duration-300 ease-in hover:bg-white hover:text-accent"
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
						>
							Github repo
						</a>
						<a
							className="text-white tracking-wide text-center p-2 ml-1 my-2 bg-accent border-2 border-accent duration-300 ease-in hover:bg-white hover:text-accent"
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							View live
						</a>
					</div>
				))}
			</div>
		</li>
	);
}
