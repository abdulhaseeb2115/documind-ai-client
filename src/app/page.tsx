"use client";

import { useEffect, useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";

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

export default function Home() {
	const [file, setFile] = useState<File | null>(null);
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [query, setQuery] = useState<string>("");
	const [messages, setMessages] = useState<{ role: string; text: string }[]>(
		[]
	);
	const chatRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// when user refreshes or closes the tab, try to delete the session on backend
		const handleUnload = () => {
			if (sessionId) {
				// navigator.sendBeacon is best-effort; here we POST to delete endpoint synchronously when possible
				try {
					navigator.sendBeacon(
						`http://localhost:8000/delete-session/${sessionId}`
					);
				} catch {
					// fallback (not guaranteed)
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
		if (!file) return alert("choose a PDF first");
		const fd = new FormData();
		fd.append("file", file);
		try {
			const res = await axios.post("http://localhost:8000/upload-pdf", fd, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			setSessionId(res.data.session_id);
			setMessages([
				{ role: "system", text: "PDF uploaded. You can ask questions now." },
			]);
		} catch (err: unknown) {
			console.error(err);
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

		// send to backend
		try {
			const form = new FormData();
			form.append("session_id", sessionId);
			form.append("query", query);
			const res = await axios.post("http://localhost:8000/ask", form);
			const bot = { role: "bot", text: res.data.answer };
			setMessages((m) => [...m, userMsg, bot]); // add bot after user
		} catch (err: unknown) {
			console.error(err);
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
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
			<div className="mx-auto max-w-4xl px-4 py-10">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
							Chat with your PDF
						</h1>
						<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
							Upload a PDF and ask questions. Your session is temporary.
						</p>
					</div>
					<div className="shrink-0">
						<span className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
							session: {sessionId ? sessionId : "none"}
						</span>
					</div>
				</div>

				<div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur p-4 md:p-6 shadow-sm">
					<div className="flex flex-wrap items-center gap-3">
						<label
							htmlFor="pdf-input"
							className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
						>
							Choose PDF
						</label>
						<input
							id="pdf-input"
							type="file"
							accept="application/pdf"
							className="hidden"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								if (e.target.files && e.target.files[0]) {
									setFile(e.target.files[0]);
								}
							}}
						/>
						<button
							onClick={uploadPdf}
							className="inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 px-4 py-2 text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
							disabled={!file}
						>
							Upload PDF
						</button>
						<button
							onClick={clearSession}
							className="inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
						>
							Clear Session
						</button>
						{file && (
							<span className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-[40ch]">
								Selected: {file.name}
							</span>
						)}
					</div>

					<div
						ref={chatRef}
						className="mt-5 h-[60vh] w-full overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 md:p-5 space-y-3"
					>
						{messages.length === 0 && (
							<div className="text-sm text-zinc-500 dark:text-zinc-400">
								No messages yet.
							</div>
						)}
						{messages.map((m, i) => {
							const isUser = m.role === "user";
							const isBot = m.role === "bot";
							return (
								<div
									key={i}
									className={`flex ${isUser ? "justify-end" : "justify-start"}`}
								>
									<div className="max-w-[85%]">
										<div className="mb-1 text-[10px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
											{m.role}
										</div>
										<div
											className={
												`rounded-2xl px-4 py-2 text-sm shadow-sm ` +
												(isUser
													? "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-50"
													: isBot
													? "bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800"
													: "bg-amber-50 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100")
											}
										>
											{m.text}
										</div>
									</div>
								</div>
							);
						})}
					</div>

					<div className="mt-4 flex items-center gap-3">
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
							className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none ring-0 focus:border-zinc-300 dark:focus:border-zinc-700"
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
								if (e.key === "Enter") sendQuery();
							}}
						/>
						<button
							onClick={sendQuery}
							className="inline-flex items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 px-5 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
							disabled={!sessionId || !query.trim()}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
