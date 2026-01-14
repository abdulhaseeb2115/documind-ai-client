"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/" className="inline-block">
			<Image
				src="/logo.png"
				alt="DocuMind AI"
				width={55}
				height={55}
				className="h-14 w-auto"
				priority
			/>
		</Link>
	);
}
