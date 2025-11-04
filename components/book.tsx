"use client";
import React from "react";
import { useResponsive } from "@/components/use-responsive";
import clsx from "clsx";
import { Badge } from "./ui/badge";

interface ResponsiveProp<T> {
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
}

interface BookProps {
	coverImageUrl?: string | null;
	variant?: "simple" | "stripe";
	width?: number | ResponsiveProp<number>;
	color?: string;

}

export const Book = ({
	coverImageUrl,
	variant = "stripe",
	width = 196,
	color,
}: BookProps) => {
	const _width = useResponsive(width);
	const _color = color
		? color
		: variant === "simple"
		? "var(--ds-background-200)"
		: "var(--ds-amber-600)";

	return (
		<div className="inline-block w-fit" style={{ perspective: 900 }}>
			<div
				className="aspect-49/60 w-fit relative rotate-0 duration-250 book-rotate"
				style={{
					transformStyle: "preserve-3d",
					minWidth: _width,
					containerType: "inline-size",
				}}>
				<div
					className="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r"
					style={{ width: _width }}>
					<div
						className={clsx(
							"w-full relative overflow-hidden",
							variant === "stripe" && "flex-1"
						)}
						style={{ background: _color }}></div>
					<div
						className={clsx(
							"relative flex-1",
							(variant === "stripe" ||
								(variant === "simple" && color === undefined)) &&
								"bg-book-gradient"
						)}
						style={{
							background:
								variant === "simple" && color !== undefined
									? _color
									: undefined,
						}}></div>
					{coverImageUrl && (
						<div
							className="absolute top-0 left-0 inset-0 rounded-l-md rounded-r-md pointer-events-none bg-cover bg-center bg-no-repeat"
							style={{ backgroundImage: `url('${coverImageUrl}')` }}
						/>
					)}
				</div>

				<div
					className="h-[calc(100%-2*3px)] w-[calc(29cqw-2px)] absolute top-[3px]"
					style={{
						background:
							"linear-gradient(90deg, #eaeaea, transparent 70%), linear-gradient(#fff, #fafafa)",
						transform: `translateX(calc(${_width} * 1px - 29cqw / 2 - 3px)) rotateY(90deg) translateX(calc(29cqw / 2))`,
					}}
				/>
				<div
					className="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full"
					style={{ width: _width, transform: "translateZ(calc(-1 * 29cqw))" }}
				/>
			</div>
		</div>
	);
};
