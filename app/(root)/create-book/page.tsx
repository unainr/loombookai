import { CreateBookView } from "@/modules/book/ui/components/views/create-book-view";
import { Metadata } from "next";
import { Suspense } from "react";

const CreateBook = () => {
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<CreateBookView />
			</Suspense>
		</>
	);
};

export default CreateBook;
export const metadata: Metadata = {
	title: "Create E-Book - BookLoom AI",
	description: "Start creating your e-book with AI. Input your topic, customize settings, and let BookLoom generate a professional digital book for you instantly.",
	keywords: "create ebook, AI book generator, write ebook, digital book creator, automated writing, BookLoom",
	authors: [{ name: "BookLoom" }],
	openGraph: {
		title: "Create E-Book - BookLoom AI",
		description: "Start creating your e-book with AI. Input your topic, customize settings, and let BookLoom generate a professional digital book for you instantly.",
		type: "website",
		siteName: "BookLoom",
	},
	twitter: {
		card: "summary_large_image",
		title: "Create E-Book - BookLoom AI",
		description: "Start creating your e-book with AI instantly.",
	},
};