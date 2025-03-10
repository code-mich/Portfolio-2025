import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { useState, useEffect, useRef } from "react";

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
	const [showMenu, setshowMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const ref = useRef<HTMLDivElement>(null);
	const breakpoint = 640;

	const handleClickOutside = (e: any) => {
		if (showMenu && !ref.current?.contains(e.target as Node)) {
			setshowMenu(false);
		}
	};

	window.addEventListener("click", handleClickOutside);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);

		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<nav className="sticky bg-white border-b-2 border-gray-200 top-0 py-2 z-10 text-l uppercase tracking-wide">
			<div
				className={`flex justify-between ${width > breakpoint ? "wrapper" : ""}`}
			>
				<span className="mt-3 mx-4 sm:px-8 sm:my-2">
					<a
						href="#home"
						className="font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-800 cursor-pointer"
					>
						code-mich
					</a>
				</span>

				{/* Mobile hamburger nav */}
				{width < breakpoint && (
					<>
						<div ref={ref} className="mx-4">
							<button
								type="button"
								className="flex flex-col px-2 py-3 cursor-pointer"
								onClick={() => setshowMenu(!showMenu)}
							>
								<span
									className={`bar ${showMenu ? "rotate-45 " : "rotate-0"}`}
								></span>
								<span
									className={`bar ${showMenu ? "translate-x-full opacity-0" : "translate-x-0"}`}
								></span>
								<span
									className={`bar & ${showMenu ? "-rotate-45" : "rotate-0"}`}
								></span>
							</button>
						</div>
						{showMenu && (
							<ul className="w-screen absolute bg-gray-200 translate-y-[3rem] z-10">
								{navItems.map((item) => (
									<NavMobile
										itemName={item.name}
										linkTo={item.href}
										onClick={() => setshowMenu(!showMenu)}
									/>
								))}
							</ul>
						)}
					</>
				)}

				{/* Desktop nav bar */}
				{width > breakpoint && (
					<>
						<ul className="flex">
							{navItems.map((item) => (
								<NavDesktop itemName={item.name} linkTo={item.href} />
							))}
						</ul>
					</>
				)}
			</div>
		</nav>
	);
}
