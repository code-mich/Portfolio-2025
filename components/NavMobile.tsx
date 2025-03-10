type Props = {
	itemName: string;
	linkTo: string;
	onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function NavMobile({ itemName, linkTo, onClick }: Props) {
	return (
		<li className="text-center text-l tracking-widest font-light px-8 py-6">
			<a
				className="relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-800 cursor-pointer"
				href={linkTo}
				onClick={onClick}
			>
				{itemName}
			</a>
		</li>
	);
}
