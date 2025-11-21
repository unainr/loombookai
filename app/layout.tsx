import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BookLoom - AI-Powered E-Book Creator",
	description: "Create professional e-books effortlessly with BookLoom's AI technology. Transform your ideas into beautifully formatted digital books in minutes.",
	keywords: "AI ebook creator, digital book generator, automated book writing, AI publishing, ebook maker, BookLoom",
	authors: [{ name: "BookLoom" }],
	openGraph: {
		title: "BookLoom - AI-Powered E-Book Creator",
		description: "Create professional e-books effortlessly with BookLoom's AI technology. Transform your ideas into beautifully formatted digital books in minutes.",
		type: "website",
		siteName: "BookLoom",
	},
	twitter: {
		card: "summary_large_image",
		title: "BookLoom - AI-Powered E-Book Creator",
		description: "Create professional e-books effortlessly with BookLoom's AI technology.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange>
					{children}
					  <Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
