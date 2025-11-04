"use client";
import React from "react";
import { useResponsive } from "@/components/use-responsive";
import { Skeleton } from "@/components/ui/skeleton";

interface ResponsiveProp<T> {
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
}

interface BookSkeletonProps {
	width?: number | ResponsiveProp<number>;
}

export const BookSkeleton = ({ width = 196 }: BookSkeletonProps) => {
	const _width = useResponsive(width);

	return (
		<div className="inline-block w-fit" style={{ perspective: 900 }}>
			<div
				className="aspect-49/60 w-fit relative rotate-0"
				style={{
					transformStyle: "preserve-3d",
					minWidth: _width,
					containerType: "inline-size",
				}}>
				<div
					className="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative"
					style={{ width: _width }}>
					{/* Top stripe section skeleton */}
					<div className="w-full flex-1">
						<Skeleton className="w-full h-full rounded-none" />
					</div>
					
					{/* Bottom section skeleton */}
					<div className="flex-1">
						<Skeleton className="w-full h-full rounded-none" />
					</div>

					{/* Cover image skeleton overlay */}
					<Skeleton className="absolute inset-0 rounded-l-md rounded-r-md" />
				</div>

				{/* Side spine skeleton */}
				<div
					className="h-[calc(100%-2*3px)] w-[calc(29cqw-2px)] absolute top-[3px]"
					style={{
						transform: `translateX(calc(${_width} * 1px - 29cqw / 2 - 3px)) rotateY(90deg) translateX(calc(29cqw / 2))`,
					}}>
					<Skeleton className="w-full h-full rounded-none" />
				</div>

				{/* Back cover skeleton */}
				<div
					className="absolute left-0 top-0 rounded-l-md rounded-r h-full"
					style={{ 
						width: _width, 
						transform: "translateZ(calc(-1 * 29cqw))" 
					}}>
					<Skeleton className="w-full h-full rounded-l-md rounded-r" />
				</div>
			</div>
		</div>
	);
};