type Tools = {
	name: string;
	icon: string;
};

const tools: Tools[] = [
	{
		name: "React",
		icon: "devicon-react-original",
	},
	{
		name: "Vue",
		icon: "devicon-vuejs-plain",
	},
	{
		name: "Nuxt",
		icon: "devicon-nuxtjs-plain",
	},
	{
		name: "Typescript",
		icon: "devicon-typescript-plain",
	},
	{
		name: "Javascript",
		icon: "devicon-javascript-plain",
	},
	{
		name: "NodeJS",
		icon: "devicon-nodejs-plain",
	},
	{
		name: "TailwindCSS",
		icon: "devicon-tailwindcss-original",
	},
	{
		name: "Sass",
		icon: "devicon-sass-original",
	},
	{
		name: "CSS3",
		icon: "devicon-css3-plain",
	},
	{
		name: "HTML5",
		icon: "devicon-html5-plain",
	},
	{
		name: "jQuery",
		icon: "devicon-jquery-plain",
	},
	{
		name: "GitHub",
		icon: "devicon-github-original",
	},
	{
		name: "Bitbucket",
		icon: "devicon-bitbucket-original",
	},
	{
		name: "Git",
		icon: "devicon-git-plain",
	},
	{
		name: "Firebase",
		icon: "devicon-firebase-plain",
	},
	{
		name: "Figma",
		icon: "devicon-figma-plain",
	},
	{
		name: "Adobe Photoshop",
		icon: "devicon-photoshop-plain",
	},
];

export function Toolbox() {
	return (
		<section id="skills" className="p-4 my-4 md:p-8 md:my-8">
			<div className="wrapper">
				<h2 className="font-roboto uppercase text-xl tracking-wide text-center my-4 lg:text-3xl">
					My toolbox
				</h2>
				<ul className="flex flex-wrap my-2">
					{tools.map((tool) => (
						<li className="w-1/3 flex flex-col align-center text-center py-3 text-xl sm:w-1/4 lg:w-1/5">
							<i className={tool.icon + ` text-5xl text-accent`}></i>
							<p className="text-base md:text-lg">{tool.name}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
