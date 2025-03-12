import { v4 as uuidv4 } from "uuid";

type Props = {
	itemName: string;
	linkTo: string;
};

export function NavDesktop({ itemName, linkTo }: Props) {
	return (
		<li key={uuidv4()} className="px-8 mt-3 sm:my-2">
			<a
				className="relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-800 cursor-pointer"
				href={linkTo}
			>
				{itemName}
			</a>
		</li>
	);
}
