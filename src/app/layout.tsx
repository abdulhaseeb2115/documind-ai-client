import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "DocuMind AI - Intelligent PDF Document Interaction Platform",
	description:
		"DocuMind AI is an intelligent document interaction platform that transforms your PDFs into interactive knowledge bases. Using advanced Retrieval-Augmented Generation (RAG) technology, ask natural language questions and receive accurate, context-aware answers instantly. No account required, session-based privacy, and lightning-fast responses.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#faf9ff] text-[#1a1a1a] max-h-screen overflow-hidden`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
