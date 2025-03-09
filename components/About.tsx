export function About() {
	return (
		<section
			id="about"
			className="p-4 my-4 bg-[url(/assets/about-bg.svg)] bg-cover bg-no-repeat md:p-8 md:my-8"
		>
			<div className="wrapper flex flex-col md:flex-row md:justify-between ">
				<div
					aria-hidden="true"
					className="max-w-1/4 h-1/4 p-3 my-2 rounded-full border-2 self-center sm:p-6 md:p-10 md:my-0"
				>
					<img src="/assets/dog-icon.svg" alt="Icon of a dog" />
				</div>
				<div className="w-full flex flex-col px-8 md:w-7/10 md:px-0">
					<h2 className="text-xl tracking-wide text-center my-2 lg:text-2xl">
						Hi there! I'm Michelle 👋
					</h2>

					<p className="my-2">
						I’m a front end developer who builds apps that look and feel
						beautiful. I strive to deliver products that have a terrific user
						experience, are responsive, and are accessible to as many people as
						possible while also delivering clean and reusable code.
					</p>

					<p className="my-2">
						Prior to transitioning into software development, I studied life
						sciences at the University of Toronto. I leverage my research and
						analytical skills to thoughtfully decompose problems and deal with
						any ambiguity along the way. I value myself as a lifelong learner
						who loves a challenge and thrives in both individual and group
						settings. I'm looking to bring my positivity, creativity, and
						resourcefulness to the right team!
					</p>

					<p className="my-2">
						When I'm not coding, you can find me drawing, trying new cafes, or
						browsing all the newest animal videos 🐾
					</p>
				</div>
			</div>
		</section>
	);
}
