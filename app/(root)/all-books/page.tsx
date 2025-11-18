import Banner from "@/components/banner"
import BookFetch from "@/modules/book/ui/components/book-fetch"
import { BookSkeleton } from "@/modules/book/ui/components/book-skeleton"
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