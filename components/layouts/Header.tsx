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
    isScrolled 
      ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md" 
      : "bg-transparent"
  }`}>
  <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
    <Logo />

    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors",
          isActive("/")
            ? "text-[#4A90E2] hover:text-[#4A90E2] font-semibold underline underline-offset-4"
            : isScrolled 
              ? "text-gray-700dark:text-white hover:text-[#4A90E2]"
              : "text-white hover:text-white/80"
        )}>
        Home
      </Link>

      <Link
        href="/all-books"
        className={cn(
          "text-sm font-medium transition-colors",
          isActive("/all-books")
            ? "text-[#4A90E2] hover:text-[#4A90E2] font-semibold underline underline-offset-4"
            : isScrolled 
              ? "text-gray-700dark:text-white hover:text-[#4A90E2]"
              : "text-white hover:text-white/80"
        )}>
        All Books
      </Link>

      <Link
        href="/create-book"
        className={cn(
          "text-sm font-medium transition-colors",
          isActive("/create-book")
            ? "text-[#4A90E2] hover:text-[#4A90E2] font-semibold underline underline-offset-4"
            : isScrolled 
              ? "text-gray-700dark:text-white hover:text-[#4A90E2]"
              : "text-white hover:text-white/80"
        )}>
        Create Book
      </Link>
    </nav>

    <div className="hidden md:flex items-center gap-2">
      <AnimatedThemeToggler />
      <UserDropDown />
    </div>

    {/* Mobile Menu Trigger */}
    <div className="md:hidden flex items-center gap-2">
      <AnimatedThemeToggler />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className={cn(
              "h-6 w-6 transition-colors",
              isScrolled 
                ? "text-gray-700dark:text-white" 
                : "text-white"
            )} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white dark:bg-slate-900">
          <nav className="flex flex-col gap-4 mt-8 items-center">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4A90E2]",
                isActive("/")
                  ? "text-[#4A90E2] font-semibold underline underline-offset-4"
                  : "text-gray-700dark:text-white"
              )}>
              Home
            </Link>
            <Link
              href="/all-books"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4A90E2]",
                isActive("/all-books")
                  ? "text-[#4A90E2] font-semibold underline underline-offset-4"
                  : "text-gray-700dark:text-white"
              )}>
              All Books
            </Link>
            <Link
              href="/create-book"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4A90E2]",
                isActive("/create-book")
                  ? "text-[#4A90E2] font-semibold underline underline-offset-4"
                  : "text-gray-700dark:text-white"
              )}>
              Create Book
            </Link>
            <div className="mt-4">
              <UserDropDown />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>
	);
}
