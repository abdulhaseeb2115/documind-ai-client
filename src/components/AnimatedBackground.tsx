"use client";

interface AnimatedBackgroundProps {
	heroMode?: boolean;
}

export default function AnimatedBackground({
	heroMode = false,
}: AnimatedBackgroundProps) {
	if (heroMode) {
		// Enhanced hero section with multiple shapes, more particles, and gradient color animations
		// Particles are spread evenly across the entire viewport
		return (
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				{/* Large floating blobs with gradient color animations - spread to corners and edges */}
				<div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-float-slow animate-gradient-color-purple" />
				<div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl animate-float-slower animate-gradient-color-blue" />
				<div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-3xl animate-float-slow animate-gradient-color-orange" />
				<div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-float-fast animate-gradient-color-purple-light" />
				<div className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl animate-float-slower animate-gradient-color-blue" />
				<div className="absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl animate-float-slow animate-gradient-color-orange" />
				<div className="absolute top-0 left-1/2 w-80 h-80 rounded-full blur-3xl animate-float-fast animate-gradient-color-purple-light" />

				{/* Medium blobs with gradient color animations - distributed across screen */}
				<div className="absolute top-[15%] left-[20%] w-64 h-64 rounded-full blur-2xl animate-float-slow animate-gradient-color-orange" />
				<div className="absolute top-[25%] right-[25%] w-56 h-56 rounded-full blur-2xl animate-float-fast animate-gradient-color-purple-light" />
				<div className="absolute bottom-[20%] left-[30%] w-60 h-60 rounded-full blur-2xl animate-float-slower animate-gradient-color-blue" />
				<div className="absolute bottom-[30%] right-[35%] w-52 h-52 rounded-full blur-2xl animate-float-slow animate-gradient-color-purple-light" />
				<div className="absolute top-[60%] left-[15%] w-58 h-58 rounded-full blur-2xl animate-float-fast animate-gradient-color-orange" />
				<div className="absolute top-[40%] right-[15%] w-54 h-54 rounded-full blur-2xl animate-float-slower animate-gradient-color-blue" />

				{/* Circles with gradient animations - evenly distributed */}
				<div className="absolute top-[10%] left-[10%] w-3 h-3 particle-circle animate-float-dot animate-gradient-color-dot" />
				<div className="absolute top-[20%] right-[15%] w-2.5 h-2.5 particle-circle animate-float-dot-delayed animate-gradient-color-dot" />
				<div className="absolute bottom-[25%] left-[45%] w-3 h-3 particle-circle animate-float-dot-slow animate-gradient-color-dot" />
				<div className="absolute top-[50%] left-[25%] w-2 h-2 particle-circle animate-float-dot-fast animate-gradient-color-dot-small" />
				<div className="absolute bottom-[15%] right-[40%] w-2.5 h-2.5 particle-circle animate-float-dot animate-gradient-color-dot" />
				<div className="absolute top-[70%] left-[60%] w-2 h-2 particle-circle animate-float-dot-delayed animate-gradient-color-dot-small" />
				<div className="absolute top-[30%] right-[30%] w-3 h-3 particle-circle animate-float-dot-slow animate-gradient-color-dot" />
				<div className="absolute bottom-[35%] left-[70%] w-2 h-2 particle-circle animate-float-dot-fast animate-gradient-color-dot-small" />
				<div className="absolute top-[5%] right-[50%] w-2.5 h-2.5 particle-circle animate-float-dot animate-gradient-color-dot" />
				<div className="absolute bottom-[5%] left-[20%] w-3 h-3 particle-circle animate-float-dot-delayed animate-gradient-color-dot" />
				<div className="absolute top-[80%] right-[25%] w-2 h-2 particle-circle animate-float-dot-slow animate-gradient-color-dot-small" />
				<div className="absolute top-[15%] left-[80%] w-2.5 h-2.5 particle-circle animate-float-dot animate-gradient-color-dot" />

				{/* Squares with gradient animations - spread across viewport */}
				<div className="absolute top-[12%] left-[18%] w-4 h-4 particle-square animate-particle-float animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[35%] right-[18%] w-3 h-3 particle-square animate-particle-float-2 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[18%] left-[22%] w-3.5 h-3.5 particle-square animate-particle-float-3 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[65%] right-[45%] w-4 h-4 particle-square animate-particle-float animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[40%] left-[75%] w-3 h-3 particle-square animate-particle-float-2 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[45%] left-[85%] w-3.5 h-3.5 particle-square animate-particle-float-3 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[55%] right-[8%] w-3 h-3 particle-square animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[55%] left-[8%] w-4 h-4 particle-square animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[25%] left-[55%] w-3 h-3 particle-square animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[25%] right-[55%] w-3.5 h-3.5 particle-square animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Diamonds with gradient animations - distributed evenly */}
				<div className="absolute top-[18%] left-[65%] w-4 h-4 particle-diamond animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[55%] right-[28%] w-3 h-3 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[28%] left-[28%] w-3.5 h-3.5 particle-diamond animate-float-dot-slow animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[75%] right-[65%] w-3 h-3 particle-diamond animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[12%] right-[45%] w-4 h-4 particle-diamond animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[38%] left-[50%] w-3 h-3 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[48%] right-[12%] w-3.5 h-3.5 particle-diamond animate-float-dot-slow animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[8%] left-[35%] w-3 h-3 particle-diamond animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[8%] right-[35%] w-4 h-4 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Stars with gradient animations - spread across screen */}
				<div className="absolute top-[22%] left-[25%] w-5 h-5 particle-star animate-particle-float animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[48%] right-[22%] w-4 h-4 particle-star animate-particle-float-2 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[22%] left-[48%] w-4.5 h-4.5 particle-star animate-particle-float-3 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[68%] right-[48%] w-4 h-4 particle-star animate-particle-float animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[48%] left-[68%] w-5 h-5 particle-star animate-particle-float-2 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[88%] right-[68%] w-4.5 h-4.5 particle-star animate-particle-float-3 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[32%] left-[88%] w-4 h-4 particle-star animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[32%] right-[88%] w-5 h-5 particle-star animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[12%] left-[42%] w-4 h-4 particle-star animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[12%] right-[42%] w-4.5 h-4.5 particle-star animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Hexagons with gradient animations - evenly distributed */}
				<div className="absolute top-[15%] left-[15%] w-4 h-4 particle-hexagon animate-particle-float animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[42%] right-[15%] w-3 h-3 particle-hexagon animate-particle-float-2 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[15%] left-[42%] w-3.5 h-3.5 particle-hexagon animate-particle-float-3 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[58%] right-[42%] w-4 h-4 particle-hexagon animate-particle-float animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[42%] left-[58%] w-3 h-3 particle-hexagon animate-particle-float-2 animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute top-[75%] right-[58%] w-3.5 h-3.5 particle-hexagon animate-particle-float-3 animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[28%] left-[75%] w-4 h-4 particle-hexagon animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[28%] right-[75%] w-3 h-3 particle-hexagon animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[5%] left-[60%] w-3.5 h-3.5 particle-hexagon animate-float-dot animate-gradient-color-dot animate-rotate-slow" />
				<div className="absolute bottom-[5%] right-[60%] w-4 h-4 particle-hexagon animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Tiny circles with gradient animations - spread across entire viewport */}
				<div className="absolute top-[8%] left-[30%] w-1.5 h-1.5 particle-circle animate-float-dot animate-gradient-color-dot-small" />
				<div className="absolute top-[28%] right-[35%] w-1 h-1 particle-circle animate-float-dot-delayed animate-gradient-color-dot-small" />
				<div className="absolute bottom-[28%] left-[35%] w-1.5 h-1.5 particle-circle animate-float-dot-slow animate-gradient-color-dot-small" />
				<div className="absolute top-[85%] right-[30%] w-1 h-1 particle-circle animate-float-dot-fast animate-gradient-color-dot-small" />
				<div className="absolute bottom-[8%] right-[50%] w-1.5 h-1.5 particle-circle animate-float-dot animate-gradient-color-dot-small" />
				<div className="absolute top-[15%] left-[50%] w-1 h-1 particle-circle animate-float-dot-delayed animate-gradient-color-dot-small" />
				<div className="absolute bottom-[15%] right-[20%] w-1.5 h-1.5 particle-circle animate-float-dot-slow animate-gradient-color-dot-small" />
				<div className="absolute top-[62%] left-[40%] w-1 h-1 particle-circle animate-float-dot-fast animate-gradient-color-dot-small" />
				<div className="absolute bottom-[62%] right-[40%] w-1.5 h-1.5 particle-circle animate-float-dot animate-gradient-color-dot-small" />
				<div className="absolute top-[35%] left-[75%] w-1 h-1 particle-circle animate-float-dot-delayed animate-gradient-color-dot-small" />
				<div className="absolute bottom-[35%] right-[75%] w-1.5 h-1.5 particle-circle animate-float-dot-slow animate-gradient-color-dot-small" />
				<div className="absolute top-[52%] left-[12%] w-1 h-1 particle-circle animate-float-dot-fast animate-gradient-color-dot-small" />
				<div className="absolute bottom-[52%] right-[12%] w-1.5 h-1.5 particle-circle animate-float-dot animate-gradient-color-dot-small" />

				{/* Tiny squares with gradient animations - distributed evenly */}
				<div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 particle-square animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[38%] right-[22%] w-1 h-1 particle-square animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[18%] left-[38%] w-1.5 h-1.5 particle-square animate-float-dot-slow animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[58%] right-[38%] w-1 h-1 particle-square animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[38%] left-[58%] w-1.5 h-1.5 particle-square animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[78%] right-[58%] w-1 h-1 particle-square animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[58%] left-[78%] w-1.5 h-1.5 particle-square animate-float-dot-slow animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[12%] right-[78%] w-1 h-1 particle-square animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[48%] left-[5%] w-1.5 h-1.5 particle-square animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute bottom-[48%] right-[5%] w-1 h-1 particle-square animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Tiny diamonds with gradient animations - spread across viewport */}
				<div className="absolute top-[25%] left-[28%] w-1.5 h-1.5 particle-diamond animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[45%] right-[28%] w-1 h-1 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[25%] left-[45%] w-1.5 h-1.5 particle-diamond animate-float-dot-slow animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[65%] right-[45%] w-1 h-1 particle-diamond animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[45%] left-[65%] w-1.5 h-1.5 particle-diamond animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[85%] right-[65%] w-1 h-1 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute bottom-[65%] left-[85%] w-1.5 h-1.5 particle-diamond animate-float-dot-slow animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute top-[5%] right-[85%] w-1 h-1 particle-diamond animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[35%] left-[92%] w-1.5 h-1.5 particle-diamond animate-float-dot animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute bottom-[35%] right-[92%] w-1 h-1 particle-diamond animate-float-dot-delayed animate-gradient-color-dot-small animate-rotate-reverse" />
				<div className="absolute top-[55%] left-[2%] w-1.5 h-1.5 particle-diamond animate-float-dot-slow animate-gradient-color-dot-small animate-rotate-slow" />
				<div className="absolute bottom-[55%] right-[2%] w-1 h-1 particle-diamond animate-float-dot-fast animate-gradient-color-dot-small animate-rotate-reverse" />

				{/* Animated gradient overlay - light theme */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9ff]/50" />
			</div>
		);
	}

	// Regular background for other pages
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Floating blobs */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl animate-float-slow" />
			<div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-float-slower" />
			<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-float-slow" />

			{/* Floating dots */}
			<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float-dot" />
			<div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-dot-delayed" />
			<div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-orange-400/30 rounded-full animate-float-dot-slow" />

			{/* Gradient overlay - light theme */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9ff]/30" />
		</div>
	);
}
