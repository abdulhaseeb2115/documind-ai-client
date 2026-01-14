"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

export default function About() {
	return (
		<>
			<AnimatedBackground />
			<div className="relative max-h-screen overflow-y-auto pt-16">
				{/* Header */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
							About DocuMind AI
						</h1>
						<p className="text-xl text-[#1a1a1a]">
							Transforming how you interact with your documents
						</p>
					</div>
				</section>

				{/* Main Content */}
				<section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
					<div className="max-w-4xl mx-auto space-y-12">
						<div className="bg-white rounded-2xl p-8 md:p-12 border border-purple-200/50 shadow-sm">
							<h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">
								What is DocuMind AI?
							</h2>
							<p className="text-[#6b6b7a] leading-relaxed text-lg mb-4">
								DocuMind AI is an intelligent document interaction platform that
								allows you to have natural conversations with your PDF
								documents. Using advanced Retrieval-Augmented Generation (RAG)
								technology, we transform static documents into interactive
								knowledge bases.
							</p>
							<p className="text-[#6b6b7a] leading-relaxed text-lg">
								Simply upload your PDF, and our AI system extracts and
								understands the content, enabling you to ask questions and
								receive accurate, context-aware answers in real-time.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 md:p-12 border border-blue-200/50 shadow-sm">
							<h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">
								How PDFs Are Processed
							</h2>
							<p className="text-[#6b6b7a] leading-relaxed text-lg mb-4">
								When you upload a PDF, our system performs several intelligent
								operations:
							</p>
							<ul className="space-y-3 text-[#6b6b7a] text-lg">
								<li className="flex items-start">
									<span className="text-[#9333ea] mr-3">•</span>
									<span>
										<strong className="text-[#1a1a1a]">Text Extraction:</strong>{" "}
										Advanced parsing extracts all readable text from your
										document while preserving structure and context.
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#3b82f6] mr-3">•</span>
									<span>
										<strong className="text-[#1a1a1a]">
											Embedding Generation:
										</strong>{" "}
										The extracted content is converted into high-dimensional
										vector embeddings that capture semantic meaning.
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#f97316] mr-3">•</span>
									<span>
										<strong className="text-[#1a1a1a]">Vector Storage:</strong>{" "}
										These embeddings are stored in a vector database, creating a
										searchable knowledge base unique to your session.
									</span>
								</li>
							</ul>
						</div>

						<div className="bg-white rounded-2xl p-8 md:p-12 border border-orange-200/50 shadow-sm">
							<h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">
								How Context-Based Answers Work
							</h2>
							<p className="text-[#6b6b7a] leading-relaxed text-lg mb-4">
								When you ask a question, DocuMind AI doesn&apos;t just search
								for keywords—it understands the meaning and context of your
								query:
							</p>
							<ol className="space-y-4 text-[#6b6b7a] text-lg">
								<li className="flex items-start">
									<span className="text-[#9333ea] mr-3 font-bold">1.</span>
									<span>
										<strong className="text-[#1a1a1a]">
											Query Understanding:
										</strong>{" "}
										Your question is analyzed to understand intent and semantic
										meaning.
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#3b82f6] mr-3 font-bold">2.</span>
									<span>
										<strong className="text-[#1a1a1a]">
											Relevant Retrieval:
										</strong>{" "}
										The system searches the vector database to find the most
										relevant sections of your document that relate to your
										question.
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#f97316] mr-3 font-bold">3.</span>
									<span>
										<strong className="text-[#1a1a1a]">
											Contextual Generation:
										</strong>{" "}
										Using the retrieved context, our AI generates a precise,
										accurate answer that directly addresses your question based
										on your document&apos;s content.
									</span>
								</li>
							</ol>
							<p className="text-[#6b6b7a] leading-relaxed text-lg mt-6">
								This approach ensures that every answer is grounded in your
								actual document content, providing reliable and accurate
								responses rather than generic information.
							</p>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
}
