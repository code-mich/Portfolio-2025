type Props = {
	itemName: string;
	linkTo: string;
};

export function NavItem({ itemName, linkTo }: Props) {
	return (
		<li className="px-8 py-2">
			<a
				className="relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-800 cursor-pointer"
				href={linkTo}
			>
				{itemName}
			</a>
		</li>
	);
}
