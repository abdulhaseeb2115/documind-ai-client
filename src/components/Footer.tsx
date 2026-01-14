"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#faf9ff] border-t border-purple-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3 max-w-2xl">
            <Logo />
            <p className="text-sm text-[#6b6b7a] text-center md:text-left leading-relaxed">
              DocuMind AI is an intelligent document interaction platform that transforms your PDFs into interactive knowledge bases. Using advanced Retrieval-Augmented Generation (RAG) technology, you can ask natural language questions and receive accurate, context-aware answers instantly. No account required, session-based privacy, and lightning-fast responses.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-[#6b6b7a] hover:text-[#9333ea] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tool"
              className="text-sm text-[#6b6b7a] hover:text-[#9333ea] transition-colors"
            >
              Tool
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#6b6b7a] hover:text-[#9333ea] transition-colors"
            >
              About
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-300/20">
          <p className="text-xs text-[#6b6b7a] text-center">
            © {new Date().getFullYear()} DocuMind AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
