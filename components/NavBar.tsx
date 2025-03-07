import { NavItem } from "./NavItem";

type NavItems = {
	name: string;
	href: string;
};

const navItems: NavItems[] = [
	{
		name: "about",
		href: "#about",
	},
	{
		name: "projects",
		href: "#projects",
	},
	{
		name: "contact",
		href: "#contact",
	},
];

export function NavBar() {
	return (
		<nav className="sticky flex justify-between bg-white border-b-1 border-gray-300 top-0 p-6 z-10 text-xl uppercase tracking-wide">
			<span className="px-8 py-2 ">
				<a
					href="#home"
					className="font-bold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-800 cursor-pointer"
				>
					code-mich
				</a>
			</span>
			<ul className="flex">
				{navItems.map((item) => (
					<NavItem itemName={item.name} linkTo={item.href} />
				))}
			</ul>
		</nav>
	);
}
