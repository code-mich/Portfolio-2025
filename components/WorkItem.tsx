import { v4 as uuidv4 } from "uuid";

type Props = {
	company: string;
	title: string;
	location: string;
	date: string;
	bullets: string[];
};

export function WorkItem({ company, title, location, date, bullets }: Props) {
	return (
		<li
			key={uuidv4()}
			className="flex flex-col border-l-2 border-gray-300 my-4"
		>
			<div className="ml-6">
				<div className="my-2">
					<div className="flex flex-col sm:flex-row sm:justify-between">
						<h3 className="text-xl lg:text-2xl">{title}</h3>
						<p>{date}</p>
					</div>
					<div className="flex flex-col sm:flex-row sm:justify-between">
						<p className="italic">{company}</p>
						<p>{location}</p>
					</div>
				</div>
				<ul>
					{bullets.map((desc) => (
						<li key={uuidv4()} className="list-disc ml-8">
							{desc}
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}
