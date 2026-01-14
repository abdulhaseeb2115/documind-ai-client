"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/tool", label: "Tool" },
		{ href: "/about", label: "About" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-300/30 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Logo />
					<div className="flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`text-sm font-medium transition-colors ${
									pathname === link.href
										? "text-[#9333ea]"
										: "text-[#6b6b7a] hover:text-[#9333ea]"
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
