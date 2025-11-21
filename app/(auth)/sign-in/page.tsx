import { Suspense } from "react";

import SignInView from "@/modules/auth/ui/views/sign-content";
import AuthSkeleton from "@/components/auth-skeleton";
import { Metadata } from "next";

const SignInPage = () => {
	return (
		<Suspense fallback={<AuthSkeleton/>}>
			<SignInView />
		</Suspense>
	);
};

export default SignInPage;
export const metadata: Metadata = {
	title: "Sign In - BookLoom AI",
	description: "Sign in to your BookLoom account to access your AI-generated e-books, create new books, and manage your digital library.",
	keywords: "sign in, login, BookLoom account, ebook creator login, AI book generator access",
	authors: [{ name: "BookLoom" }],
	openGraph: {
		title: "Sign In - BookLoom AI",
		description: "Sign in to your BookLoom account to access your AI-generated e-books and create new books.",
		type: "website",
		siteName: "BookLoom",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sign In - BookLoom AI",
		description: "Sign in to access your BookLoom account.",
	},
};