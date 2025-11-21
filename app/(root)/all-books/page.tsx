import Banner from "@/components/banner"
import BookFetch from "@/modules/book/ui/components/book-fetch"
import { BookSkeleton } from "@/modules/book/ui/components/book-skeleton"
import { Metadata } from "next"
import { Suspense } from "react"

const AllBooks = () => {
  return (
    <>
    <Banner title="All Books" linkText="all-books" />
          <div className="w-full   px-4 sm:px-6 lg:px-8 flex justify-center">
                    <div className="w-full ">
                        <Suspense fallback={<BookSkeleton width={196} />}>
                            <BookFetch title={' All'} subTitle={'Books'} className="my-15" />
                        </Suspense>
                    </div>
                </div>
    </>
  )
}

export default AllBooks


export const metadata: Metadata = {
	title: "My E-Books - BookLoom AI",
	description: "Browse and manage all your AI-generated e-books in one place. View, edit, download, and organize your BookLoom library.",
	keywords: "ebook library, my ebooks, manage ebooks, digital book collection, BookLoom library",
	authors: [{ name: "BookLoom" }],
	openGraph: {
		title: "My E-Books - BookLoom AI",
		description: "Browse and manage all your AI-generated e-books in one place. View, edit, download, and organize your BookLoom library.",
		type: "website",
		siteName: "BookLoom",
	},
	twitter: {
		card: "summary_large_image",
		title: "My E-Books - BookLoom AI",
		description: "Browse and manage all your AI-generated e-books.",
	},
};