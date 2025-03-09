import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Links = {
	name: string;
	href: string;
	icon: IconDefinition;
};

const links: Links[] = [
	{
		name: "Github",
		href: "https://github.com/code-mich",
		icon: faGithub,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/michelle-wong-codes/",
		icon: faLinkedin,
	},
	{
		name: "Email",
		href: "mailto:codemwong@gmail.com",
		icon: faEnvelope,
	},
];

export function Contact() {
	return (
		<section
			id="contact"
			className="p-4 mt-4 bg-[url(/assets/contact-bg.svg)] md:px-8 md:py-12 md:mt-8"
		>
			<div className="wrapper flex justify-center">
				<div className="bg-white border-2 p-8 md:w-2/3 lg:p-12">
					<h2 className="text-xl tracking-wide text-center my-2 lg:text-2xl">
						Let's chat!
					</h2>
					<p className="my-2">
						Thanks for stopping by! If you'd like to hear more about what I can
						bring to a team, feel free to contact me through the links below.
						Looking forward to chatting with you!
					</p>
					<ul className="flex justify-around mt-4">
						{links.map((link) => (
							<li className="flex justify-center w-1/3">
								<a
									className="duration-300  hover:scale-115"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="sr-only">{link.name}</p>
									<FontAwesomeIcon
										icon={link.icon}
										aria-hidden="true"
										className="text-5xl text-accent"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
