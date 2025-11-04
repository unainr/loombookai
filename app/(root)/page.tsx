import { Book } from "@/components/book"
import BookFeatured from "@/components/book-featured"
import BookFetch from "@/modules/book/ui/components/book-fetch"
import { BookSkeleton } from "@/modules/book/ui/components/book-skeleton"
import { HomeView } from "@/modules/home/ui/views/home-view"
import { Suspense } from "react"

const Home = () => {
  return (
    <>
    {/* <HomeView/> */}
    <div className="my-10">

    <BookFeatured/>
    </div>
   <div className="flex flex-col items-start justify-start mb-20 w-full my-20 px-4 sm:px-6 lg:px-8">
  <Suspense fallback={<BookSkeleton width={196}/>}>
    <BookFetch/>
  </Suspense>
</div>

    </>
  )
}

export default Home
