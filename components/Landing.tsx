export function Landing() {
	return (
		<header
			id="home"
			className="flex flex-col flex-wrap overflow-hidden relative"
		>
			<img
				src="/assets/header-bg.jpg"
				alt="Image of a pomeranian wearing glasses looking at a tablet."
				className="w-full h-auto opacity-50 object-cover"
			/>
			<div className="absolute flex flex-col bottom-1/20 left-1/20">
				<h1 className="text-4xl font-bold uppercase tracking-widest py-6">
					michelle w.
				</h1>
				<h2 className="text-2xl tracking-widest">Frontend developer</h2>
			</div>
		</header>
	);
}
