"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "../animated-toggle";
import UserDropDown from "./user-drop-down";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-background/60 backdrop-blur-md" : ""
			}`}>
			<div className="mx-auto  flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden  md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/") &&
								"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>

					<Link
						href="/create-companion"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/create-companion") &&
								"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Create Companion
					</Link>
					<Link
						href="/learning-ai"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/learning-ai") &&
								"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Learning
					</Link>
					<Link
						href="/journey"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/journey") &&
								"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						My Journey
					</Link>
					<Link
						href="/pricing"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/pricing") &&
								"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Pricing
					</Link>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<AnimatedThemeToggler />
					<UserDropDown />
				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[250px] sm:w-[300px]">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/") &&
											"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/learning-ai"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/learning-ai") &&
											"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Learning
								</Link>
								<Link
									href="/journey"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/journey") &&
											"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									My Journey
								</Link>
								<Link
									href="/pricing"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/pricing") &&
											"text-[#a288f9] hover:text-[#845fff] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Pricing
								</Link>
								<AnimatedThemeToggler />

								<UserDropDown />
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
