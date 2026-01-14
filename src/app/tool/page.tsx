"use client";

import { useEffect, useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import Link from "next/link";
import Logo from "@/components/Logo";
import UserAvatar from "@/components/UserAvatar";
import AnimatedBackground from "@/components/AnimatedBackground";

function isAxiosErrorWithDetail(
	err: unknown
): err is { response: { data: { detail?: string } } } {
	if (
		typeof err === "object" &&
		err !== null &&
		"response" in err &&
		typeof (err as { response?: unknown }).response === "object" &&
		(err as { response?: unknown }).response !== null
	) {
		const response = (err as { response: unknown }).response;
		if (
			"data" in (response as object) &&
			typeof (response as { data?: unknown }).data === "object" &&
			(response as { data?: unknown }).data !== null
		) {
			return true;
		}
	}
	return false;
}

function isAxiosErrorWithError(
	err: unknown
): err is { response: { data: { error?: string } } } {
	if (
		typeof err === "object" &&
		err !== null &&
		"response" in err &&
		typeof (err as { response?: unknown }).response === "object" &&
		(err as { response?: unknown }).response !== null
	) {
		const response = (err as { response?: unknown }).response;
		if (
			"data" in (response as object) &&
			typeof (response as { data?: unknown }).data === "object" &&
			(response as { data?: unknown }).data !== null
		) {
			return true;
		}
	}
	return false;
}

export default function Tool() {
	const [file, setFile] = useState<File | null>(null);
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [query, setQuery] = useState<string>("");
	const [messages, setMessages] = useState<{ role: string; text: string }[]>(
		[]
	);
	const [uploading, setUploading] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [isTyping, setIsTyping] = useState(false);
	const chatRef = useRef<HTMLDivElement | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [dragActive, setDragActive] = useState(false);
	const [showNameModal, setShowNameModal] = useState(false);
	const [userName, setUserName] = useState<string>("");
	const nameInputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// Check if user name exists in sessionStorage
		const storedName = sessionStorage.getItem("userName");
		if (!storedName) {
			setShowNameModal(true);
		} else {
			setUserName(storedName);
		}
	}, []);

	useEffect(() => {
		// Focus name input when modal opens
		if (showNameModal && nameInputRef.current) {
			nameInputRef.current.focus();
		}
	}, [showNameModal]);

	useEffect(() => {
		// when user refreshes or closes the tab, try to delete the session on backend
		const handleUnload = () => {
			if (sessionId) {
				try {
					navigator.sendBeacon(
						`http://localhost:8000/delete-session/${sessionId}`
					);
				} catch {
					fetch(`http://localhost:8000/delete-session/${sessionId}`, {
						method: "POST",
						keepalive: true,
					});
				}
			}
		};
		window.addEventListener("beforeunload", handleUnload);
		return () => window.removeEventListener("beforeunload", handleUnload);
	}, [sessionId]);

	useEffect(() => {
		// scroll to bottom on new messages
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [messages]);

	const uploadPdf = async () => {
		if (!file) return alert("Choose a PDF first");
		setUploading(true);
		setUploadProgress(0);

		const fd = new FormData();
		fd.append("file", file);

		// Simulate progress
		const progressInterval = setInterval(() => {
			setUploadProgress((prev) => {
				if (prev >= 90) {
					clearInterval(progressInterval);
					return 90;
				}
				return prev + 10;
			});
		}, 200);

		try {
			const res = await axios.post("http://localhost:8000/upload-pdf", fd, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			clearInterval(progressInterval);
			setUploadProgress(100);
			setSessionId(res.data.session_id);
			setMessages([
				{
					role: "system",
					text: "PDF uploaded successfully. You can ask questions now.",
				},
			]);
			setTimeout(() => {
				setUploading(false);
				setUploadProgress(0);
			}, 500);
		} catch (err: unknown) {
			clearInterval(progressInterval);
			console.error(err);
			setUploading(false);
			setUploadProgress(0);
			if (isAxiosErrorWithDetail(err)) {
				alert(err.response.data.detail || "Upload failed");
			} else {
				alert("Upload failed");
			}
		}
	};

	const sendQuery = async () => {
		if (!sessionId) return alert("Upload a PDF first");
		if (!query.trim()) return;
		const userMsg = { role: "user", text: query };
		setMessages((m) => [...m, userMsg]);
		setQuery("");
		setIsTyping(true);

		try {
			const form = new FormData();
			form.append("session_id", sessionId);
			form.append("query", userMsg.text);
			const res = await axios.post("http://localhost:8000/ask", form);
			setIsTyping(false);
			const bot = { role: "bot", text: res.data.answer };
			setMessages((m) => [...m, bot]);
		} catch (err: unknown) {
			console.error(err);
			setIsTyping(false);
			let errorMsg = "Request failed";
			if (isAxiosErrorWithError(err)) {
				errorMsg = err.response.data.error || errorMsg;
			}
			setMessages((m) => [...m, { role: "bot", text: "Error: " + errorMsg }]);
		}
	};

	const clearSession = async () => {
		if (!sessionId) return;
		try {
			await axios.delete(`http://localhost:8000/delete-session/${sessionId}`);
		} catch {
			// ignore
		}
		setSessionId(null);
		setMessages([]);
		setFile(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
			// Clear previous chat when new file is selected
			if (sessionId) {
				clearSession();
			}
		}
	};

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const droppedFile = e.dataTransfer.files[0];
			if (droppedFile.type === "application/pdf") {
				setFile(droppedFile);
				if (sessionId) {
					clearSession();
				}
			} else {
				alert("Please upload a PDF file");
			}
		}
	};

	const handleNameSubmit = (e?: React.FormEvent | React.KeyboardEvent) => {
		if (e) {
			e.preventDefault();
		}
		const trimmedName = userName.trim();
		if (trimmedName.length >= 2) {
			sessionStorage.setItem("userName", trimmedName);
			setShowNameModal(false);
		} else {
			alert("Please enter your full name (at least 2 characters)");
		}
	};

	const handleNameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleNameSubmit(e);
		}
	};

	return (
		<>
			<AnimatedBackground />

			{/* Name Input Modal */}
			{showNameModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
					<div className="bg-white rounded-2xl border border-purple-200/50 p-8 max-w-md w-full mx-4 shadow-2xl">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-gradient-to-br from-[#9333ea]/20 to-[#3b82f6]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-200/50">
								<svg
									className="w-8 h-8 text-[#9333ea]"
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
							<h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
								Welcome to DocuMind AI
							</h2>
							<p className="text-[#6b6b7a]">
								Please enter your full name to personalize your experience
							</p>
						</div>
						<form onSubmit={handleNameSubmit}>
							<input
								ref={nameInputRef}
								type="text"
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								onKeyDown={handleNameKeyDown}
								placeholder="Enter your full name (e.g., John Doe)"
								className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-[#1a1a1a] placeholder-[#6b6b7a] focus:outline-none focus:border-[#9333ea] focus:ring-2 focus:ring-purple-500/20 mb-4"
								required
								minLength={2}
							/>
							<button
								type="submit"
								className="w-full py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white rounded-xl font-semibold hover:from-[#7e22ce] hover:to-[#2563eb] transition-all duration-300 hover-glow"
							>
								Continue
							</button>
						</form>
					</div>
				</div>
			)}

			<div className="relative h-screen max-h-screen overflow-hidden pt-16">
				<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 max-h-full overflow-hidden">
					<div className="grid md:grid-cols-5 lg:grid-cols-7 gap-6 h-[calc(100dvh-8rem)]">
						{/* Left Panel - Upload */}
						<div className="flex flex-col bg-white backdrop-blur-md rounded-2xl border border-purple-200/50 p-6 md:col-span-2 shadow-lg">
							{/* Header */}
							<div className="flex items-center justify-between mb-6">
								<Link
									href="/"
									className="text-sm text-[#6b6b7a] hover:text-[#9333ea] transition-colors flex items-center gap-2"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 19l-7-7m0 0l7-7m-7 7h18"
										/>
									</svg>
									Back to Home
								</Link>
								<Logo />
							</div>

							{/* Upload Area */}
							<div className="flex-1 flex flex-col">
								<h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">
									Upload PDF
								</h2>

								{/* Drag & Drop Zone */}
								<div
									onDragEnter={handleDrag}
									onDragLeave={handleDrag}
									onDragOver={handleDrag}
									onDrop={handleDrop}
									className={`flex-1 border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 ${
										dragActive
											? "border-[#9333ea] bg-purple-50/50"
											: "border-purple-200/50 bg-[#faf9ff]/30 hover:border-[#9333ea]/50 hover:bg-purple-50/50"
									}`}
								>
									<div className="text-center">
										<div className="w-16 h-16 bg-gradient-to-br from-[#9333ea]/20 to-[#3b82f6]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
											<svg
												className="w-8 h-8 text-[#9333ea]"
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
										<p className="text-[#1a1a1a] mb-2 font-medium">
											Drag & drop your PDF here
										</p>
										<p className="text-[#6b6b7a] text-sm mb-4">or</p>
										<label
											htmlFor="pdf-input"
											className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white rounded-lg font-semibold cursor-pointer hover:from-[#7e22ce] hover:to-[#2563eb] transition-all duration-300 hover-glow"
										>
											Choose File
										</label>
										<input
											ref={fileInputRef}
											id="pdf-input"
											type="file"
											accept="application/pdf"
											className="hidden"
											onChange={handleFileChange}
										/>
									</div>
								</div>

								{/* Selected File */}
								{file && (
									<div className="mt-4 p-4 bg-purple-50/50 rounded-lg border border-purple-200/50">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-3 flex-1 min-w-0">
												<div className="w-10 h-10 bg-gradient-to-br from-[#9333ea]/20 to-[#3b82f6]/20 rounded-lg flex items-center justify-center shrink-0">
													<svg
														className="w-5 h-5 text-[#9333ea]"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
														/>
													</svg>
												</div>
												<div className="flex-1 min-w-0">
													<p className="text-sm font-medium text-[#1a1a1a] truncate">
														{file.name}
													</p>
													<p className="text-xs text-[#6b6b7a]">
														{(file.size / 1024 / 1024).toFixed(2)} MB
													</p>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Upload Progress */}
								{uploading && (
									<div className="mt-4">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm text-[#6b6b7a]">
												Uploading...
											</span>
											<span className="text-sm text-[#f97316]">
												{uploadProgress}%
											</span>
										</div>
										<div className="w-full bg-zinc-200 rounded-full h-2 overflow-hidden">
											<div
												className="h-full bg-gradient-to-r from-[#f97316] to-[#ea580c] transition-all duration-300"
												style={{ width: `${uploadProgress}%` }}
											/>
										</div>
									</div>
								)}

								{/* Success Indicator */}
								{sessionId && !uploading && (
									<div className="mt-4 p-4 bg-[#f97316]/10 border border-[#f97316]/30 rounded-lg flex items-center gap-3">
										<div className="w-8 h-8 bg-[#f97316]/20 rounded-full flex items-center justify-center">
											<svg
												className="w-5 h-5 text-[#f97316]"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm font-medium text-[#f97316]">
												PDF uploaded successfully
											</p>
											<p className="text-xs text-[#6b6b7a]">
												You can now ask questions
											</p>
										</div>
									</div>
								)}

								{/* Upload Button */}
								<button
									onClick={uploadPdf}
									disabled={!file || uploading}
									className="mt-4 w-full py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white rounded-lg font-semibold hover:from-[#7e22ce] hover:to-[#2563eb] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-glow"
								>
									{uploading ? "Uploading..." : "Upload PDF"}
								</button>

								{/* Clear Session Button */}
								{sessionId && (
									<button
										onClick={clearSession}
										className="mt-3 w-full py-2 border border-zinc-200 text-[#6b6b7a] rounded-lg font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
									>
										Clear Session
									</button>
								)}
							</div>
						</div>

						{/* Right Panel - Chat */}
						<div className="flex flex-col bg-white backdrop-blur-md rounded-2xl border border-blue-200/50 p-6 md:col-span-3 lg:col-span-5 shadow-lg max-h-full overflow-hidden">
							<h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">Chat</h2>

							{/* Chat Messages */}
							<div
								ref={chatRef}
								className="flex-1 max-h-full overflow-y-auto mb-4 space-y-4 pr-2"
							>
								{messages.length === 0 && (
									<div className="flex items-center justify-center h-full">
										<div className="text-center">
											<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200/50 shadow-sm">
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
														d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
													/>
												</svg>
											</div>
											<p className="text-[#6b6b7a]">
												{sessionId
													? "Ask a question about your PDF"
													: "Upload a PDF to start chatting"}
											</p>
										</div>
									</div>
								)}

								{messages.map((m, i) => {
									const isUser = m.role === "user";
									const isSystem = m.role === "system";

									if (isSystem) {
										return (
											<div
												key={i}
												className="flex items-center justify-center animate-fade-in-up"
											>
												<div className="px-4 py-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-lg text-sm text-[#f97316]">
													{m.text}
												</div>
											</div>
										);
									}

									return (
										<div
											key={i}
											className={`flex items-start gap-3 ${
												isUser ? "justify-end" : "justify-start"
											} ${
												isUser
													? "animate-slide-in-right"
													: "animate-slide-in-left"
											}`}
										>
											{!isUser && (
												<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#9333ea] flex items-center justify-center shrink-0">
													<svg
														className="w-6 h-6 text-white"
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
											)}
											<div
												className={`max-w-[75%] rounded-2xl px-4 py-3 ${
													isUser
														? "bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white"
														: "bg-zinc-50 text-[#1a1a1a] border border-blue-200/50"
												}`}
											>
												<p className="text-sm leading-relaxed whitespace-pre-wrap">
													{m.text}
												</p>
											</div>
											{isUser && <UserAvatar size="md" />}
										</div>
									);
								})}

								{/* Typing Indicator */}
								{isTyping && (
									<div className="flex items-start gap-3 animate-slide-in-left">
										<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#9333ea] flex items-center justify-center shrink-0">
											<svg
												className="w-6 h-6 text-white"
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
										<div className="bg-zinc-50 border border-blue-200/50 rounded-2xl px-4 py-3">
											<div className="typing-indicator flex gap-1">
												<span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
												<span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
												<span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
											</div>
										</div>
									</div>
								)}
							</div>

							{/* Chat Input */}
							<div className="flex items-center gap-3">
								<input
									value={query}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setQuery(e.target.value)
									}
									placeholder={
										sessionId
											? "Ask about the uploaded PDF..."
											: "Upload a PDF first"
									}
									disabled={!sessionId}
									onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
										if (e.key === "Enter" && !e.shiftKey) {
											e.preventDefault();
											sendQuery();
										}
									}}
									className="flex-1 px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-[#1a1a1a] placeholder-[#6b6b7a] focus:outline-none focus:border-[#9333ea]/50 focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
								/>
								<button
									onClick={sendQuery}
									disabled={!sessionId || !query.trim() || isTyping}
									className="px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-white rounded-xl font-semibold hover:from-[#7e22ce] hover:to-[#2563eb] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-glow"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
