"use client";

import { useEffect, useState } from "react";

interface UserAvatarProps {
	name?: string;
	size?: "sm" | "md" | "lg";
}

export default function UserAvatar({ name, size = "md" }: UserAvatarProps) {
	const [initials, setInitials] = useState("U");

	useEffect(() => {
		const getName = () => {
			if (name) {
				return name;
			}
			// Try to get from sessionStorage
			if (typeof window !== "undefined") {
				return sessionStorage.getItem("userName") || null;
			}
			return null;
		};

		const fullName = getName();
		if (fullName) {
			const parts = fullName
				.trim()
				.split(/\s+/)
				.filter((p) => p.length > 0);
			if (parts.length >= 2) {
				// First letter of first name + first letter of last name
				setInitials(
					(parts[0][0] || "").toUpperCase() +
						(parts[parts.length - 1][0] || "").toUpperCase()
				);
			} else if (parts.length === 1 && parts[0].length >= 2) {
				// If only one word, use first two letters
				setInitials(parts[0][0].toUpperCase() + parts[0][1].toUpperCase());
			} else {
				setInitials(fullName[0]?.toUpperCase() || "U");
			}
		} else {
			setInitials("U");
		}
	}, [name]);

	const sizeClasses = {
		sm: "w-8 h-8 text-xs",
		md: "w-10 h-10 text-sm",
		lg: "w-12 h-12 text-base",
	};

	return (
		<div
			className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow-lg`}
		>
			{initials}
		</div>
	);
}
