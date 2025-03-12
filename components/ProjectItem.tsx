import { JSX } from "react";
import { v4 as uuidv4 } from "uuid";

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
		<li
			key={uuidv4()}
			className="flex flex-col justify-between p-8 my-4 border-2 border-gray-300 rounded-2xl md:flex-row md:px-0"
		>
			<div className="w-2/3 flex justify-center self-center my-2 sm:w-1/3 md:ml-6">
				<img
					loading="lazy"
					src={image}
					alt={imageAlt}
					className="max-h-[27rem] h-auto"
				/>
			</div>
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
						<div key={uuidv4()}>
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
					<div className="flex justify-center uppercase mt-2" key={uuidv4()}>
						<a
							className="text-white tracking-wide text-center p-2 mr-1 my-2 bg-accent border-2 border-accent duration-300  hover:bg-white hover:text-accent"
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
						>
							Github repo
						</a>
						<a
							className="text-white tracking-wide text-center p-2 ml-1 my-2 bg-accent border-2 border-accent duration-300  hover:bg-white hover:text-accent"
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
