export function Landing() {
	return (
		<header
			id="home"
			className="flex flex-col flex-wrap overflow-hidden relative"
		>
			<img
				src="/assets/header-bg.jpg"
				alt="Image of a pomeranian wearing glasses looking at a tablet."
				className="max-w-full w-full max-h-[90vh] h-auto opacity-50 object-cover"
			/>
			<div className="absolute flex flex-col bottom-1/15 left-1/15">
				<h1 className="text-3xl uppercase tracking-widest py-3 sm:py-6 md:text-4xl">
					michelle w.
				</h1>
				<h2 className="tracking-widest ml-4">Software developer</h2>
			</div>
		</header>
	);
}
