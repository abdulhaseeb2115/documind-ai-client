"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<AnimatedBackground heroMode={true} />
			<div className="relative max-h-screen overflow-y-auto">
				{/* Hero Section */}
				<section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
					<div className="text-center max-w-4xl mx-auto animate-fade-in-up">
						<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6">
							<span className="bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent animate-gradient">
								DocuMind AI
							</span>
						</h1>
						<p className="text-xl sm:text-2xl text-[#1a1a1a] mb-4">
							Ask questions. Get answers.
						</p>
						<p className="text-lg text-[#6b6b7a] mb-12">
							Intelligent PDF document interaction powered by AI. Ask questions
							and get instant, context-aware answers from your documents.
						</p>
						<Link
							href="/tool"
							className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-xl hover:from-[#7e22ce] hover:to-[#2563eb] transition-all duration-300 hover-glow shadow-lg shadow-purple-500/50"
						>
							Start Chatting
						</Link>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-24 px-4 sm:px-6 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
							How It Works
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{/* Feature 1 */}
							<div className="bg-white rounded-2xl p-8 border border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-br from-[#9333ea] to-[#7e22ce] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									Upload PDF
								</h3>
								<p className="text-[#6b6b7a]">
									Simply drag and drop or select your PDF document. Our system
									processes it instantly.
								</p>
							</div>

							{/* Feature 2 */}
							<div className="bg-white rounded-2xl p-8 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									AI Processing
								</h3>
								<p className="text-[#6b6b7a]">
									Advanced RAG technology extracts context and creates an
									intelligent knowledge base from your document.
								</p>
							</div>

							{/* Feature 3 */}
							<div className="bg-white rounded-2xl p-8 border border-orange-200/50 hover:border-orange-300/70 transition-all duration-300 shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									Get Answers
								</h3>
								<p className="text-[#6b6b7a]">
									Ask any question about your document and receive accurate,
									context-aware answers instantly.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Value Section */}
				<section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-[#faf9ff] to-transparent">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
							Why Choose DocuMind AI
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-200/50 shadow-sm">
									<svg
										className="w-10 h-10 text-[#9333ea]"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									Privacy First
								</h3>
								<p className="text-[#6b6b7a]">
									Session-based processing. Your data is temporary and never
									stored permanently.
								</p>
							</div>

							<div className="text-center">
								<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200/50 shadow-sm">
									<svg
										className="w-10 h-10 text-[#3b82f6]"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									Lightning Fast
								</h3>
								<p className="text-[#6b6b7a]">
									Get instant responses powered by advanced AI and optimized
									processing.
								</p>
							</div>

							<div className="text-center">
								<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-orange-200/50 shadow-sm">
									<svg
										className="w-10 h-10 text-[#f97316]"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
									No Account Required
								</h3>
								<p className="text-[#6b6b7a]">
									Start using immediately. No sign-ups, no subscriptions, just
									upload and chat.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Screenshots Section */}
				<section className="py-24 px-4 sm:px-6 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
							See It In Action
						</h2>
						<p className="text-center text-[#6b6b7a] mb-12 max-w-2xl mx-auto">
							Experience the intuitive interface that makes document interaction seamless and powerful.
						</p>
						<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
							{/* Empty Session Screenshot */}
							<div className="flex flex-col items-center">
								<div className="w-full max-w-2xl bg-white rounded-2xl border border-purple-200/50 shadow-xl overflow-hidden p-4 hover:shadow-2xl transition-all duration-300">
									<Image
										src="/empty-session.png"
										alt="DocuMind AI - Empty Session Interface"
										width={1200}
										height={800}
										className="w-full h-auto rounded-xl"
										priority={false}
									/>
								</div>
								<h3 className="text-lg font-semibold mt-6 text-[#1a1a1a]">
									Clean Upload Interface
								</h3>
								<p className="text-sm text-[#6b6b7a] text-center max-w-md">
									Start by uploading your PDF with our intuitive drag-and-drop interface.
								</p>
							</div>

							{/* Chat Session Screenshot */}
							<div className="flex flex-col items-center">
								<div className="w-full max-w-2xl bg-white rounded-2xl border border-blue-200/50 shadow-xl overflow-hidden p-4 hover:shadow-2xl transition-all duration-300">
									<Image
										src="/chat-session.png"
										alt="DocuMind AI - Active Chat Session"
										width={1200}
										height={800}
										className="w-full h-auto rounded-xl"
										priority={false}
									/>
								</div>
								<h3 className="text-lg font-semibold mt-6 text-[#1a1a1a]">
									Interactive Chat Experience
								</h3>
								<p className="text-sm text-[#6b6b7a] text-center max-w-md">
									Ask questions and get instant, context-aware answers from your document.
								</p>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
}
